import React from "react";
import CardComp from "../Shared/CardComp";
import DeletedTaskItem from "./DeletedTaskItem";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function DeletedTask() {
  const { deletedTask } = useContext(TaskContext);

  return (
    <>
      {deletedTask.length === 0 && <CardComp>No Task Has Been Deleted Yet.</CardComp>}

      {deletedTask.map((task) => (
        <DeletedTaskItem key={task.id} deletedTask={task} />
      ))}
    </>
  );
}
