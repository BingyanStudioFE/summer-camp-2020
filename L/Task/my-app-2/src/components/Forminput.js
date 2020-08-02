import React,{Component }from 'react'
import "../assets/style/forminput.css"
import "../assets/fonts/iconfont.css"
export default class Forminput extends Component{
    render(){
        return(
        <div className="input-group">
            <i className={"iconfont icon-"+this.props.iconClass}></i>
            <input type={this.props.type} placeholder={this.props.placeholder}/>
        </div>
        )
    }
}
