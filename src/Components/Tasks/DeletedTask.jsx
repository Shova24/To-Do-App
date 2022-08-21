import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";

export default function DeletedTask({ deletedTask, handleDelete }) {
  // console.log(deletedTask);
  // if (deletedTask.length === 0) {
  //   return (
  //     <>
  //       <CardComp>No Task Has Been Deleted Yet.</CardComp>
  //     </>
  //   );
  // } else {
  //   return <>{deletedTask.map((deletedTask) => deletedTask.map((deletedTask) => <TaskItem key={deletedTask.sid} task={deletedTask} handleDelete={handleDelete} />))}</>;
  // }

  console.log(deletedTask);

  return (
    <>
      {deletedTask.length === 0 && <CardComp>No Task Has Been Deleted Yet.</CardComp>}

      {deletedTask.map((task) => (
        <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </>
  );
}
