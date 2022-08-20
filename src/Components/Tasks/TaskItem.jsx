import React from "react";
import CardComp from "../Shared/CardComp";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import ProgressComp from "./ProgressComp";
import { Divider, Typography } from "antd";

const { Text } = Typography;
// const handleDelete = (task) => {
//   console.log(task);
// };

export default function TaskItem({ task, handleDelete }) {
  return (
    <>
      <CardComp
        title="User Profile"
        actions={[
          <EditOutlined key="edit" />,
          <CloseOutlined key="delete" onClick={() => handleDelete(task.id)} />,
        ]}
      >
        <Divider orientation="left" plain>
          <Text>{task.task}</Text>
        </Divider>
        <Divider orientation="left" plain>
          <Text>{task.starting}</Text>
        </Divider>
        <Divider orientation="left" plain>
          <Text>{task.ending}</Text>
        </Divider>

        <ProgressComp />
      </CardComp>
    </>
  );
}
