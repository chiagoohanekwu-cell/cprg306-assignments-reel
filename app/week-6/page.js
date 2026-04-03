"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./ItemList";
import NewItem from "./NewItem";

export default function Week6Page() {
  // state
  const [items, setItems] = useState(itemsData);

  // add item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}