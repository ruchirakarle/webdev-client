import {
  FaCheckCircle, FaFileImport, FaCloudDownloadAlt, FaHome,
  FaStream, FaBullhorn, FaChartBar, FaBell, FaStar,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

const fullBtn =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";


const actions = [
  { id: "wd-import-existing", label: "Import Existing Content", Icon: FaFileImport },
  { id: "wd-import-commons", label: "Import from Commons", Icon: FaCloudDownloadAlt },
  { id: "wd-choose-home", label: "Choose Home Page", Icon: FaHome },
  { id: "wd-course-stream", label: "View Course Stream", Icon: FaStream },
  { id: "wd-new-announcement", label: "New Announcement", Icon: FaBullhorn },
  { id: "wd-new-analytics", label: "New Analytics", Icon: FaChartBar },
  { id: "wd-course-notifications", label: "View Course Notifications", Icon: FaBell },
];

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs">
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700">
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {actions.map(({ id, label, Icon }) => (
        <button key={id} id={id} type="button" className={fullBtn}>
          <Icon className="me-2 shrink-0" /> {label}
        </button>
      ))}

      <button id="wd-ai-status" type="button" className={fullBtn}>
        <FaStar className="me-2 shrink-0" /> Sample action
      </button>
    </div>
  );
}