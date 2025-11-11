export default function ShopInfo({ shop }) {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-2">{shop.name}</h2>
      <p className="text-gray-600 mb-4">{shop.hours}</p>

      {shop.services.map((s) => (
        <div key={s.id} className="flex justify-between py-2 border-b border-gray-200">
          <span>{s.name}</span>
          <span>€{s.price}</span>
        </div>
      ))}
    </div>
  );
}
