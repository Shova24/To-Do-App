import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";

export default function DeletedTask({ deletedTask }) {
  console.log(deletedTask);
  if (deletedTask.length === 0) {
    return (
      <>
        <CardComp>No Task Has Been Deleted Yet.</CardComp>
      </>
    );
  } else {
    return (
      <>
        {deletedTask.map((deletedTask) =>
          deletedTask.map((deletedTask) => (
            <TaskItem key={deletedTask.id} task={deletedTask} />
          ))
        )}
      </>
    );
  }
}
