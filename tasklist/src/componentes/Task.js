import React from "react";
import "../style-sheet/task.css"

function Task ( { text }) {
  return (
    <div className="task-cont">
      <div className="task-text">
        {text}
      </div>
      <div className="icon-task">
        Delete
      </div>
    </div>
  )
}

export default Task;