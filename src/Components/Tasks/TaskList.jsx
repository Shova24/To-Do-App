import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";
import TaskForm from "../Shared/TaskForm";

export default function TaskList() {
  const { task, updateTask, visible } = useContext(TaskContext);

  if (task.length === 0) {
    return <CardComp> No task is assigned yet</CardComp>;
  } else {
    return (
      <>
        {visible && <TaskForm formTitle={"Update new Task"} handleTask={updateTask} />}

        {task.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </>
    );
  }
}
