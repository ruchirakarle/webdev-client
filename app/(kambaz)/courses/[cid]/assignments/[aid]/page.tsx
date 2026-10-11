import Link from "next/link";

const label = "mb-1 block text-sm font-medium";
const input = "w-full rounded border border-neutral-300 px-3 py-2";
const row = "mb-4 grid grid-cols-1 gap-2 md:grid-cols-[150px_1fr] md:items-start";
const rowLabel = "text-sm font-medium md:pt-2 md:text-right";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">


      <label htmlFor="wd-name" className={label}>Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${input} mb-4`} />



      <label htmlFor="wd-description" className={label}>Description</label>
      <textarea
        id="wd-description"
        rows={6}
        className={`${input} mb-4`}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      />



      <div className={row}>
        <label htmlFor="wd-points" className={rowLabel}>Points</label>
        <input id="wd-points" type="number" defaultValue={100} className={input} />
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
          <input id="wd-due-date" type="datetime-local" defaultValue="2024-05-13T23:59" className={`${input} mb-3`} />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className={label}>Available from</label>
              <input id="wd-available-from" type="datetime-local" defaultValue="2024-05-06T00:00" className={input} />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={label}>Until</label>
              <input id="wd-available-until" type="datetime-local" defaultValue="2024-05-20T00:00" className={input} />
            </div>
          </div>
        </div>
      </div>


      <label htmlFor="wd-ai-editor-notes" className={label}>Sample notes</label>
      <textarea id="wd-ai-editor-notes" rows={3} className={`${input} mb-4`} />


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