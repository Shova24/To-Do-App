import React, { useContext } from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";
import TaskContext from "../Context/TaskContext";

export default function TaskList({ formTitle, handleTask }) {
  const { task, editTask } = useContext(TaskContext);
  console.log(editTask.edit);

  if (task.length === 0) {
    return <CardComp> No task is assigned yet</CardComp>;
  } else {
    return (
      <>
        {task.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </>
    );
  }
}
