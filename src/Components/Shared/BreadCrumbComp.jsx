import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export default function BreadCrumbComp() {
  return (
    <>
      <Breadcrumb style={{ marginTop: "8%", marginLeft: "13%", paddingBottom: "25px" }}>
        <Breadcrumb.Item>
          <Link to={"/"}>
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/add-task"}>Add Task</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/task-list"}>Task List</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/deleted-task"}>Deleted Task</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
