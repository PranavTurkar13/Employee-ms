import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex gap-6 h-[60%] overflow-x-auto py-10 px-6 scroll-smooth"
    >
      {data.tasks.map((e,idx)=>{
        if(e.newtask){
          return <NewTask key={idx} data={e} />
        }
        if(e.completed){
          return <CompleteTask key={idx} data={e} />
        }
        if(e.active){
          return <AcceptTask key={idx} data={e} />
        }
        if(e.failed){
          return <FailedTask key={idx} data={e} />
        }
      })}

    </div>
  );
};

export default TaskList;
