import "./tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

import { MdSchool } from "react-icons/md";
import { BsLightningFill } from "react-icons/bs";

import { HiAcademicCap } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />

        <MdSchool className="text-4xl text-red-600" />
        <BsLightningFill className="text-4xl text-yellow-500" />
        {/* With AI §2.2 */}
        <HiAcademicCap className="text-4xl text-blue-600" />
        <IoRocketOutline className="text-4xl text-green-600" />
      </div>
    </div>
  );
}