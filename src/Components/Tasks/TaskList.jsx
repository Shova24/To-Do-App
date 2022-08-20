import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ task, handleDelete }) {
  return (
    <>
      {task.map((task) => (
        // console.log(task)
        <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </>
  );
}
