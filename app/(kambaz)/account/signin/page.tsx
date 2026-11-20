"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";
export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      setCurrentUser(user);
      router.push("/dashboard");
    } catch {
      setError("Invalid username or password");
    }
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      {error && <p className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <input placeholder="username" id="wd-username"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input placeholder="password" type="password" id="wd-password"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button type="button" onClick={signin} id="wd-signin-btn"
        className="mb-2 w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-white">
        Sign in
      </button>
      <br />
      <Link href="/account/signup" id="wd-signup-link">Sign up</Link>
    </div>
  );
}