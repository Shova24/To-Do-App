import { Button, Modal } from "antd";
import React, { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function ModalComponent() {
  const { setEditTask } = useContext(TaskContext);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    
    setVisible(true);
    
  };


  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setEditTask(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setEditTask(false);
  };

  return (
    <>

      <button onClick={showModal}>Close</button>
      <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <p>{modalText}</p>
      </Modal>
    </>
  );
}
