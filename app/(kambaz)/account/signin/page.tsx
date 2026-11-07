"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";
export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { setCurrentUser } = useAccountContext();
  const users = useUsersStore((state) => state.users);
  const router = useRouter();
  const signin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        placeholder="username"
        id="wd-username"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-2 w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-white"
      >
        Sign in
      </button>
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}