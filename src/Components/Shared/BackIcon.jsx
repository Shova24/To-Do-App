import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default function BackIcon() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        color: "hotpink",
        padding: "10px",
        marginLeft: "10%",
        height: "2em",
      }}
    >
      <Link to={"/"}>
        <HomeOutlined />{" "}
      </Link>
    </div>
  );
}
