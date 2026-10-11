import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import Link from "next/link";

const idle = "block bg-black py-3 text-center text-sm text-white no-underline";

export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>

      <Link href="/account" id="wd-account-link" className={idle}>
        <FaRegCircleUser className="inline-block text-3xl text-white" />
        <br />
        Account
      </Link>

      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>

      <Link href="/dashboard" id="wd-course-link" className={idle}>
        <LiaBookSolid className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>


      <Link href="/calendar" id="wd-calendar-link" className={idle}>
        <FaCalendarAlt className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>

      <Link href="/inbox" id="wd-inbox-link" className={idle}>
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>

      <Link href="/labs" id="wd-labs-link" className={idle}>
        <LiaCogSolid className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>

      <Link href="/labs" id="wd-ai-nav-help" className={idle}>
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}