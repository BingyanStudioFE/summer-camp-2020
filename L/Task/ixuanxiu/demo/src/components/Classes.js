import React, { Component } from 'react'
import '../assets/style/classes.css'
// import {Dropdown,Menu} from 'antd'
// import { DownOutlined } from '@ant-design/icons';
import DropDown from '../components/DropDown'
export default class Classes extends Component {

    // menu = (
    //     <Menu>
    //       <Menu.Item>
    //         <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
    //           1st menu item
    //         </a>
    //       </Menu.Item>
    //       <Menu.Item>
    //         <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
    //           2nd menu item
    //         </a>
    //       </Menu.Item>
    //       <Menu.Item>
    //         <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
    //           3rd menu item
    //         </a>
    //       </Menu.Item>
    //       <Menu.Item danger>a danger item</Menu.Item>
    //     </Menu>
    //   );

    render() {
        const numbers=["沟通与管理(原人文社会)","沟通与管理(原人文社会","历史与文化(原人文社会","文学与艺术(原艺术)"];
        return (
            <div className="classbar">
                <ul>
                    <li>
                    <DropDown name="类别" numbers={numbers}/>
                   
                    {/* <Dropdown overlay={this.menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span>类别</span> <DownOutlined />
                    </a>
                    </Dropdown> */}
                    </li>
                     {/* <li className="dropdownone"><a href="#"><span>类别</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li> */}
                    {/* <div className="dropdown-contentone">
                        <ul> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">沟通与管理(原人文社会)</a></li> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">沟通与管理(原人文社会)</a></li> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">科学与环境(原自然科学)</a></li> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">历史与文化(原人文社会)</a></li> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">文学与艺术(原艺术)</a></li> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">社会与经济(原人文社会)</a></li> */}
                            {/* eslint-disable-next-line */}
                            {/* <li><a href="#">思维与方式(原人文社会)</a></li>
                        </ul>
                    </div> */}
                     {/* eslint-disable-next-line */}
                    {/* <li><a href="#"><span>时间</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li> */}
                     {/* eslint-disable-next-line */}
                    {/* <li><a href="#"><span>地点</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li> */}
                     {/* eslint-disable-next-line */}
                    {/* <li><a href="#"><span>点名方式</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li> */}
                     {/* eslint-disable-next-line */}
                    {/* <li><a href="#"><span>考核方式</span><img src={require("../assets/images/jiantou.png")} alt="" /></a></li> */}
                     {/* eslint-disable-next-line */}
                     <li><DropDown name="时间"/></li>
                     <li><DropDown name="地点"/></li>
                     <li><DropDown name="点名方式"/></li>
                     <li><DropDown name="考核方式"/></li>
                </ul>
            </div>
        )
    }
}
