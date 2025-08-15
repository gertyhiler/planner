"use client";

import { Checkbox } from "@planner/ui-kit/components/checkbox";
import Editor from "components/editor";

import {
  TaskStoreProvider,
  selectDescription,
  selectTitle,
  useTaskStore,
} from "entity/task/model/store";

// Task component is currently unused - uncomment when needed
// function Task() {
//   const title = useTaskStore(selectTitle);
//   const description = useTaskStore(selectDescription);
//   const status = useTaskStore((store) => store.status);
//   const { setTitle, setDescription, setStatus } = useTaskStore((store) => store.actions);
//   return (
//     <div className="border">
//       <div>
//         <div className="flex items-center gap-2">
//           <Checkbox
//             className="active:scale-110 transition-all"
//             checked={status === "complied"}
//             onCheckedChange={() => {
//               setStatus(status === "complied" ? "active" : "complied");
//             }}
//           />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Заголовок"
//             className="w-full border-0 bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-h5"
//           />
//         </div>
//       </div>

//       <div>
//         <Editor placeholder="Описание" data={description} onChange={setDescription} />
//       </div>
//     </div>
//   );
// }

function ClosedTask() {
  const title = useTaskStore(selectTitle);
  const status = useTaskStore((store) => store.status);
  const state = useTaskStore((store) => store.state);
  const { setState } = useTaskStore((store) => store.actions);
  return (
    <div
      onClick={() => setState("focused")}
      onDoubleClick={() => setState("open")}
      className={`${state === "focused" ? "after:bg-primary/50" : ""} after:absolute after:top-0 after:left-[-10px] after:right-[-10px] after:h-full after:w-full after:rounded-md relative cursor-pointer `}>
      <div className="flex items-center gap-2">
        <Checkbox checked={status === "complied"} />
        <span className="w-full border-0 bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-h5">
          {title}
        </span>
      </div>
    </div>
  );
}

function WithStore() {
  return (
    <TaskStoreProvider init={{}}>
      <ClosedTask />
    </TaskStoreProvider>
  );
}

export default WithStore;
