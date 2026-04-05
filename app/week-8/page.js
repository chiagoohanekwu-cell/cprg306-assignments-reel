
"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Week8Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Add item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Handle item click (CLEAN NAME PROPERLY)
  const handleItemSelect = (item) => {
    let cleanName = item.name;

    // remove everything after comma
    cleanName = cleanName.split(",")[0];

    // remove emojis (important)
    cleanName = cleanName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");

    // trim spaces
    cleanName = cleanName.trim();

    setSelectedItemName(cleanName);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      {/* Layout */}
      <div className="flex gap-6">
        {/* LEFT SIDE */}
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
