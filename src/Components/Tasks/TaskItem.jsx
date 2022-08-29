import React from "react";
import CardComp from "../Shared/CardComp";
import { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Typography, Popconfirm } from "antd";

const { Text } = Typography;

export default function TaskItem({ task }) {
  const { deleteTask, editTaskItem } = useContext(TaskContext);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    deleteTask(task.id);
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
        title="Task"
        actions={[
          <EditOutlined key="edit" onClick={() => editTaskItem(task)} />,
          <Popconfirm
            title="Want to delete the task?"
            onConfirm={handleOk}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}>
            <CloseOutlined key="delete" />
          </Popconfirm>,
        ]}>
        <Space direction="vertical">
          <Text>Task Title : {task.task}</Text>
          <Text>Tast Priority : {task.priority}</Text>
          <Text>Task DeadLine : {`${task.deadlineDate} from ${task?.deadlineTime[0]} to ${task?.deadlineTime[1]}`}</Text>
        </Space>
      </CardComp>
    </>
  );
}
