import React, { useState } from "react";
import { Form, Input, Tooltip, Modal, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import RegistrationStyle from "../style/RegistrationStyle";
import formItemLayout from "../style/RegistrationLayout";
import axios from "axios";

export const RegistrationForm = ({ formVisibility, onOk, onCancel, form }) => {
  const onFinish = (values) => {
    console.log("(onfinish)Received values of form, onfinish: ", values);
  };

  return (
    <Modal
      visible={formVisibility}
      title="Registration"
      okText="Registration"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="passwordConfirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Your password does not match!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="username"
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const RegistrationButton = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  return (
    <RegistrationStyle>
      <div className="login-button">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Registration
        </Button>
        <RegistrationForm
          formVisibility={visible}
          onCancel={() => {
            setVisible(false);
          }}
          onOk={() => {
            setVisible(false);
            // ez fut le, ha a modalban a registrationre klikkelsz
            console.log("Register button clicked");
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                console.log(values);
                axios.defaults.headers.post["Content-Type"] =
                  "application/json;charset=utf-8";
                axios.defaults.headers.post["Access-Control-Allow-Origin"] =
                  "*";
                axios.post("http://localhost:8080/user/registration", values);
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        />
      </div>
    </RegistrationStyle>
  );
};

export default RegistrationButton;
