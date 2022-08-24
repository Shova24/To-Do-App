import React, { useContext } from "react";
import CardComp from "../Shared/CardComp";

import TaskContext from "../Context/TaskContext";
import TaskForm from "../Shared/TaskForm";

export default function AddNewTask() {
  const { addTask } = useContext(TaskContext);

  return (
    <>
      <CardComp>
        <TaskForm formTitle={"Add new Task"} handleTask={addTask} />
      </CardComp>
    </>
  );
}
