export default function ConditionalOutputInline() {
  const loggedIn = false;
  // On your own §3.2.6
  const guest = true;
  // With AI §3.2.6
  const admin = true;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
      {guest && <h2>Guest Inline</h2>}
      {admin && <h2>Admin Inline</h2>}
    </div>
  );
}
