import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";
import ModalComponent from "../Shared/ModalComponent";

export default function TaskList() {
  const { task } = useContext(TaskContext);

  if (task.length === 0) {
    return <CardComp> No task is assigned yet</CardComp>;
  } else {
    return (
      <>
        <ModalComponent />
        {task.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </>
    );
  }
}
