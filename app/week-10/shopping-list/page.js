"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";

import { getItems, addItem } from "../_services/shopping-list-service";

import NewItem from "./NewItem";
import ItemList from "./ItemList";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  // 🔥 Load items when user is available
  useEffect(() => {
    if (!user) return;

    const loadItems = async () => {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
    };

    loadItems();
  }, [user]);

  // 🔥 Add item using Firestore service
  const handleAddItem = async (item) => {
    if (!user) return;

    const newId = await addItem(user.uid, item);

    setItems((prev) => [
      ...prev,
      { id: newId, ...item },
    ]);
  };

  return (
    <main>
      <h1>Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}
