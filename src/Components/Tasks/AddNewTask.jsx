import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import CardComp from "../Shared/CardComp";

export default function AddNewTask({ handleAdd }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newTask = {
      id: uuidv4(),
      task: values.task,
    };
    handleAdd(newTask);
    console.log(newTask);
  };
  return (
    <>
      <CardComp>
        <Form onFinish={onFinish}>
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
              Add
            </Button>
          </div>
        </Form>
      </CardComp>
    </>
  );
}
