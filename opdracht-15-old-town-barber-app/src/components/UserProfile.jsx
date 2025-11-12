import { useState } from "react";
import { toast } from "react-toastify";
import { setUserProfile } from "../utils/localStorage";

export default function UserProfile({ onSave, defaultValues }) {
  const [form, setForm] = useState(defaultValues || { name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveProfile = () => {
    if (!form.name || !form.email || !form.phone)
      return toast.error("Vul al je velden in");

    setUserProfile(form);
    toast.success(" je profile is nu opgeslagen");
    onSave(form);
  };

  return (
    <div className="card max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Jouw Profiel</h2>

      <input className="input" name="name" placeholder="Naam" value={form.name} onChange={handleChange}/>
      <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
      <input className="input" name="phone" placeholder="Telefoon" value={form.phone} onChange={handleChange}/>

      <button className="btn-primary w-full mt-3" onClick={saveProfile}>
        Opslaan
      </button>
    </div>
  );
}
