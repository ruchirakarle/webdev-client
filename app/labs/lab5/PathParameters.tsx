"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const input = "mb-2 block w-full max-w-xs rounded border border-neutral-300 px-3 py-1.5";
const button = "mb-2 me-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input className={input} type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input className={input} type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <a id="wd-path-parameter-add" className={button} href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract" className={button} href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply" className={button} href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-path-parameter-divide" className={button} href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}