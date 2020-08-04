import React, { Component } from 'react'
import "../assets/style/home.css"
import Header from "../components/Header"
import Courses from '../components/Courses'
import Classes from "../components/Classes"
export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <Classes />
                <Courses numbers={numbers} comments={comments}/>
            </div>
        )
    }

}
const numbers=["逻辑与幽默","逻辑与幽默","逻辑与幽默","逻辑与幽默"];
const comments=["周一","东区","二学分","考试","不点名"];