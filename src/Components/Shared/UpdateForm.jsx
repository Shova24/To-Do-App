import React, { useState, useContext } from "react";
import { Typography, Form, Input, Button, Radio, DatePicker, TimePicker, Row, Col } from "antd";

import CardComp from "./CardComp";


const { TextArea } = Input;
const { Title, Text } = Typography;


export default function UpdateForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <CardComp>
      <Form
        initialValues={{
          remember: true,
        }}
        form={form}
        layout="horizontal"
        onFinish={onFinish}>
        <Form.Item name="tasktitle"
              label="Task">
        <TextArea rows={3} showCount maxLength={100} />
        </Form.Item>
      </Form>
    </CardComp>
  );
}
