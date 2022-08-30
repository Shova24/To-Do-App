import React from "react";
import CardComp from "../Shared/CardComp";
import { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

import { CloseOutlined, RedoOutlined } from "@ant-design/icons";
import { Typography, Space, Popconfirm } from "antd";

const { Text } = Typography;

export default function DeletedTaskItem({ deletedTaskItem }) {
  const { deleteParmanent, setTask, task, setDeletedTask, deletedTask } = useContext(TaskContext);
  // const { deleteTask, editTaskItem } = useContext(TaskContext);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    deleteParmanent(deletedTaskItem.id);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };
  const revertItem = () => {
    setTask([...task, deletedTaskItem]);
    const newItem = deletedTask.filter((el) => el.id !== deletedTaskItem.id);
    setDeletedTask(newItem);
    console.log("revert Item : ", newItem);
  };
  return (
    <>
      <CardComp
        title="Deleted Items"
        actions={[
          <RedoOutlined onClick={revertItem} />,
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
        <Space direction="vertical">
          <Text>Task Title : {deletedTaskItem.task}</Text>
          <Text>Task Priority : {deletedTaskItem.priority}</Text>
          <Text>Task DeadLine : {`${deletedTaskItem.deadlineDate} from ${deletedTaskItem?.deadlineTime[0].format("h:mm:ss")} to ${deletedTaskItem?.deadlineTime[1].format("h:mm:ss")}`}</Text>
        </Space>
      </CardComp>
    </>
  );
}
