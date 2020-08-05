import React, { Component } from 'react'
import '../assets/style/header2.css'
export default class Header2 extends Component {
    render() {
        return (
            <div className="header2">
             <img src={require('../assets/images/zuo.png')} alt=""></img>
                    <span>爱选修</span>
            </div>
        )
    }
}
