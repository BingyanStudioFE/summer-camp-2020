import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'
import Img from '../components/img'
import "../assets/style/header.css"
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                    <NavBar
                leftContent={[
                    <Img key="0" src="logo.png" height="30"/>
                ]}
                // mode="light"
                // icon={<Icon type="left" />}
                // onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >NavBar</NavBar>
            </div>
        )
    }
}
