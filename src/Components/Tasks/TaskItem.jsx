import React, { useState, useContext } from "react";
import CardComp from "../Shared/CardComp";
import { useNavigate } from "react-router-dom";
import TaskContext from "../Context/TaskContext";

import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Typography, Popconfirm, Modal, Button, Form, Input, Radio, DatePicker, TimePicker, Row, Col } from "antd";
import moment from "moment";
import Notification from "../Shared/Notification";
import TaskForm from "../Shared/TaskForm";

const { TextArea } = Input;
const { Title, Text } = Typography;
const rating = [1, 2, 3, 4, 5];

export default function TaskItem({ task }) {
  const { deleteTask, updateTaskItem } = useContext(TaskContext);
  //Form Modal
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [itemId, setItemId] = useState(0);

  //PopUp state
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  //Modal  states
  const [visibleModal, setVisibleModal] = useState(false);
  const [confirmLoadingModal, setConfirmLoadingModal] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const updateTask = () => {};

  //EditModal
  const editTaskItem = (element) => {
    console.log(element);
    setItemId(element.id);
    setVisibleModal(true);
    form.setFieldsValue({
      tasktitle: element.task,
      priority: element.priority,
      deadlineDate: moment(element.deadline),
      deadlineTime: [moment(element.deadlineTime[0]), moment(element.deadlineTime[1])],
    });
  };
  const handleModalOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoadingModal(true);
    setTimeout(() => {
      setVisibleModal(false);
      setConfirmLoadingModal(false);
    }, 2000);
  };
  const handleCancelModal = () => {
    console.log("Clicked cancel button");
    setVisibleModal(false);
  };
  //Edit Form
  const onFinish = (values) => {
    console.log("Log Finish : ", values);
    const newTask = {
      id: itemId,
      task: values.tasktitle,
      priority: values.priority,
      deadlineDate: moment(values.deadlineDate).format("YYYY-MM-DD"),
      deadlineTime: [moment(values.deadlineTime[0]), moment(values.deadlineTime[1])],
    };
    updateTaskItem(itemId, newTask);
    console.log(newTask);
    setVisibleModal(false);
  };
  //Delete PopUp
  const handleOk = () => {
    setConfirmLoading(true);
    deleteTask(task.id);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
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
          <Text>Task DeadLine : {`${task.deadlineDate} from ${task?.deadlineTime[0].format("h:mm:ss")} to ${task?.deadlineTime[1].format("h:mm:ss")}`}</Text>
        </Space>
        <Modal title="Title" visible={visibleModal} onOk={handleModalOk} confirmLoading={confirmLoadingModal} onCancel={handleCancelModal} footer={null}>
          <CardComp>
            {/* <TaskForm /> */}
            <Title level={3}>Edit Task</Title>
            <Form form={form} layout="horizontal" onFinish={onFinish}>
              <Row gutter={[8, 8]}>
                <Col xs={24} md={12}>
                  <Form.Item name="tasktitle" label="Task">
                    <TextArea rows={3} showCount maxLength={100} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name="priority" label="Priority">
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
                  <Form.Item name="deadlineDate" label="Date">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name="deadlineTime" label="Time">
                    <TimePicker.RangePicker />
                  </Form.Item>
                </Col>
                <Row justify="end">
                  <Col>
                    <Button className="customBtn" shape="round" size="middle" htmlType="submit">
                      <Text>update</Text>
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </CardComp>
        </Modal>
      </CardComp>
    </>
  );
}
