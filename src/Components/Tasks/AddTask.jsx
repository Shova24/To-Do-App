import { Button, Divider, Form } from "antd";
import React from "react";
import CardComp from "../Shared/CardComp";
import DatePickerComp from "../Shared/DatePickerComp";
import InputField from "./InputField";

export default function AddTask() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <CardComp>
        <Divider orientation="left" plain>
          Add New Task
        </Divider>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Task"
            name="taskName"
            rules={[
              {
                required: true,
                message: "Please input the Task!",
              },
            ]}
          >
            {/* Auto Input */}
            {/* <Input /> */}
            <InputField />
          </Form.Item>

          <Form.Item label="Start and End task" name="duration">
            <DatePickerComp />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </CardComp>
    </>
  );
}
