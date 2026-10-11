export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      {/* With AI §2.1.8 */}
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        Sample block: yellow background with black text
      </p>
      {/* On your own §2.1.8 */}
      <p className="wd-bg-color-gray wd-fg-color-black">
        My own block: gray background with dark text so it stays readable
      </p>
    </div>
  );
}