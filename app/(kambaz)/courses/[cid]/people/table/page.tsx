"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { useUsersStore } from "../../../../store/usersStore";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { emptyUser, type User } from "../../../../account/AccountContext";
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const users = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [draft, setDraft] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) =>
    enrollments.some((e) => e.user === usr._id && e.course === courseId),
  );
  const addPerson = () => {
    if (!draft.firstName || !draft.lastName) return;
    const newUser = { ...draft, _id: crypto.randomUUID() };
    addUser(newUser);
    enroll(newUser._id, courseId);
    setDraft(emptyUser);
  };
  const input = "rounded border border-neutral-300 px-2 py-1 text-sm";
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          id="wd-people-first-name"
          className={input}
          placeholder="First name"
          value={draft.firstName}
          onChange={(e) => setDraft({ ...draft, firstName: e.target.value })}
        />
        <input
          id="wd-people-last-name"
          className={input}
          placeholder="Last name"
          value={draft.lastName}
          onChange={(e) => setDraft({ ...draft, lastName: e.target.value })}
        />
        <select
          id="wd-people-role"
          className={input}
          value={draft.role}
          onChange={(e) => setDraft({ ...draft, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          type="button"
          id="wd-people-add"
          onClick={addPerson}
          className="rounded bg-red-600 px-3 py-1 text-sm text-white"
        >
          + People
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2">
                <button
                  type="button"
                  onClick={() => unenroll(user._id, courseId)}
                  className="rounded bg-red-600 px-2 py-0.5 text-xs text-white"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}