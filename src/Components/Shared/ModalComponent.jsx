import { Modal } from "antd";
import React, { useState, useContext, useEffect } from "react";
import TaskContext from "../Context/TaskContext";
import TaskForm from "../Shared/TaskForm";

export default function ModalComponent({ modalTitle }) {
  const { visible, setVisible } = useContext(TaskContext);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal title={modalTitle} visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} footer={null}>
        <TaskForm formTitle="Update Task " visible={visible} />
      </Modal>
    </>
  );
}
