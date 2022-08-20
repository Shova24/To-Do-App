import React from "react";
import { Typography } from "antd";
import { HeaderStyle } from "../../Style.js";
const { Title } = Typography;

export default function Header() {
  return (
    <>
      <Title style={HeaderStyle}>
        To
        <span style={{ color: "hotpink", fontStyle: "oblique" }}>
          {" "}
          DO{" "}
        </span>!{" "}
      </Title>
    </>
  );
}
