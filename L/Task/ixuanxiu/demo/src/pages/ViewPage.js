import React, { Component } from 'react'
import Header2 from '../components/Header2'
import '../assets/style/view.css'
export default class ViewPage extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <h1>中国文化概况</h1>
                <ul className="ul1">
                    <li>
                        <span>点名</span>
                        <input type="button" value="签到" checked="chexked"></input>
                        <input type="button" value="点名"></input>
                        <input type="button" value="不点名不签到"></input>
                    </li>
                    <li>
                        <span>考核</span>
                        <input type="button" value="论文" checked="chexked"></input>
                        <input type="button" value="考试"></input>
                        <input type="button" value="其他"></input>
                    </li>
                    <li>
                        <span>作业</span>
                        <input type="button" value="无作业" checked="chexked"></input>
                        <input type="button" value="有作业"></input>
                    </li>
                    <li>
                        <span>质量</span>
                        <input type="button" value="很好" checked="chexked"></input>
                        <input type="button" value="一般"></input>
                        <input type="button" value="差"></input>
                        <input type="button" value="没听"></input>
                    </li>
                </ul>

                <div className="comment_details">
                
                <form>
                    <textarea cols="40" rows="4" placeholder="这里写评论内容... (不多于160字)">
                        
                    </textarea>
                    <div className="imageinput"><input type="image" src={require('../assets/images/jiahao.png')} alt=""></input></div>
                </form>
                </div>
                <div className="footer">
                    <input type="checkbox" name="niming" value="yes"></input><label>匿名</label>
                    <input type="checkbox" name="qimo" value="yes"></input><label>是否为期末情报</label>
                    <ul className="ul2">
                        <h3>总评</h3>
                        <li><img src={require('../assets/images/smile.png')} alt=""></img><p>很赞</p></li>
                        <li><img src={require('../assets/images/plain.png')} alt=""></img><p>一般</p></li>
                        <li><img src={require('../assets/images/sad.png')} alt=""></img><p>糟糕</p></li>
                    </ul>
                    <input className="submitbtn" type="submit"></input>
                    </div>
            </div>
        )
    }
}
