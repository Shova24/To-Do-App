import HomePage from "./Components/HomePage/HomePage";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
