import React from "react";
import CardComp from "../Shared/CardComp";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import ProgressComp from "./ProgressComp";
import { Divider, Space, Typography } from "antd";

const { Text, Link } = Typography;

export default function TaskItem() {
  return (
    <>
      <CardComp
        title="User Profile"
        actions={[<EditOutlined key="edit" />, <CloseOutlined key="delete" />]}
      >
        <Divider orientation="left" plain>
          <Text>Task : Lorem ipsum</Text>
        </Divider>
        <Divider orientation="left" plain>
          <Text>Starts at : 9.20 PM , 8th August</Text>
        </Divider>
        <Divider orientation="left" plain>
          <Text>Ends at : 10.20 PM , 8th August</Text>
        </Divider>

        <ProgressComp />
      </CardComp>
    </>
  );
}
