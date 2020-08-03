import React, { Component } from 'react'
import "../assets/style/courses_container.css"
import CoursesContent from './Courses_content'
export default class Cousrses extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li><CoursesContent  title="逻辑与幽默" l="刘家俊" r="沟通与管理" comments={comments} />
                    </li>
                </ul>
            </div>
        )
    }
}
const comments=["周一","东区","二学分"];
