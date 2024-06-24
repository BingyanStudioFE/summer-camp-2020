import React, { Component } from 'react'
import Header from "../components/Header"
import Personal from '../components/Personal'
import '../assets/style/mypage.css'
export default class MyPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Personal/>
            </div>
        )
    }
}
