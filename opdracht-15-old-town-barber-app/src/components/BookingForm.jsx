import { useState } from "react";
import { toast } from "react-toastify";
import { getAppointments, setAppointments } from "../utils/localStorage";

export default function BookingForm({ user, shop, appointments, onNewAppointments }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const book = () => {
    if (!service || !date || !time) {
      return toast.error("Vul al de velden in!");
    }

    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      return toast.error("Je kan geen datum in het verleden kiezen");
    }

    const selectedService = shop.services.find((s) => s.id == service);
    const newAppointment = { user, service: selectedService, date, time };

    const updated = [...appointments, newAppointment];

    setAppointments(updated);
    onNewAppointments(updated);

    toast.success("De afspraak is geboekt!");
  };

  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-3">Afspraak boeken</h2>

      <select className="input" onChange={(e) => setService(e.target.value)} value={service}>
        <option hidden>Service kiezen</option>
        {shop.services.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

      <input
        type="date"
        className="input"
        min={new Date().toISOString().split("T")[0]}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        className="input"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn-primary w-full mt-3" onClick={book}>Boeken</button>
    </div>
  );
}
