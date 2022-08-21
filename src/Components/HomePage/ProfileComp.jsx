import React from "react";
import CardComp from "../Shared/CardComp";

import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export default function ProfileCard() {
  return (
    <>
      <CardComp title="User Profile" actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}>
        <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} title="Card title" description="This is the description" />
      </CardComp>
    </>
  );
}
