import React from "react";
import { Card } from "antd";
import { cardStyle } from "../../Style";

export default function CardComp({ children, actions, title }) {
  return (
    <Card title={title} size="small" style={cardStyle} actions={actions}>
      {children}
    </Card>
  );
}
