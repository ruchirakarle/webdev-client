"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";
export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = async () => {
    if (!user.username || !user.password) return;
    try {
      const current = await client.signup({ ...user, role: "STUDENT" } as typeof user);
      setCurrentUser(current);
      router.push("/account/profile");
    } catch {
      setError("Username already in use");
    }
  };
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      {error && <p className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <input id="wd-username" placeholder="username"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input id="wd-password" placeholder="password" type="password"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="button" onClick={signup} id="wd-signup-btn"
        className="mb-2 w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-white">
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">Sign in</Link>
    </div>
  );
}