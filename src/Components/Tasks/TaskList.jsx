import React, { useContext, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Row, Select } from "antd";
import CardComp from "../Shared/CardComp";
import TaskItem from "./TaskItem";
import TaskContext from "../Context/TaskContext";
import { rating } from "../../utils/Context";

export default function TaskList() {
  const { task } = useContext(TaskContext);
  const [filteredList, setFilteredList] = useState(task);
  const { Option } = Select;

  const handleChange = (value) => {
    if (value === "show") {
      setFilteredList(task);
      console.log(filteredList);
    } else {
      const filterItem = task.filter((item) => item.priority === +value);
      setFilteredList(filterItem);
    }
  };

  if (task.length === 0) {
    return <CardComp> No task is assigned yet</CardComp>;
  } else {
    return (
      <>
        <Row justify="end">
          <Col>
            <Select
              placeholder="Select Priority"
              style={{
                width: 200,
              }}
              onChange={handleChange}>
              <Option value="show">Show All</Option>
              {rating.map((el) => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span={24}>{filteredList.length === 0 ? <>Nothing with this priority</> : filteredList?.map((el) => <TaskItem key={el.id} task={el} />)}</Col>
        </Row>
      </>
    );
  }
}
