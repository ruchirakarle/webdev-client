import Link from "next/link";
import * as db from "../../../../database";

const label = "mb-1 block text-sm font-medium";
const input = "w-full rounded border border-neutral-300 px-3 py-2";
const row = "mb-4 grid grid-cols-1 gap-2 md:grid-cols-[150px_1fr] md:items-start";
const rowLabel = "text-sm font-medium md:pt-2 md:text-right";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className={label}>Assignment Name</label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className={`${input} mb-2`}
      />
      {/* With AI §3.10.8.1 */}
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>

      <label htmlFor="wd-description" className={label}>Description</label>
      <textarea
        id="wd-description"
        rows={6}
        className={`${input} mb-4`}
        defaultValue={assignment?.description ?? ""}
      />

      <div className={row}>
        <label htmlFor="wd-points" className={rowLabel}>Points</label>
        <input
          id="wd-points"
          type="number"
          defaultValue={assignment?.points ?? 100}
          className={input}
        />
      </div>

      <div className={row}>
        <label htmlFor="wd-group" className={rowLabel}>Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={rowLabel}>Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="Percentage" className={input}>
          <option value="Percentage">Percentage</option>
          <option value="Points">Points</option>
        </select>
      </div>

      <div className={row}>
        <label htmlFor="wd-submission-type" className={rowLabel}>Submission Type</label>
        <div className="rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="Online" className={`${input} mb-3`}>
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
          </select>
          <p className="mb-2 text-sm font-semibold">Online Entry Options</p>
          {[
            ["wd-text-entry", "Text Entry"],
            ["wd-website-url", "Website URL"],
            ["wd-media-recordings", "Media Recordings"],
            ["wd-student-annotation", "Student Annotation"],
            ["wd-file-upload", "File Uploads"],
          ].map(([id, text]) => (
            <label key={id} htmlFor={id} className="mb-1 flex items-center gap-2 text-sm">
              <input type="checkbox" id={id} /> {text}
            </label>
          ))}
        </div>
      </div>

      <div className={row}>
        <span className={rowLabel}>Assign</span>
        <div className="rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className={label}>Assign to</label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-3`} />

          <label htmlFor="wd-due-date" className={label}>Due</label>
          <input
            id="wd-due-date"
            type="date"
            defaultValue={assignment?.due}
            className={`${input} mb-3`}
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className={label}>Available from</label>
              <input
                id="wd-available-from"
                type="date"
                defaultValue={assignment?.available}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={label}>Until</label>
              <input id="wd-available-until" type="date" className={input} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}