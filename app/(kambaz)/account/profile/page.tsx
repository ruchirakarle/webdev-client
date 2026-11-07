"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
const field = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const [profile, setProfile] = useState<User | null>(currentUser);
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
    }
  }, [currentUser, router]);
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!profile) return null;
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        className={field}
        placeholder="Username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        className={field}
        placeholder="Password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        className={field}
        placeholder="First name"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        className={field}
        placeholder="Last name"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        className={field}
        placeholder="Email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        className={field}
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        id="wd-update-profile-btn"
        onClick={() => setCurrentUser(profile)}
        className="mb-2 w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-white"
      >
        Update
      </button>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="w-full max-w-sm rounded bg-red-600 px-3 py-1.5 text-white"
      >
        Sign out
      </button>
    </div>
  );
}