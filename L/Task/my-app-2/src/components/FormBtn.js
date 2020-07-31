import React, { Component } from 'react'
import "../assets/style/formbtn.css"
export default class FormBtn extends Component {
    render() {
        return (
            
                this.props.type==="ordinary"?
                <a href="#">{this.props.children}</a>:
                <button className={this.props.isFull}>{this.props.children}</button>
           
        )
    }
}
