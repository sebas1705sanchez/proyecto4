import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../style-sheet/ListTasks.css";

function ListTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const actualizedTask = [task, ...tasks];
      setTasks(actualizedTask);
    }
  };
  const deleteTask = id => {
    const actualizedTask = tasks.filter(task => task.id !== id);
    setTasks(actualizedTask);
  }
  const completeTask = id => {
    const actualizedTask = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
  })
  setTasks(actualizedTask);
}

  return (
    <>
      <TaskForm onSumbit={addTask} />

      <div className="task-list-cont">
        {tasks.map((task) => (
          <Task
            text={task.text}
            completed={task.completed}
            key={task.id}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
}
export default ListTasks;
