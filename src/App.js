import HomePage from "./Components/HomePage/HomePage";
import AddTask from "./Components/Tasks/AddTask";
import DeletedTask from "./Components/Tasks/DeletedTask";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Base from "./Components/Shared/Base";
import BackIcon from "./Components/Shared/BackIcon";
import TaskList from "./Components/Tasks/TaskList";

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
                  <BackIcon />
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
