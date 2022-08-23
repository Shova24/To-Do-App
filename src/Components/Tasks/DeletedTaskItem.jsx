import React from "react";
import CardComp from "../Shared/CardComp";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

export default function DeletedTaskItem({ deletedTask }) {
  const { deleteParmanent } = useContext(TaskContext);
  return (
    <>
      <CardComp title="User Profile" actions={[
      <></>, <CloseOutlined key="delete" onClick={() => deleteParmanent(deletedTask.id)} />]}>
        <Text>{deletedTask.task}</Text>
      </CardComp>
    </>
  );
}
