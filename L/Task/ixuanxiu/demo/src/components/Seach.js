import React, { Component } from 'react'
import "../assets/style/search.css"
export default class Seach extends Component {
    render() {
        return (
            <div className="Searcher">
                <div className="Search_left">
                <div className="xuanke"><h1>选课</h1></div>
                <div className="wo"><h1>我</h1></div>
                </div>
                <div className="imgs"><img src={require('../assets/images/fangdajing.png')} alt=""/></div>
            </div>
        )
    }
}
