// 3rd party libraries
// internal libraries
// css/ less

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import DeletedTask from "./Components/Tasks/DeletedTask";
import Base from "./Components/Shared/Base";
import TaskList from "./Components/Tasks/TaskList";
import TaskData from "./Data/TaskData";
import BreadCrumbComp from "./Components/Shared/BreadCrumbComp";
import AddNewTask from "./Components/Tasks/AddNewTask";

import "./index.css";

function App() {
  const [task, setTask] = useState(TaskData);
  // Adding Task
  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const [deletedTask, setDeletedTask] = useState([]);

  const deleteTask = (id) => {
    if (window.confirm("are you sure you want to delete?")) {
      setTask(task.filter((el) => el.id !== id));

      const deletedItem = task.find((el) => el.id === id);
      setDeletedTask([...deletedTask, deletedItem]);
    }
  };

  const deleteParmanent = (id) => {
    if (window.confirm("are you sure you want to delete Permanently?")) {
      console.log(
        id,
        deletedTask.filter((item) => console.log(item))
      );
      console.log(deletedTask);
      setDeletedTask(deletedTask.filter((item) => item.id !== id));
    }
  };

  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/add-task"
          element={
            <Base
              content={
                <>
                  <BreadCrumbComp />
                  <AddNewTask />
                </>
              }
            />
          }
        />
        <Route
          path="/task-list"
          element={
            <Base
              content={
                <>
                  <BreadCrumbComp />
                  <TaskList />
                </>
              }
            />
          }
        />
        <Route
          path="/deleted-task"
          element={
            <Base
              content={
                <>
                  <BreadCrumbComp />
                  <DeletedTask  />
                </>
              }
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
