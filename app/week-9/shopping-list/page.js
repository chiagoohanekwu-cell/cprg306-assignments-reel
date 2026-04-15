"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // redirect to login page
    }
  }, [user]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <p>You are logged in!</p>

      {/* your shopping list components go here */}
    </div>
  );
}
