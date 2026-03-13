export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-green-100 p-4 m-2 rounded">
      <p className="font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}