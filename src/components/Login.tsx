import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  return (
    <Form
      layout="vertical"
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="p-5 bg-white shadow-lg rounded-md min-w-[300px]"
      style={{ maxWidth: 800 }}
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        // wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
      //   wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit" className="bg-blue-500">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
