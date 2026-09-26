export default function YourForm() {
  return (
    <>
      <h4>Student Profile</h4>
      <form id="wd-your-form">
        <label htmlFor="wd-your-first-name">First name:</label>
        <input id="wd-your-first-name" defaultValue="Ruchira" />
        <br />
        <label htmlFor="wd-your-last-name">Last name:</label>
        <input id="wd-your-last-name" defaultValue="Karle" />
        <br />
        <label htmlFor="wd-your-id">Student ID:</label>
        <input type="password" id="wd-your-id" defaultValue="00123456" />
        <br />
        <label htmlFor="wd-your-bio">Bio:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={30}
          rows={5}
          defaultValue="I'm taking this course to learn full stack web development."
        />
        <br />
        <label>Class standing:</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <input type="radio" name="your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <input
          type="radio"
          name="your-standing"
          id="wd-your-junior"
          defaultChecked
        />
        <label htmlFor="wd-your-junior">Junior</label>
        <input type="radio" name="your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <label>Enrollment:</label>
        <br />
        <input
          type="radio"
          name="your-enrollment"
          id="wd-your-fulltime"
          defaultChecked
        />
        <label htmlFor="wd-your-fulltime">Full-time</label>
        <input type="radio" name="your-enrollment" id="wd-your-parttime" />
        <label htmlFor="wd-your-parttime">Part-time</label>
        <br />
        <label>Interests:</label>
        <br />
        <input type="checkbox" id="wd-your-interest-web" defaultChecked />
        <label htmlFor="wd-your-interest-web"> Web Development</label>
        <br />
        <input type="checkbox" id="wd-your-interest-ai" />
        <label htmlFor="wd-your-interest-ai"> AI</label>
        <br />
        <input type="checkbox" id="wd-your-interest-data" />
        <label htmlFor="wd-your-interest-data"> Data Science</label>
        <br />
        <label htmlFor="wd-your-major">Major:</label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="IS">Information Systems</option>
          <option value="EE">Electrical Engineering</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
        <br />
        <select multiple id="wd-your-topics" defaultValue={["REACT", "NODE"]}>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="REACT">React</option>
          <option value="NODE">Node.js</option>
          <option value="MONGO">MongoDB</option>
        </select>
        <br />
        <label htmlFor="wd-your-email">School email:</label>
        <input
          type="email"
          id="wd-your-email"
          defaultValue="karle.r@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Graduation year:</label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2024}
          max={2030}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date:</label>
        <input type="date" id="wd-your-start-date" defaultValue="2024-09-01" />
        <br />
        <label htmlFor="wd-your-excitement">Excitement (0-10):</label>
        <input
          type="range"
          id="wd-your-excitement"
          min={0}
          max={10}
          defaultValue={8}
        />
        <br />
        <button id="wd-your-save" type="submit">
          Save
        </button>
        <button id="wd-your-cancel" type="button">
          Cancel
        </button>
      </form>
    </>
  );
}