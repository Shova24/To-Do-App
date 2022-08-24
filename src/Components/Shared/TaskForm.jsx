import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { Typography, Form, Input, Button, Radio, DatePicker, TimePicker } from "antd";
import moment from "moment";

import TaskContext from "../Context/TaskContext";
import Notification from "./Notification";

const { TextArea } = Input;
const { Title } = Typography;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default function TaskForm({ formTitle, handleTask }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const rating = [1, 2, 3, 4, 5];

  const onFinish = (values) => {
    const newTask = {
      id: uuidv4(),
      task: values.tasktitle,
      priority: values.priority,
      deadline: values.deadlineDate + ' ' + values.deadlineTime,
    };
    console.log("====================================");
    console.log(values);
    console.log("====================================");
    handleTask(newTask);
    form.resetFields();
    Notification("Added Task");
    navigate("/task-list");
  };

  return (
    <>
      <Title level={3}>{formTitle}</Title>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}>
        <Form.Item
          name="tasktitle"
          label="Task"
          rules={[
            {
              required: true,
              message: "Please Enter a task",
            },
          ]}>
          <TextArea rows={3} showCount maxLength={100} />
        </Form.Item>
        <Form.Item name="priority" label="Priority">
          <Radio.Group>
            {rating.map((item) => (
              <Radio key={item} value={item}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Item name="deadlineDate" label="Deadline">
              <DatePicker defaultValue={moment("01/01/2015", dateFormatList[0])} format={dateFormatList} />
            </Form.Item>
            <Form.Item name="deadlineTime" label="Deadline">
              <TimePicker.RangePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="large" />
            </Form.Item>
          </div>
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "15px", marginBottom: "10px" }}>
          <Button shape="round" size="middle" htmlType="submit">
            Add
          </Button>
        </div>
      </Form>
    </>
  );
}
