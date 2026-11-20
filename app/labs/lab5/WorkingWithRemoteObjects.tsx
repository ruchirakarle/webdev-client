"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
const button = "mb-2 me-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [labModule, setLabModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    course: "RS101",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={button} href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className={button} href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title" className={button}
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input id="wd-assignment-title" className={input} value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <a id="wd-update-assignment-score" className={button}
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input id="wd-assignment-score" type="number" className={input} value={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })} />
      <a id="wd-update-assignment-completed" className={button}
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <label className="mb-2 flex items-center gap-2">
        <input id="wd-assignment-completed" type="checkbox" checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        Completed
      </label>
      <h4>Module (On Your Own)</h4>
      <a id="wd-retrieve-module" className={button} href={MODULE_API_URL}>
        Get Module
      </a>
      <a id="wd-retrieve-module-name" className={button} href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <br />
      <a id="wd-update-module-name" className={button}
        href={`${MODULE_API_URL}/name/${labModule.name}`}>
        Update Module Name
      </a>
      <input id="wd-module-name" className={input} value={labModule.name}
        onChange={(e) => setLabModule({ ...labModule, name: e.target.value })} />
      <a id="wd-update-module-description" className={button}
        href={`${MODULE_API_URL}/description/${labModule.description}`}>
        Update Module Description
      </a>
      <input id="wd-module-description" className={input} value={labModule.description}
        onChange={(e) => setLabModule({ ...labModule, description: e.target.value })} />
      <hr />
    </div>
  );
}