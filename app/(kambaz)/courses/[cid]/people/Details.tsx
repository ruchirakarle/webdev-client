"use client";
import { useEffect, useState } from "react";
import { FaUserCircle, FaPencilAlt, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../../account/client";
import type { Person } from "../../../account/types";
export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const [user, setUser] = useState<Person>({ _id: "" });
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    if (!uid) return;
    const fetchUser = async () => {
      const found: Person | null = await client.findUserById(uid);
      setUser(found ?? { _id: "" });
      setName(`${found?.firstName ?? ""} ${found?.lastName ?? ""}`.trim());
    };
    fetchUser();
  }, [uid]);
  if (!uid) return null;
  const saveUser = async () => {
    const [firstName, ...rest] = name.split(" ");
    const lastName = rest.join(" ");
    const updatedUser: Person = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };
  const deleteUser = async (id: string) => {
    await client.deleteUser(id);
    onClose();
  };
  return (
    <div className="wd-people-details fixed top-0 end-0 bottom-0 z-20 w-full max-w-sm overflow-y-auto bg-white p-4 shadow">
      <button type="button" onClick={onClose} className="wd-close-details absolute end-2 top-2">
        <IoCloseSharp className="text-3xl" />
      </button>
      <div className="mt-2 text-center">
        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
      </div>
      <hr className="my-2" />
      <div className="flex items-center gap-2 text-lg text-red-700">
        {!editing && (
          <FaPencilAlt onClick={() => setEditing(true)}
            className="wd-edit cursor-pointer text-base text-blue-600" />
        )}
        {editing && (
          <FaCheck onClick={saveUser}
            className="wd-save cursor-pointer text-base text-green-600" />
        )}
        {!editing && (
          <span className="wd-name cursor-pointer" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </span>
        )}
        {editing && (
          <input className="wd-edit-name w-full rounded border border-neutral-300 px-2 py-1 text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }} />
        )}
      </div>
      <b>Roles:</b> <span className="wd-roles">{user.role}</span>
      <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
      <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span>
      <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      <hr className="my-2" />
      <label className="block text-sm font-semibold" htmlFor="wd-details-email">Email</label>
      <input id="wd-details-email" type="email"
        className="mb-2 w-full rounded border border-neutral-300 px-2 py-1"
        value={user.email ?? ""}
        onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <label className="block text-sm font-semibold" htmlFor="wd-details-role">Role</label>
      <select id="wd-details-role"
        className="mb-3 w-full rounded border border-neutral-300 px-2 py-1"
        value={user.role ?? "STUDENT"}
        onChange={(e) => setUser({ ...user, role: e.target.value })}>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <button type="button" onClick={saveUser}
        className="wd-save-user mb-3 w-full rounded bg-blue-600 px-3 py-1 text-sm text-white">
        Save
      </button>
      <button type="button" onClick={() => deleteUser(uid)}
        className="wd-delete float-end rounded bg-red-600 px-3 py-1 text-sm text-white">
        Delete
      </button>
      <button type="button" onClick={onClose}
        className="wd-cancel float-end me-2 rounded bg-neutral-200 px-3 py-1 text-sm">
        Cancel
      </button>
    </div>
  );
}