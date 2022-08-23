import React from "react";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";
import AddNewTask from "./AddNewTask";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function TaskList() {
  const { task, editTask } = useContext(TaskContext);

  if (task.length === 0) {
    return <CardComp> No task is assigned yet</CardComp>;
  } else {
    return (
      <>
        {editTask && <AddNewTask />}
        {task.map((task) => (
          // console.log(task)
          <TaskItem key={task.id} task={task} />
        ))}
      </>
    );
  }
}
