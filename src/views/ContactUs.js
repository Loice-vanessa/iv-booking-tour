import React from "react";
import HomeLayout from "../component/HomeLayout";
import { Button, Checkbox, Form, Input, Space } from 'antd';
// import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { DownloadOutlined } from "@ant-design/icons";
import Card from "antd";
import "./Home.css";
import TextArea from "antd/lib/input/TextArea";
const Contact = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return(
        <div  style={{width:"100%",height:"auto",padding:"10rem 50rem 30rem 10rem",backgroundImage:" ../Assets/images/back.jifif"}}>
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
         <Button type="primary" shape="round" style={{marginLeft:"20rem",marginTop:"30px",fontSize:"10px",height:"100%",fontWeight:"80px"}}>Submit
                            </Button>
      </Form.Item>
    </Form>
   </div>
  );
};
export default Contact;
