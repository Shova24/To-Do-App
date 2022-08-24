// 3rd party libraries
import { Routes, Route } from "react-router-dom";

// internal libraries
import DeletedTask from "./Components/Tasks/DeletedTask";
import TaskList from "./Components/Tasks/TaskList";
import BreadCrumbComp from "./Components/Shared/BreadCrumbComp";
import AddNewTask from "./Components/Tasks/AddNewTask";

// css/ less
import "./index.css";
import HeaderComponent from "./Components/Shared/HeaderComponent";
import { Layout, Space } from "antd";
import { contentStyle } from "./Style";
import ProfileCard from "./Components/HomePage/ProfileComp";

const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Header>
        <HeaderComponent />
      </Header>
      <Content style={contentStyle}>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}>
          <BreadCrumbComp />
          <Routes>
            <Route path="/" element={<ProfileCard />} />
            <Route path="/add-task" element={<AddNewTask />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/deleted-task" element={<DeletedTask />} />
          </Routes>
        </Space>
      </Content>
    </>
  );
}

export default App;
