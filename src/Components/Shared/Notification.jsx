import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import React from "react";

export default function Notification(title) {
  notification.open({
    message: title,
    icon: (
      <SmileOutlined
        style={{
          color: "hotpink",
        }}
      />
    ),
  });
}
