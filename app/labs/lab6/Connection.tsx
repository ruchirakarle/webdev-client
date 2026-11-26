"use client";
import { useState } from "react";
import * as client from "./client";
export default function ConnectionStatus() {
  const [status, setStatus] = useState("Click to read the connection status.");
  const readStatus = async () => {
    try {
      const data = await client.fetchConnection();
      setStatus(`Database "${data.database}" is ${data.state} (readyState ${data.readyState})`);
    } catch {
      setStatus("Could not reach the server.");
    }
  };
  return (
    <div id="wd-lab6-connection">
      <h3>MongoDB connection</h3>
      <p>
        Students set <code>DATABASE_CONNECTION_STRING</code> on Express. This demo checks the
        server&apos;s database connection status.
      </p>
      <button type="button" onClick={readStatus} id="wd-read-connection"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Read connection status
      </button>
      <p id="wd-connection-status">{status}</p>
      <hr />
    </div>
  );
}