import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import AddTask from "./Components/Tasks/AddTask";
import DeletedTask from "./Components/Tasks/DeletedTask";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Base from "./Components/Shared/Base";
import BackIcon from "./Components/Shared/BackIcon";
import TaskList from "./Components/Tasks/TaskList";
import TaskData from "./Data/TaskData";

function App() {
  const [task, setTask] = useState(TaskData);
  const [deletedTask, setDeletedTask] = useState([]);
  let deletedItem;

  const deleteTask = (id) => {
    console.log(id, "-->delete");
    if (window.confirm("are you sure you want to delete?")) {
      deletedItem = task.filter((item) => item.id === id);

      setDeletedTask([deletedItem, ...deletedTask]);

      setTask(task.filter((item) => item.id !== id));
    }
  };

  const deleteParmanent = (id) => {
    if (window.confirm("are you sure you want to delete Permanently?")) {
      setDeletedTask(deletedTask.filter((item) => item.id === id));
    }
    console.log(id);
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
                  <BackIcon />
                  <AddTask />
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
                  <BackIcon />
                  <TaskList task={task} handleDelete={deleteTask} />
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
                  <BackIcon />
                  <DeletedTask
                    deletedTask={deletedTask}
                    handleDelete={deleteParmanent}
                  />
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
