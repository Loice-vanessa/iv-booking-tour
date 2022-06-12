import React from "react";
import HomeLayout from "../component/HomeLayout";
import { Button, Checkbox, Form, Input, Space } from 'antd';
// import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { DownloadOutlined } from "@ant-design/icons";
import Card from "antd";
import "./contact.css";
import TextArea from "antd/lib/input/TextArea";
const Contact = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return(
        <div  style={{width:"100%",height:"auto",padding:"10rem 50rem 30rem 10rem"}} className="contact">
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        >
        <Input placeholder="firstName" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        >
        <Input placeholder="LastName" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          >
            <Input  placeholder="MiddleName"  />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          >
         <TextArea placeholder="your message" style={{padding:"5rem"}}>your message</TextArea> 
         <Button className="vanessa" type="primary" shape="round">Submit
                            </Button>
      </Form.Item>
    </Form>
   </div>
  );
};
export default Contact;
