import { Modal } from "antd";
import React, { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function ModalComponent() {
  const { visible, setVisible, editTask, setEditTask } = useContext(TaskContext);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const handleModal = () => {
    // console.log("Show Modal");
    setVisible(editTask);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setEditTask(false);
    }, 1000);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
    setEditTask(false);
  };
  return (
    <>
      <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <p>{modalText}</p>
        {editTask && handleModal()}
      </Modal>
    </>
  );
}
