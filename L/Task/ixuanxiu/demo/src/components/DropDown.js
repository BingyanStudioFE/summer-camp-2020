import React, { Component } from 'react'
import '../assets/style/dropdown.css'
import {Dropdown,Menu} from 'antd'
import { DownOutlined } from '@ant-design/icons';
export default class DropDown extends Component {
    menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              沟通与管理(原人文社会)
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            沟通与管理(原人文社会)
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            沟通与管理(原人文社会)
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );

    render() {
        return (
            <div>
                <Dropdown overlay={this.menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span>{this.props.name}</span> <DownOutlined />
                    </a>
                    </Dropdown>
            </div>
        )
    }
}
