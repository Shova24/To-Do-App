// 3rd party libraries
// internal libraries
// css/ less

import { Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import DeletedTask from "./Components/Tasks/DeletedTask";
import Base from "./Components/Shared/Base";
import TaskList from "./Components/Tasks/TaskList";
import BreadCrumbComp from "./Components/Shared/BreadCrumbComp";
import AddNewTask from "./Components/Tasks/AddNewTask";

import "./index.css";

function App() {
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
                  <DeletedTask />
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
