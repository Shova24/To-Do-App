import React, { useState, useContext } from "react";
import { Form, Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import CardComp from "../Shared/CardComp";
import TaskContext from "../Context/TaskContext";

export default function AddNewTask() 

{
  const {addTask} = useContext(TaskContext)
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newTask = {
      id: uuidv4(),
      task: values.task,
    };
    addTask(newTask);
    form.resetFields();
    console.log(newTask);
  };
  return (
    <>
      <CardComp>
        <Form onFinish={onFinish} form={form}>
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
