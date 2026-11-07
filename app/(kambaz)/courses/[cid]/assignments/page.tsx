"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";
export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const assignments = allAssignments.filter((a) => a.course === courseId);
  const { currentUser } = useAccountContext();
  const canEdit =
    !currentUser || currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {canEdit && (
          <div className="flex gap-2">
            <button
              id="wd-add-assignment-group"
              type="button"
              className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
            >
              <FaPlus /> Group
            </button>
            <Link
              href={`/courses/${courseId}/assignments/new`}
              id="wd-add-assignment"
              className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
            >
              <FaPlus /> Assignment
            </Link>
          </div>
        )}
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            canEdit={canEdit}
            onDelete={() => setPendingDelete(assignment._id)}
          />
        ))}
      </ul>
      {pendingDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          id="wd-delete-assignment-dialog"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
            <h3 className="mb-3 text-lg font-semibold">Delete assignment?</h3>
            <p className="mb-4">Are you sure you want to remove this assignment?</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                id="wd-delete-assignment-no"
                onClick={() => setPendingDelete(null)}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
              >
                No
              </button>
              <button
                type="button"
                id="wd-delete-assignment-yes"
                onClick={() => {
                  deleteAssignment(pendingDelete);
                  setPendingDelete(null);
                }}
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}