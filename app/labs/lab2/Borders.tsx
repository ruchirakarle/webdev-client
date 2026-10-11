export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>
      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>
      {/* On your own §2.1.9 */}
      <p className="wd-border-thin wd-border-red wd-border-solid">
        My own: solid thin red border
      </p>
      {/* With AI §2.1.9 */}
      <p id="wd-ai-border" className="wd-border-fat wd-border-dashed wd-border-yellow">
        Sample: dashed fat yellow border
      </p>
    </div>
  );
}