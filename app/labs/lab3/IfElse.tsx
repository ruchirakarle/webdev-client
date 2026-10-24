/* eslint-disable no-var, prefer-const */
export default function IfElse() {
  let true1 = true,
    false1 = false;
  return (
    <div id="wd-if-else">
      <h4>If Else</h4>
      {true1 && <p>true1</p>}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
      {/* On your own §3.2.4: visible third paragraph */}
      {!false1 && <p>not false1</p>}
      {/* With AI §3.2.4: stays hidden because false1 is false */}
      {false1 && <p>false1</p>}
      <hr />
    </div>
  );
}