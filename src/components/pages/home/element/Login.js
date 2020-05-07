import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import LoginStyle from "../style/LoginStyle";
import axios from "axios";

const CollectionCreateForm = ({ formVisibility, onOk, onCancel, form }) => {
  return (
    <Modal
      visible={formVisibility}
      title="Login"
      okText="Login"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please give me your username.",
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
      </Form>
    </Modal>
  );
};

export const LoginButton = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.post("http://localhost:8080/user/login", values).then((resp) => {
      if (resp.data !== "") {
        alert("User found.", resp);
      } else {
        console.log("User not found.");
      }
    });
  };

  return (
    <LoginStyle>
      <div className="login-button">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Login
        </Button>
        <CollectionCreateForm
          form={form}
          formVisibility={visible}
          onCancel={() => {
            setVisible(false);
          }}
          onOk={() => {
            setVisible(false);
            console.log("Login button clicked");
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                console.log("Received values of form: ", values);
                handleLogin(values);
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        />
      </div>
    </LoginStyle>
  );
};

export default LoginButton;
