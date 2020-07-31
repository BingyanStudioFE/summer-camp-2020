import React,{Component }from 'react'
import "../assets/style/loginPage.css"
import Img from "../components/img"
import Forminput from "../components/Forminput"
import FormBtn from "../components/FormBtn"
export default class LoginPage extends Component{
    render(){
        return(
        <div className="login-page">
            <Img src="logo.png"/>
            <form className="login-form">
                <Forminput type="text" iconClass="shouji" placeholder="用户名"/>
                <Forminput type="password" iconClass="mima" placeholder="密码"/>
                <FormBtn isFull="full">登陆</FormBtn>
                <FormBtn type="ordinary">忘记密码</FormBtn>
                <FormBtn isFull="nofull">免费注册</FormBtn>&emsp;
                <FormBtn isFull="nofull">游客登陆</FormBtn>
            </form>
        </div>
        )
    }
}
