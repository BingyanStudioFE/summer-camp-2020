import React, { Component } from 'react'
import '../assets/style/classes.css'
export default class Classes extends Component {
    render() {
        return (
            <div className="classbar">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li><a href="#"><span>类别</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#"><span>时间</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li>
                     {/* eslint-disable-next-line */}
                    <li><a href="#"><span>地点</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li>
                     {/* eslint-disable-next-line */}
                    <li><a href="#"><span>点名方式</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li>
                     {/* eslint-disable-next-line */}
                    <li><a href="#"><span>考核方式</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li>
                     {/* eslint-disable-next-line */}
                </ul>
            </div>
        )
    }
}
