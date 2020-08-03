import React, { Component } from 'react'
import "../assets/style/header.css"
import Search from "./Seach"
import Classes from "./Classes"
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="rectangle">
                    <div className="infos"><h1>爱选修</h1></div>
                    <div className="imgs">
                    <img src={require('../assets/images/gengduo.png')} alt="" />
                    </div>
                </div>
                <Search/>
                <Classes />
            </div>
        )
    }
}
