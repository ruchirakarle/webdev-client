"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import Module from "./Module";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";
export default function Modules() {
  const { cid } = useParams();
  const courseId = String(cid);
  const allModules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId, setModules]);
  const modules = allModules.filter((module) => module.course === courseId);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}