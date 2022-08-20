import HomePage from "./Components/HomePage/HomePage";
import AddTask from "./Components/Tasks/AddTask";
import DeletedTask from "./Components/Tasks/DeletedTask";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/deleted-task" element={<DeletedTask />} />
      </Routes>
    </>
  );
}

export default App;
