import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { validate_password } from '../../utils/validata'
// api
import { Login } from '../../api/account'
export default class LoginFrom extends Component {
  constructor () {
     super ()
     this.state = {}
  }

  // 提交登录
  onFinish = async(values) => {
     console.log(values, '登录头部==')
     const res = await Login()
     console.log(res, '返回==')
  }


  render() {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '用户名不能为空' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: '密码不能为空' }, 
                    { pattern: validate_password, message: '请输入大于6位小于20位数字+字母'}
                ]}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item
                name="code"
                rules={[
                    { required: true, message: '验证码不能为空' },
                    { len: 6, message: '请输入6位的验证码' }
                ]}>
                <div className='yanzhengma'>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Code"
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
