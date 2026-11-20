"use client";
import { useState } from "react";
const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
  power: "^",
};
const input = "mb-2 block w-full max-w-xs rounded border border-neutral-300 px-3 py-1.5";
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op: string = operation) => {
    setError("");
    setResult("");
    const response = await fetch(
      `/api/lab5/calculator?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&operation=${op}`,
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      return;
    }
    setResult(`${data.a} ${SYMBOLS[op]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <label>A:</label>
      <input className={input} placeholder="A" value={a} onChange={(e) => setA(e.target.value)} />
      <label>B:</label>
      <input className={input} placeholder="B" value={b} onChange={(e) => setB(e.target.value)} />
      <label>Operation:</label>
      <select className={input} value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
        <option value="power">Unknown (test error)</option>
      </select>
      <button type="button" onClick={() => calculate()}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Calculate
      </button>
      <input className={input} readOnly value={result} placeholder="Result" />
      {error && <p className="rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <hr />
    </div>
  );
}