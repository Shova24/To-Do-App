import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Typography, Form, Input, Button, Radio, DatePicker, TimePicker, Row, Col } from "antd";
import moment from "moment";
import Notification from "./Notification";

const { TextArea } = Input;
const { Title, Text } = Typography;

export default function TaskForm({ formTitle, handleTask, visible }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const rating = [1, 2, 3, 4, 5];

  const onFinish = (values) => {
    if (!visible) {
      const newTask = {
        id: uuidv4(),
        task: values.tasktitle,
        priority: values.priority,
        deadlineDate: moment(values.deadlineDate).format("YYYY-MM-DD"),
        deadlineTime: [moment(values.deadlineTime[0]), moment(values.deadlineTime[1])],
      };
      handleTask(newTask);
      Notification("Added Task");
    }

    form.resetFields();
    navigate("/task-list");
  };

  return (
    <>
      <Title level={3}>{formTitle}</Title>
      <Form form={form} layout="horizontal" onFinish={onFinish}>
        <Row gutter={[8, 8]}>
          <Col xs={24} md={12}>
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
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="priority"
              label="Priority"
              rules={[
                {
                  required: true,
                  message: "Please Add Priority",
                },
              ]}>
              <Radio.Group>
                {rating.map((item) => (
                  <Radio key={item} value={item}>
                    {item}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="deadlineDate"
              label="Date"
              rules={[
                {
                  required: true,
                  message: "Please Enter a Finishing Date",
                },
              ]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="deadlineTime"
              label="Time"
              rules={[
                {
                  required: true,
                  message: "Please Enter a Probable Ending Time",
                },
              ]}>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end">
          <Col>
            <Button className="customBtn" shape="round" size="middle" htmlType="submit">
              <Text>Add</Text>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
