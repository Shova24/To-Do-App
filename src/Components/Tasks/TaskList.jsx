import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";

export default function TaskList({ task, handleDelete }) {
  if (task.length === 0) {
    return <CardComp> No task is assigned yet</CardComp>;
  } else {
    return (
      <>
        {task.map((task) => (
          // console.log(task)
          <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </>
    );
  }
}
