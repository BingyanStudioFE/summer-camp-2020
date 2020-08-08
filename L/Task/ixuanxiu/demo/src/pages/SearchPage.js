import React, { Component } from 'react'
import Header2 from '../components/Header2'
import '../assets/style/searchpage.css'
import { Link } from 'react-router-dom'
export default class SearchPage extends Component {

    render() {
        return (
            <div>
                <Header2/>
                <div className="searchbar">
                    <form>
                        <button type="submit"><img src={require('../assets/images/fangda.png') }alt=""></img></button>
                        <input type="text" placeholder="快速搜索课程名称或教师名"></input>
                    </form>
                    {/*  eslint-disable-next-line */}
                    <a href="#" alt="">取消</a>
                    {/* eslint-disable-next-line */}
                </div>
                <div className="hotsearch">
                    <p>热门搜索</p>
                    <ul>
                        <li><Link to="/CoursePage">建筑史盖伦论建筑史概论</Link></li>
                        <li><Link to="/CoursePage">建筑史</Link></li>
                        <li><Link to="/CoursePage">建筑史</Link></li>
                        <li><Link to="/CoursePage">建筑史</Link></li>
                        <li><Link to="/CoursePage">建筑史</Link></li>
                        <li><Link to="/CoursePage">建筑史</Link></li>
                        <li><Link to="/CoursePage">建筑史</Link></li>
                    </ul>
                </div>
                <div className="searchhistory">
                    <p>搜索历史</p>
                    <ul>
                        <li>
                            <span>建筑史盖伦论建筑史概论</span>
                            <button><img src={require('../assets/images/cha.png') }alt=""></img></button>
                        </li>
                        <li>
                            <span>建筑史盖伦论建筑史概论</span>
                            <button><img src={require('../assets/images/cha.png') }alt=""></img></button>
                        </li>
                        <li>
                            <span>建筑史盖伦论建筑史概论</span>
                            <button><img src={require('../assets/images/cha.png') }alt=""></img></button>
                        </li>
                        <li>
                            <span>建筑史盖伦论建筑史概论</span>
                            <button><img src={require('../assets/images/cha.png') }alt=""></img></button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
