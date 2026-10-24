/* eslint-disable no-var, prefer-const */
export default function TernaryOperator() {
  let loggedIn = true;
  // On your own §3.2.5
  const hour = 9;
  // With AI §3.2.5
  const premium = false;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      {premium ? <p>Premium</p> : <p>Free</p>}
      <hr />
    </div>
  );
}