import React, { Component } from 'react'
import {  Link } from "react-router-dom"
import "../assets/style/courses_container.css"
import CoursesContent from './Courses_content'
export default class Cousrses extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    {/* <li><CoursesContent  title="逻辑与幽默" l="刘家俊" r="沟通与管理" comments={this.props.comments} />
                    </li> */}
                    {this.props.numbers.map((number)=>
                    <Link to="/CoursePage"><li key={number.toString()}>
                        <CoursesContent title={number} l="刘家俊" r="沟通与管理" comments={this.props.comments}/>
                    </li></Link>)}
                </ul>
            </div>
        )
    }
}

