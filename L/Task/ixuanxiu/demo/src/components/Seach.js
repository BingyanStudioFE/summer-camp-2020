import React, { Component } from 'react'
import "../assets/style/search.css"
import { NavLink ,Link} from 'react-router-dom'
export default class Seach extends Component {
    constructor(props){
        super(props);
        // this.changeColor.bind(this);
        this.state={
            showgreen:false,
        }
    }
    
    render() {
        var changeColor=()=>{
            this.setState({showgreen:true});

        }
        return (
            <div className="Searcher">
                <div className="Search_left">
      
                    <NavLink className="xuanke" to="/">选课</NavLink>
                    {/* <NavLink  className="wo" to="/MyPage" onClick={this.changeColor} style={{if(this.state.showgreen){color:"rgb(186,186,186)"}}}>我</NavLink> */}
                    <NavLink  className="wo" to="/MyPage" onClick={this.changeColor} style={{this.state.showgreen?(color:"red"):(color:"rgb(186,186,186)")}}>我</NavLink>
                </div>
                <Link to="/SearchPage">
                    <div className="imgs"><img src={require('../assets/images/fangdajing.png')} alt=""/></div>
                </Link>
            </div>
        )
    }
}

