import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function BreadCrumbComp() {
  return (
    <>
      <Breadcrumb style={{ marginLeft: "13%", paddingBottom: "25px" }}>
        <Breadcrumb.Item>
          <Link to={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/add-task"}>Add Task</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/deleted-task"}>Deleted Task</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
