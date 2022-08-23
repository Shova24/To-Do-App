import React, { useContext } from "react";
import CardComp from "../Shared/CardComp";

import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import TaskContext from "../Context/TaskContext";
import EditProfile from "./EditProfile";
const { Meta } = Card;

export default function ProfileCard() {
  const { title, description, profileEdit, edit ,imageProfile} = useContext(TaskContext);
  return (
    <>
      <CardComp title="User Profile" actions={[<></>, <EditOutlined key="edit" onClick={() => profileEdit()} />]}>
        <Meta avatar={<Avatar src={imageProfile} />} title={title} description={description} />
{
  edit && <EditProfile />
}
        
      </CardComp>
    </>
  );
}
