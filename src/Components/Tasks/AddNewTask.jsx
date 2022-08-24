import React, { useContext } from "react";
import { Form, Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import CardComp from "../Shared/CardComp";

import TaskContext from "../Context/TaskContext";
import Notification from "../Shared/Notification";
import { useNavigate } from "react-router-dom";
import TaskForm from "../Shared/TaskForm";

export default function AddNewTask() {
  const { addTask } = useContext(TaskContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // const onFinish = (values) => {
  //   const newTask = {
  //     id: uuidv4(),
  //     task: values.task,
  //   };
  //   addTask(newTask);
  //   form.resetFields();
  //   Notification("Added Task");
  //   navigate("/task-list");
  // };

  return (
    <>
      <CardComp>
        <TaskForm formTitle={"Add new Task"} handleTask={addTask} />
        {/* <Form onFinish={onFinish} form={form}>
          <Form.Item
            name="task"
            label="Add New Task"
            rules={[
              {
                required: true,
                message: "Please Enter a task",
              },
            ]}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" htmlType="submit">
              add
            </Button>
          </div>
        </Form> */}
      </CardComp>
    </>
  );
}
