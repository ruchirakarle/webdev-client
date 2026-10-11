export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-gray">Mine A</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Mine B (grows)
        </div>
        <div className="wd-bg-color-yellow wd-width-110px">Mine C (110px)</div>
      </div>
      <br />

      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">AI 1 (110px)</div>
        <div className="wd-bg-color-blue wd-fg-color-white">AI 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          AI 3 (grows)
        </div>
      </div>
    </div>
  );
}