import React, { Component } from 'react'
import Header from "../components/Header"
import Personal from '../components/Personal'
export default class MyPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Personal/>
            </div>
        )
    }
}
