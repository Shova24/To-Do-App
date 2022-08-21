import React from "react";
import CardComp from "../Shared/CardComp";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";

const { Text } = Typography;

export default function TaskItem({ task, handleDelete }) {
  return (
    <>
      <CardComp title="User Profile" actions={[<EditOutlined key="edit" />, <CloseOutlined key="delete" onClick={() => handleDelete(task.id)} />]}>
        <Text>{task.task}</Text>
      </CardComp>
    </>
  );
}
