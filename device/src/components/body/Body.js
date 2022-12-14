import React from "react";
import { Card, Space, Empty } from "antd";
import {
  FundProjectionScreenOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "../../index.css";

function Body(props) {
  return (
    <div className="body">
      {props.cards.length === 0 && props.filteredCards.length === 0 ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        true
      )}

      <Space wrap>
        {props.cards &&
          !(props.filteredCards.length > 0) &&
          props.cards.map((card, index) => (
            <Card
              title={card.name}
              key={index}
              style={{
                width: 300,
                height: 200,
                background: "white",
                marginLeft: "7px",
                marginTop: "5px",
              }}
              actions={[
                <Space wrap>
                  <FundProjectionScreenOutlined />
                  {card.form}
                </Space>,
                <DeleteOutlined onClick={() => props.deletedCards(card.id)} />,
              ]}
            >
              <p>Coordinate: {card.coordinates}</p>
            </Card>
          ))}

        {props.filteredCards.length > 0 &&
          props.filteredCards.map((card, index) => (
            <Card
              title={card.name}
              key={index}
              style={{
                width: 300,
                height: 200,
                background: "white",
                marginLeft: "7px",
                marginTop: "5px",
              }}
              actions={[
                <Space wrap>
                  <FundProjectionScreenOutlined />
                  {card.form}
                </Space>,
                <DeleteOutlined onClick={() => props.deletedCards(card.id)} />,
              ]}
            >
              <p>Coordinate: {card.coordinates}</p>
            </Card>
          ))}
      </Space>
    </div>
  );
}
export default Body;
