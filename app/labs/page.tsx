import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>
        Ruchira Ravindra Karle
        <br />
        <a
          href="https://github.com/ruchirakarle/webdev-client"
          id="wd-github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
        <br />
        <a
          href="https://github.com/ruchirakarle/webdev-server"
          id="wd-github-server"
          target="_blank"
          rel="noreferrer"
        >
          Server GitHub Repository
        </a>
        <br />
        <a
          href="https://webdev-server.onrender.com"
          id="wd-render-server"
          target="_blank"
          rel="noreferrer"
        >
          Render Server
        </a>
      </p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-page-link">
            Lab 4: Managing Client State
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-page-link">
            Lab 5: RESTful Web APIs
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}