import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import LoginStyle from "../style/LoginStyle";
import Axios from "axios";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Login"
      okText="Login"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
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
  const [loginCredentials, setLoginCredentials] = useState({});

  const onCreate = (values) => {
    setLoginCredentials(values);
    setVisible(false);
  };

  useEffect(() => {
    Axios.post("http://localhost:8080/user/login", loginCredentials).then(
      (resp) => {
        if (resp.data !== "") {
          console.log("User found.", resp);
        } else {
          console.log("User not found.");
        }
      }
    );
    console.log(loginCredentials);
  }, [loginCredentials]);

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
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </LoginStyle>
  );
};

export default LoginButton;
