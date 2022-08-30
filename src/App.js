// 3rd party libraries
import { Routes, Route, Link } from "react-router-dom";

// internal libraries
import DeletedTask from "./Components/Tasks/DeletedTask";
import TaskList from "./Components/Tasks/TaskList";
import AddNewTask from "./Components/Tasks/AddNewTask";

// css/ less
import "./index.css";
import { Layout, Space, Menu, Typography } from "antd";
import { contentStyle } from "./Style";
import ProfileCard from "./Components/HomePage/ProfileComp";
import { HeaderStyle } from "./Style";
const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Header>
        <Title style={HeaderStyle}>
          To<span style={{ color: "hotpink", fontStyle: "oblique" }}>DO</span>!
        </Title>
      </Header>
      <Content style={contentStyle}>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}>
          <Menu mode="horizontal" style={{ display: "flex", justifyContent: "center" }}>
            <Menu.Item>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/add-task"}>Add Task</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/task-list"}>Task List</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/deleted-task"}>Deleted Task</Link>
            </Menu.Item>
          </Menu>
       
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
