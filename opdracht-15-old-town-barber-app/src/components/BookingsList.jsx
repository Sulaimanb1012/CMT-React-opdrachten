export default function BookingsList({ appointments }) {
  const sorted = [...appointments].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );

  return (
    <div className="card max-h-[400px] overflow-auto">
      <h2 className="text-lg font-bold mb-3">Mijn afspraken</h2>

      {sorted.length === 0 && (
        <p className="text-gray-500">Nog geen afspraken.</p>
      )}

      {sorted.map((a, i) => (
        <div key={i} className="border-b py-2">
          <b>{a.service.name}</b> — {a.date} om {a.time} (€{a.service.price})
        </div>
      ))}
    </div>
  );
}
