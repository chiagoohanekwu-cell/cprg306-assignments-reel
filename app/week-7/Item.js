export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-green-100 p-3 mb-2 rounded">
      <h3 className="font-bold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}