import React from "react";
import {
  BarsOutlined,
  FilterOutlined,
  FundProjectionScreenOutlined,
  FlagOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

import { Button, Input, Row, Col, Dropdown, Space } from "antd";
import "./Header.css";
import Popup from "../popup/Popup";

const { Search } = Input;

function Header(props) {
  function onSearch(name) {
    props.handleFilterChange(name);
  }

  function onFormSearch(form) {
    props.handleFilterChangeForm(form.key);
  }

  const items = [
    {
      key: "16:9",
      label: (
        <Button type="text" icon={<FundProjectionScreenOutlined />}>
          16:9
        </Button>
      ),
    },
    {
      key: "4:3",
      label: (
        <Button type="text" icon={<FundProjectionScreenOutlined />}>
          4:3
        </Button>
      ),
    },
    {
      key: "All",
      label: (
        <Button type="text" icon={<FundProjectionScreenOutlined />}>
          All
        </Button>
      ),
    },
  ];

  const menuProps = {
    items,
    onClick: onFormSearch,
  };

  return (
    <div className="header">
      <Row justify="space-between" align="bottom" style={{ marginLeft: "2%" }}>
        <Col>
          <Space wrap style={{marginTop:"5%"}}>
            <Space direction="horizontal">
              <Space>
                <AntDesignOutlined
                  style={{ scale: "200%", color: "blue" }}
                />
                <h2 style={{color:"blue"}}>Device Manager</h2>
              </Space>
            </Space>
          </Space>
        </Col>

        <Col style={{ marginTop: "1%", marginRight: "5%" }}>
          <Space wrap>
            <Dropdown
              menu={menuProps}
              placement="bottom"
              style={{ background: "white" }}
            >
              <Button>
                <Space>
                  Forms
                  <FilterOutlined type="primary" />
                </Space>
              </Button>
            </Dropdown>
            <Search
              placeholder="Search Device"
              enterButton
              onSearch={onSearch}
              style={{ backgroundColor: "white" }}
            />
            <Button
              type="primary"
              icon={<FlagOutlined />}
              style={{ backgroundColor: "lightgray" }}
            />
            <Button
              type="primary"
              icon={<BarsOutlined />}
              style={{ background: "black" }}
            />
            <Popup
              updateCards={props.updateCards}
              style={{ background: "orange" }}
              handleId={props.handleId}
              id={props.id}
            />
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
