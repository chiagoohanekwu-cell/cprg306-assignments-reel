"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // create sorted copy (DO NOT mutate original)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sorting Controls */}
      <div className="mb-4 flex gap-2 items-center">
        <span className="font-semibold">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Category
        </button>
      </div>

      {/* Items */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
