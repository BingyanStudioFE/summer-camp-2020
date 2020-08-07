import React, { Component } from 'react'
import '../assets/style/coursepage.css'
import Header2 from '../components/Header2'
import { Link } from 'react-router-dom'
// import ViewPage from '../pages/ViewPage'
export default class CoursePage extends Component {
    render() {
        return (
            <div>

                <Header2/>
                <div className="body">
                    <div className="areatop">
                    <h1>逻辑与幽默</h1>
                    <table className="tone">
                        <tr>
                            <th>类型</th>
                            <th>学分</th>
                            <th>针对对象</th>
                        </tr>
                        <tr>
                            <td>沟通与管理</td>
                            <td>2</td>
                            <td>全校本科生</td>
                        </tr>
                    </table>
                    <table className="ttwo">
                        <tr>
                            <th><span>开课地点</span><img src={require('../assets/images/address.png')} alt=""></img></th>
                            <td>东十二楼302</td>
                            <td>西十二楼302</td>
                        </tr>
                        <tr>
                        <th><span>开课时间</span><img src={require('../assets/images/time.png')} alt=""></img></th>
                            <td>7-15周</td>
                            <td>7-15周</td>
                        </tr>
                    </table>
                    <div className="comments">
                        <h2>课程评价</h2>
                        <ul className="tthree">

                                <li>27</li>
                                <li>7</li>
                                <li>3</li>

                        </ul>
                    </div>
                    </div>
                    <div className="areabottom">
                        <table className="tfour">
                            <tr>
                                <td><img src={require('../assets/images/smile.png')} alt=""></img></td>
                                <td><img src={require('../assets/images/plain.png')} alt=""></img></td>
                                <td><img src={require('../assets/images/sad.png')} alt=""></img></td>
                            </tr>
                        </table>
                        <ul>
                            <li>论文考试</li>
                            <li>不点名</li>
                            <li>无作业</li>
                        </ul>
                    </div>
                    
                    <div className="details">
                          <h1>评论</h1>
                          <ul className="mainul">
                              <li className="mainli">
                                  <img src={require('../assets/images/anonymous.png')} alt=""></img>
                                  <div className="perspective">
                                  <ul>
                                  <li className="username">匿名用户</li>
                                  <li className="time">2020年07月18日</li>
                                  <li className="bb">老师nice</li>
                                  </ul>
                                  </div>
                                  <ul className="subul">
                                      <li><img src={require('../assets/images/share.png')} alt=""></img></li>
                                      <li><img src={require('../assets/images/zan.png')} alt=""></img><span>1</span></li>
                                      <li><img src={require('../assets/images/pinglun.png')} alt=""></img><span>0</span></li>
                                  </ul>
                              </li>
                              <li className="mainli">
                                  <img src={require('../assets/images/anonymous.png')} alt=""></img>
                                  <div className="perspective">
                                  <ul>
                                  <li className="username">匿名用户</li>
                                  <li className="time">2020年07月18日</li>
                                  <li className="bb">老师nice</li>
                                  </ul>
                                  </div>
                                  <ul className="subul">
                                      <li><img src={require('../assets/images/share.png')} alt=""></img></li>
                                      <li><img src={require('../assets/images/zan.png')} alt=""></img><span>1</span></li>
                                      <li><img src={require('../assets/images/pinglun.png')} alt=""></img><span>0</span></li>
                                  </ul>
                              </li>
                              <li className="mainli">
                                  <img src={require('../assets/images/anonymous.png')} alt=""></img>
                                  <div className="perspective">
                                  <ul>
                                  <li className="username">匿名用户</li>
                                  <li className="time">2020年07月18日</li>
                                  <li className="bb">老师nice</li>
                                  </ul>
                                  </div>
                                  <ul className="subul">
                                      <li>
                                          <img src={require('../assets/images/share.png')} alt=""/><span>1</span>
                                      </li>
                                      <li>
                                          <img src={require('../assets/images/zan.png')} alt=""/><span>1</span>
                                      </li>
                                      <li>
                                          <img src={require('../assets/images/pinglun.png')} alt=""/><span>1</span>
                                      </li>
                                  </ul>
                              </li>
                          </ul>  
                    </div>
                </div>
                <div className="skip"><Link to="/ViewPage"><img src={require('../assets/images/comment-button.png')} alt=""></img></Link></div>                
            </div>
        )
    }
}
