import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function DeletedTask() {
  const { deletedTask } = useContext(TaskContext);


  return (
    <>
      {deletedTask.length === 0 && <CardComp>No Task Has Been Deleted Yet.</CardComp>}

      {deletedTask.map((task) => (
        <TaskItem key={task.id} task={task}  />
      ))}
    </>
  );
}
