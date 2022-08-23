import { SmileOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React from "react";

export default function Notification() {
  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      icon: (
        <SmileOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };

  return (
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  );
}
