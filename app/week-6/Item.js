export default function Item({ item }) {
  return (
    <div className="bg-green-100 p-3 mb-2 rounded">
      <h3 className="font-bold">{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}