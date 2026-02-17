import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex gap-6 h-[60%] overflow-x-auto py-10 px-6 scroll-smooth"
    >
      {/* Task Card */}
      <NewTask />

      {/* Duplicate cards below */}
      <CompleteTask />

      <AcceptTask />

      <FailedTask />

    </div>
  );
};

export default TaskList;
