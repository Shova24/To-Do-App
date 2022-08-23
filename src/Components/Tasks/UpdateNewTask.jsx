import React, { useState, useContext } from "react";
import { Form, Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import CardComp from "../Shared/CardComp";
import TaskContext from "../Context/TaskContext";

export default function UpdateNewTask() {
  const { setEditTask, editTaskItem } = useContext(TaskContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    editTaskItem();
    form.resetFields();
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
            <Button type="primary" htmlType="submit"onClick = {setEditTask} >
              Add
            </Button>
          </div>
        </Form>
      </CardComp>
    </>
  );
}
