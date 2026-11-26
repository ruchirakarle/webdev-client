"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "../../(kambaz)/courses/[cid]/people/Table";
import * as client from "../../(kambaz)/account/client";
type UserRow = {
  _id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  role?: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
};
export default function Lab6Users() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const fetchUsers = async () => {
    const data = await client.findAllUsers();
    setUsers(data);
  };
  useEffect(() => {
    const load = async () => {
      const data = await client.findAllUsers();
      setUsers(data);
    };
    load();
  }, []);
  const filterByRole = async (newRole: string) => {
    setRole(newRole);
    if (newRole) {
      const data = await client.findUsersByRole(newRole);
      setUsers(data);
    } else {
      await fetchUsers();
    }
  };
  const filterByName = async (newName: string) => {
    setName(newName);
    if (newName) {
      const data = await client.findUsersByPartialName(newName);
      setUsers(data);
    } else {
      await fetchUsers();
    }
  };
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User ${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };
  return (
    <div id="wd-lab6-users">
      <h3>Users</h3>
      <button type="button" onClick={createUser} id="wd-lab6-add-user"
        className="mb-2 inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm text-white">
        <FaPlus /> Users
      </button>
      <br />
      <input className="me-2 mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
        placeholder="Search people" value={name}
        onChange={(e) => filterByName(e.target.value)} />
      <select className="mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
        value={role} onChange={(e) => filterByRole(e.target.value)}>
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
      <hr />
    </div>
  );
}