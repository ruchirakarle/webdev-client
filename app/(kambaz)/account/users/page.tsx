"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "../../courses/[cid]/people/Table";
import * as client from "../client";
import type { Person } from "../types";
export default function Users() {
  const [users, setUsers] = useState<Person[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const fetchUsers = async () => {
    setUsers(await client.findAllUsers());
  };
  useEffect(() => {
    let ignore = false;
    client.findAllUsers().then((data) => {
      if (!ignore) setUsers(data);
    });
    return () => {
      ignore = true;
    };
  }, []);
  const filterUsersByRole = async (newRole: string) => {
    setRole(newRole);
    if (newRole) {
      setUsers(await client.findUsersByRole(newRole));
    } else {
      fetchUsers();
    }
  };
  const filterUsersByName = async (newName: string) => {
    setName(newName);
    if (newName) {
      setUsers(await client.findUsersByPartialName(newName));
    } else {
      fetchUsers();
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
    <div id="wd-users">
      <button
        type="button"
        onClick={createUser}
        id="wd-add-people"
        className="float-end inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm text-white"
      >
        <FaPlus /> Users
      </button>
      <h3>Users</h3>
      <input
        className="wd-filter-by-name me-2 mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
        placeholder="Search people"
        value={name}
        onChange={(e) => filterUsersByName(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="wd-select-role mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}