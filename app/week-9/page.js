"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Week 9</h1>

      {!user ? (
        <>
          <p>Please log in to continue.</p>
          <button onClick={handleLogin}>Sign in with GitHub</button>
        </>
      ) : (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={handleLogout}>Logout</button>

          <br /><br />

          <Link href="/week-9/shopping-list">
            Go to Shopping List
          </Link>
        </>
      )}
    </main>
  );
}
