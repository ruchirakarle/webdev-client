/* eslint-disable no-var, prefer-const */
export default function FindIndex() {
  let numberArray1 = [1, 2, 4, 5, 6];
  let stringArray1 = ["string1", "string3"];
  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index} <br />
      {/* With AI §3.4.6 */}
      sixIndex = {numberArray1.findIndex((a) => a === 6)} <br />
      {/* On your own §3.4.6: there is no 3, so -1 */}
      threeIndex = {numberArray1.findIndex((a) => a === 3)}
      <hr />
    </div>
  );
}