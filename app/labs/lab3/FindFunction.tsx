export default function FindFunction() {
  /* eslint-disable no-var, prefer-const */
    let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");
  // With AI §3.4.5
  const two = numberArray1.find((a) => a === 2);
  // On your own §3.4.5: a value that is not in the array
  const nine = numberArray1.find((a) => a === 9);
  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four} <br />
      string3 = {string3} <br />
      two = {two} <br />
      nine = {nine} (hidden because it is undefined) <br />
      String(nine) = {String(nine)}
      <hr />
    </div>
  );
}