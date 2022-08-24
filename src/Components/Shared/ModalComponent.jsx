import { Modal } from "antd";
import React, { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function ModalComponent() {
  const { visible, setVisible} = useContext(TaskContext);

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
      <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <p>{modalText}</p>
      </Modal>
    </>
  );
}
