import React from "react";
import HeaderComponent from "../Shared/HeaderComponent";
import { Layout, Space } from "antd";
import { contentStyle } from "../../Style";

const { Header, Content } = Layout;

export default function Base({ header, content }) {
  return (
    <>
      <Layout>
        <Header>{header}</Header>

        <Content style={contentStyle}>
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex",
            }}>
            {content}
          </Space>
        </Content>
      </Layout>
    </>
  );
}

Base.defaultProps = {
  header: <HeaderComponent />,
};
