"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAssignmentsStore, type Assignment } from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const { currentUser } = useAccountContext();
  const canEdit =
    !currentUser || currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const isNew = assignmentId === "new";
  const existing = assignments.find((a) => a._id === assignmentId);
  const [draft, setDraft] = useState<Assignment>(
    () =>
      existing ?? {
        _id: "new",
        title: "New Assignment",
        course: courseId,
        description: "",
        points: 100,
        due: "",
        available: "",
        until: "",
      },
  );
  if (!isNew && !existing) return <p>Assignment not found.</p>;
  const save = () => {
    if (isNew) addAssignment({ ...draft, course: courseId });
    else updateAssignment({ ...draft, course: courseId });
    router.push(`/courses/${courseId}/assignments`);
  };
  const input = "rounded border border-neutral-300 px-2 py-1";
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        className={`${input} block w-full`}
        value={draft.title}
        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
      />
      <p id="wd-assignment-id">Assignment id: {assignmentId}</p>
      <textarea
        id="wd-description"
        rows={8}
        className={`${input} w-full`}
        value={draft.description}
        onChange={(e) => setDraft({ ...draft, description: e.target.value })}
      />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                className={input}
                value={draft.points}
                onChange={(e) => setDraft({ ...draft, points: Number(e.target.value) })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                className={input}
                value={draft.due}
                onChange={(e) => setDraft({ ...draft, due: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                className={input}
                value={draft.available}
                onChange={(e) => setDraft({ ...draft, available: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                className={input}
                value={draft.until ?? ""}
                onChange={(e) => setDraft({ ...draft, until: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link
        href={`/courses/${courseId}/assignments`}
        id="wd-cancel"
        className="me-2 rounded border border-neutral-300 px-3 py-1.5 no-underline"
      >
        Cancel
      </Link>
      {canEdit && (
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded bg-red-600 px-3 py-1.5 text-white"
        >
          Save
        </button>
      )}
    </div>
  );
}