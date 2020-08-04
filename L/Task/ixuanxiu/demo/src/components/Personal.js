import React, { Component } from 'react'
import '../assets/style/personal.css'
export default class Personal extends Component {
    render() {
        return (
            <div>
                <div className="head">
                <img src={require('../assets/images/anonymous.png')} alt=""></img>
                <p>昵称</p>
                </div>
                <div className="body">
                    <ul>
                        <li>已评价课程</li>
                        <li>消息</li>
                    </ul>
                    <img src={require('../assets/images/no-message.png')} alt=""></img>
                </div>
                <div className="footer">
                    意见反馈
                </div>
            </div>
        )
    }
}
