import React, { Component } from 'react'
import '../assets/style/header2.css'
import {creatHistory} from 'react-router-dom'
// // import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
// const history = creatHistory();//返回上一页这段代码

export default class Header2 extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         history:require("history").createHashHistory,
    //     };
        // goBackPage = () => {
        //     history.goBack();  //返回上一页这段代码
            
        //   }
   
    render() {

        return (
            <div className="header2">
             {/* <div className="goback" onClick={this.goBackPage}> */}
                <img src={require('../assets/images/zuo.png')} alt=""></img>
                    <span>爱选修</span>
             {/* </div> */}
            </div>
        )
    }
    //  goback = () => {
    //      this.state.history().goBack();
    //  }
}
