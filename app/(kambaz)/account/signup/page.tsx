"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const addUser = useUsersStore((state) => state.addUser);
  const router = useRouter();
  const signup = () => {
    if (!username || !password) return;
    const newUser = {
      ...emptyUser,
      _id: crypto.randomUUID(),
      username,
      password,
      role: "STUDENT",
    };
    addUser(newUser);
    setCurrentUser(newUser);
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-white"
      >
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}