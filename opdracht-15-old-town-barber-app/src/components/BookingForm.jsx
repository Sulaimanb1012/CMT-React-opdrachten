import { useState } from "react";
import { toast } from "react-toastify";
import { getAppointments, setAppointments } from "../utils/localStorage";

export default function BookingForm({ user, shop }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const book = () => {
    if (!service || !date || !time)
      return toast.error("Vul alle velden in!");

    const selectedService = shop.services.find((s) => s.id == service);
    const newAppointment = { user, service: selectedService, date, time };

    const updated = [...getAppointments(), newAppointment];
    setAppointments(updated);
    toast.success("Afspraak is geboekt");
  };

  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-3">Afspraak boeken</h2>

      <select className="input" onChange={(e) => setService(e.target.value)}>
        <option hidden>Service kiezen</option>
        {shop.services.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

      <input type="date" className="input" onChange={(e) => setDate(e.target.value)} />
      <input type="time" className="input" onChange={(e) => setTime(e.target.value)} />

      <button className="btn-primary w-full mt-3" onClick={book}>Boeken</button>
    </div>
  );
}
