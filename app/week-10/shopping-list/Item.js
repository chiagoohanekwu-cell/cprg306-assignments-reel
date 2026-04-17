export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="bg-green-100 p-3 mb-2 rounded cursor-pointer hover:bg-green-200"
    >
      <h3 className="font-semibold capitalize">{name}</h3>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm text-gray-600 capitalize">
        Category: {category}
      </p>
    </div>
  );
}