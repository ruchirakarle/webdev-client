import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";
export default function ModuleEditor() {
  const { cid } = useParams();
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const addModule = useModulesStore((state) => state.addModule);
  const onAddModule = async () => {
    if (moduleName.trim() === "") return;
    const created = await client.createModuleForCourse(String(cid), {
      name: moduleName,
      description: "",
      lessons: [],
    });
    addModule(created);
    setModuleName("");
    setShow(false);
  };
  return (
    <>
      <button type="button" id="wd-add-module-btn" onClick={() => setShow(true)}
        className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">
        <FaPlus /> Module
      </button>
      {show && (
        <div id="wd-add-module-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-lg font-semibold">Add Module</h3>
              <button type="button" onClick={() => setShow(false)}
                className="text-2xl leading-none text-neutral-500" aria-label="Close">
                ×
              </button>
            </div>
            <div className="px-4 py-3">
              <input id="wd-add-module-name" placeholder="Module name"
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
                value={moduleName} onChange={(e) => setModuleName(e.target.value)} />
            </div>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button type="button" id="wd-add-module-cancel" onClick={() => setShow(false)}
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
                Cancel
              </button>
              <button type="button" id="wd-add-module-submit" onClick={onAddModule}
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">
                Add Module
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}