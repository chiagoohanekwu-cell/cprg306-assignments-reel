"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // create a sorted copy (DO NOT mutate original)
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
      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort by:</label>

        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-2 py-1 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-2 py-1 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Category
        </button>
      </div>

      {/* Items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}