export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-green-100 p-4 m-2 rounded shadow">
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm text-gray-600">Category: {category}</p>
    </li>
  );
}