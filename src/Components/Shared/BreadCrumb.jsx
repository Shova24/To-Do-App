import React from "react";
import { Breadcrumb } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default function BreadCrumbComp() {
  return (
    <>
      <BrowserRouter>
        <Breadcrumb style={{ marginLeft: "13%", paddingBottom: "25px" }}>
          <Breadcrumb.Item>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Link to="/">home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Task</Breadcrumb.Item>
          <Breadcrumb.Item>Deleted Task</Breadcrumb.Item>
        </Breadcrumb>
      </BrowserRouter>
    </>
  );
}
