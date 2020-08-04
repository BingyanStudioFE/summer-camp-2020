import React, { Component } from 'react'
import '../assets/style/classes.css'
export default class Classes extends Component {
    render() {
        return (
            <div className="classbar">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li className="dropdownone"><a href="#"><span>类别</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li>
                    {/* eslint-disable-next-line */}
                    <div className="dropdown-contentone">
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">沟通与管理(原人文社会)</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">沟通与管理(原人文社会)</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">科学与环境(原自然科学)</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">历史与文化(原人文社会)</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">文学与艺术(原艺术)</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">社会与经济(原人文社会)</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">思维与方式(原人文社会)</a></li>
                        </ul>
                    </div>
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
