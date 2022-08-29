import React from "react";
import CardComp from "../Shared/CardComp";
import { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

import { CloseOutlined } from "@ant-design/icons";
import { Typography, message, Popconfirm } from "antd";

const { Text } = Typography;

export default function DeletedTaskItem({ deletedTask }) {
  const { deleteParmanent } = useContext(TaskContext);
  const { deleteTask, editTaskItem } = useContext(TaskContext);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    deleteParmanent(deletedTask.id);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <>
      <CardComp
        title="User Profile"
        actions={[
          <></>,
          <Popconfirm
            title="Want to Permanently delete the task?"
            onConfirm={handleOk}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}>
            <CloseOutlined key="delete" />
          </Popconfirm>,
          // <CloseOutlined key="delete" onClick={() => deleteParmanent(deletedTask.id)} />,
        ]}>
        <Text>{deletedTask.task}</Text>
      </CardComp>
    </>
  );
}
