import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={"+91"}>
        <Option value="91">+91</Option>
        {/* <Option value="87">+87</Option> */}
      </Select>
    </Form.Item>
  );

  return (
    // <div className="p-5 bg-white border border-1">
    <Form
      className="p-5 bg-white shadow-lg rounded-md "
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 800 }}
      scrollToFirstError
    >
      <Row gutter={3}>
        <Col>
          <Form.Item
            name="firstName"
            label="First Name"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="lastName"
            label="Last Name"
            hasFeedback
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="username"
        label="Username"
        hasFeedback
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        hasFeedback
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
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        hasFeedback
        rules={[
          {
            required: true,
            // message: "Please input your phone number!",
            max: 12,
            min: 10,
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        // {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item
      // {...tailFormItemLayout}
      >
        <Button className="bg-blue-500" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    // </div>
  );
};

export default Register;
