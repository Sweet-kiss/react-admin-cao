import React, { Component } from 'react'
import './index.css'

//组件
import LoginFrom from './LoginFrom'
import ReloginFrom from './reloginFrom'

export default class index extends Component {
    constructor () {
        super ()
        this.state = {
            type: 'login'
        }
    }
    // 去注册
    toRelogin = () => {
       this.setState({
          type: 'relogin'
       })
    }
    // 去登录
    tologin = () => {
        this.setState({
            type: 'login'
         })        
    }
      
    render() {
        const { type } = this.state
        return (
            <div className='boxWrap'>
                <div className='loginWrap'>
                    <div className='title'>
                        <span onClick={this.tologin}>登录</span>
                        <span onClick={this.toRelogin}>账号注册</span>
                    </div>
                    <div className='formBox'>
                        {
                            type==='login'? <LoginFrom />:<ReloginFrom />
                        }                      
                    </div>
                </div>
            </div>
        )
    }
}
