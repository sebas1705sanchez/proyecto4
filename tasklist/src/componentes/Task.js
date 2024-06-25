import React from "react";
import "../style-sheet/task.css"
import { FaTrashCan } from "react-icons/fa6";

function Task ( { text, completed}) {
  return (
    <div className={completed ? "task-cont completed-task"}>
      <div className="task-text">
        {text}
      </div>
      <div className="icon-task-cont">
        <FaTrashCan className="icon-task" color="dark-blue"/>
      </div>
    </div>
  )
}

export default Task;