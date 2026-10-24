/* eslint-disable no-var, prefer-const */
export default function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  const todos = [
    "Buy milk",
    "Feed the pets",
    "Study for the quiz", // On your own §3.4.4
    "Email the TA",       // With AI §3.4.4
  ];
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares} <br />
      cubes = {cubes}     <br />
      {/* With AI §3.4.4 */}
      doubles = {numberArray1.map((a) => a * 2)} <br />
      Todos:
      <ol>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}