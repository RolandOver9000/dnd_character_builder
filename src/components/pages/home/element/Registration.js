import React, { useState, useEffect } from "react";
import { Form, Input, Tooltip, Modal, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import RegistrationStyle from "../style/RegistrationStyle";
import formItemLayout from "../style/RegistrationLayout";
import Axios from "axios";

export const RegistrationForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("(onfinish)Received values of form, onfinish: ", values);
  };

  return (
    <Modal
      visible={visible}
      title="Registration"
      okText="Registration"
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
              message: "Please input your password!",
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
              message: "Please confirm your password!",
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
  const [registrationCredentials, setRegistrationCredentials] = useState({});

  const onCreate = (values) => {
    setRegistrationCredentials(values);
    setVisible(false);
  };

  useEffect(() => {
    Axios.post("http://localhost:8080/user/add", registrationCredentials);
  }, [registrationCredentials]);

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
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </RegistrationStyle>
  );
};

export default RegistrationButton;
