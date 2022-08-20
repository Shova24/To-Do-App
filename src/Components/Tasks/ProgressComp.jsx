import { Steps } from "antd";
import React from "react";

const { Step } = Steps;

export default function ProgressComp() {
  return (
    <Steps direction="vertical" current={1} style={{ margin: "15px" }}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  );
}
