export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* On your own §2.1.12 */}
        <div className="wd-dimension-wide wd-bg-color-green wd-fg-color-white">
          My wide box
        </div>
        {/* With AI §2.1.12 */}
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a long sample sentence so you can see the box keeps its
          declared 120 by 60 size even when the text does not fit inside it.
        </div>
      </div>
    </div>
  );
}