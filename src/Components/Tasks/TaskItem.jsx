import React from "react";
import CardComp from "../Shared/CardComp";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

export default function TaskItem({ task }) {
  const { deleteTask,editTaskItem } = useContext(TaskContext);
  return (
    <>
      <CardComp title="User Profile" actions={[<EditOutlined key="edit" onClick={editTaskItem} />, <CloseOutlined key="delete" onClick={() => deleteTask(task.id)} />]}>
        <Text>{task.task}</Text>
      </CardComp>
    </>
  );
}
