import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Radio, Space, message, Form } from "antd";
import { PlusOutlined, UserOutlined, NumberOutlined } from "@ant-design/icons";
import "antd/dist/antd";
import FormItem from "antd/es/form/FormItem";

function Popup(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [form, setForm] = useState("16:9");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    props.handleId();
    props.updateCards({
      id: props.id,
      name: name,
      coordinates: coordinates,
      form: form,
    });
    message.success("Device Added!", 1);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFormChange = (e) => {
    setForm(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onCoordinateChange = (e) => {
    setCoordinates(e.target.value);
  };

  const [formmodal] = Form.useForm();
  const [, forceUpdate] = useState({});

  const onReset = () => {
    formmodal.resetFields();
  };
  useEffect(() => {
    forceUpdate({});
  }, [])

  return (
    <>
      
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ background: "lightgreen" }}
      >
        Add New
      </Button>

      <Modal
        title="Add New Device"
        mask={true}
        maskStyle={{ backgroundColor: "white" }}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Dont Add"
        bodyStyle={{
          backgroundColor: "white",
        }}
        footer={null}
      >
        <Form form={formmodal} layout="vertical">
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={onNameChange}
              placeholder="Please Add Device Name"
              required
              allowClear
            />
          </Form.Item>
          <FormItem
            label="Coordinates"
            name="coordinate"
            rules={[{ required: true,pattern: new RegExp("^[0-9-]*$"), message: "Please input your coordinate!" }]}
          >
            <Input
            
              prefix={<NumberOutlined />}
              onChange={onCoordinateChange}
              placeholder="Ex: xxxxxxxx-xxxxxxxx"
              required
              allowClear
            />
          </FormItem>
          <FormItem label="Format" required>
            <Radio.Group onChange={onFormChange}>
              <Space direction="vertical">
                <Radio value={"16:9"}>
                  16:9
                </Radio>
                <Radio value={"4:3"}>4:3</Radio>
              </Space>
            </Radio.Group>
          </FormItem>
          <Space wrap>
            <FormItem shouldUpdate>
              {() => (
                <Button
                  onClick={handleOk}
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !formmodal.isFieldsTouched(true) ||
                    !!formmodal
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  {" "}
                  Add
                </Button>
              )}
            </FormItem>
            <FormItem shouldUpdate>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </FormItem>
          </Space>
        </Form>
      </Modal>
    </>
  );
}
export default Popup;
