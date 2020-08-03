import React, { Component } from 'react'
import "../assets/style/home.css"
import Header from "../components/Header"
import Courses from '../components/Courses'
export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <Courses/>
            </div>
        )
    }
}
