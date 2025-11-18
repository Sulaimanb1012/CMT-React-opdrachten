import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserProfile, getAppointments, setAppointments } from "./utils/localStorage";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

const shopData = {
  name: "Old Town Barber",
  hours: "Ma-Za: 09:00 - 18:00",
  services: [
    { id: 1, name: "Knipbeurt", price: 25 },
    { id: 2, name: "Baard trimmen", price: 15 },
    { id: 3, name: "Knip + Baard", price: 35 },
    { id: 4, name: "Haar wassen", price: 10 },
  ],
};

export default function App() {
  const [user, setUser] = useState(getUserProfile());
  const [appointments, setAppointmentsState] = useState(getAppointments());

  useEffect(() => {
    const now = new Date();
    appointments.forEach((a) => {
      const time = new Date(`${a.date}T${a.time}`);
      const diff = (time - now) / 60000;
      if (diff > 0 && diff < 15) {
        toast.info(`⏰ Reminder: ${a.service.name} om ${a.time}`);
      }
    });
  }, [appointments]);

 
  const handleUpdate = (updated) => {
    setAppointments(updated);
    setAppointmentsState(updated);
  };

  if (!user) return <UserProfile onSave={setUser} />;

  return (
    <div className="max-w-5xl mx-auto">
      <ToastContainer />

      <div className="flex justify-between items-center mb-8 border-b pb-3">
        <h1 className="text-3xl font-bold uppercase tracking-wide">Old Town Barber</h1>
        <button className="btn-secondary" onClick={() => setUser(null)}>Bewerk jou profiel</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShopInfo shop={shopData} />
        <BookingsList appointments={appointments} />
        <BookingForm
          user={user}
          shop={shopData}
          appointments={appointments}
          onNewAppointments={handleUpdate}
        />
      </div>
    </div>
  );
}
