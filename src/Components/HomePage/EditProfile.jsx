import React, { useState, useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload } from "antd";
import CardComp from "../Shared/CardComp";
import TaskContext from "../Context/TaskContext";
const { TextArea } = Input;

export default function EditProfile() {
    const [form] = Form.useForm();
  const { setEdit , updateProfile} = useContext(TaskContext);

  const onFinish = (values) => {
    console.log("updated : ",values.title );
    setEdit(false);
    updateProfile(values.title, values.description, values.image)
    form.resetFields();

  };
  return (
    <>
      <CardComp>
        Edit Profile
        <Form onFinish={onFinish}  form={form}> 
          <Form.Item 
            name= 'title' 
            label="Title">
            <Input />
          </Form.Item>
          <Form.Item 
            name='description' 
            label="Description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Image" valuePropName="image">
            <Upload action="/http://localhost:3001/" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}>
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item label="Button"  style={{ display: "flex", justifyContent: "flex-end" }} >
            <Button type="primary" htmlType='submit'>Button</Button>
          </Form.Item>
        </Form>
      </CardComp>
    </>
  );
}
