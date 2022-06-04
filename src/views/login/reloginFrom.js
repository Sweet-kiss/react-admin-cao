import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default class ReloginFrom extends Component {
  constructor () {
    super ()
    this.state = {}
  }    
  render() {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item
                name="Repassword"
                rules={[{ required: true, message: 'Please reinput your Password!' }]}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Repassword"
                />
            </Form.Item>            
            <Form.Item
                name="password"
                rules={[{ required: true, message: '' }]}>
                <div className='yanzhengma'>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                    <span className='yanzhengBox'>获取验证码</span>
                </div>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
  }
}
