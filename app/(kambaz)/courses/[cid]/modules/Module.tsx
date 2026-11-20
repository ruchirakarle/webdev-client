import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import ModuleControlButtons from "./ModuleControlButtons";
import Lesson from "./Lesson";
import * as client from "../../client";
export default function Module({ module: mod }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  const onUpdateModule = async () => {
    const saved = await client.updateModule({ ...mod, editing: false });
    updateModule(saved);
  };
  return (
    <li className="wd-module mb-5 border border-neutral-300">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 font-semibold">
        {mod.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
            defaultValue={mod.name}
            onChange={(e) => updateModule({ ...mod, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") onUpdateModule();
            }}
          />
        ) : (
          mod.name
        )}
        <ModuleControlButtons moduleId={mod._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {mod.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}