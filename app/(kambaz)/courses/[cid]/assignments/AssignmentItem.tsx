import Link from "next/link";
import { FaTrash } from "react-icons/fa";
export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  canEdit,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  canEdit: boolean;
  onDelete: () => void;
}) {
  return (
    <li className="wd-assignment-list-item flex items-center justify-between border-b border-neutral-300 p-3">
      <div>
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="text-sm text-neutral-600">{details}</div>
      </div>
      {canEdit && (
        <button
          type="button"
          id={`wd-delete-assignment-${aid}`}
          onClick={onDelete}
          className="text-red-600"
          title="Delete assignment"
        >
          <FaTrash />
        </button>
      )}
    </li>
  );
}