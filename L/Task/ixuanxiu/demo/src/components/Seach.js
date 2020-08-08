import React, { Component } from 'react'
import "../assets/style/search.css"
import { NavLink ,Link} from 'react-router-dom'
export default class Seach extends Component {
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this);
        this.changeColor2=this.changeColor2.bind(this);
        this.state={
            showgreen:false,
            showgreen2:false
        };
    }
    changeColor(){
        this.setState({showgreen:true});
    }
    changeColor2(){
        this.setState({showgreen2:true});
    }
    
    render() {
       const showgreen=this.state.showgreen;
       const showgreen2=this.state.showgreen2;
       let style,style2;
       if(showgreen2){
        
        style2={color:'rgb(186,186,186)'};//):({color:'rgb(186,186,186)'})
    }
    else{
              style2={color:'rgb(186,186,186)'};
    }
       if(showgreen){
        
           style={color:'rgb(186,186,186)'};//):({color:'rgb(186,186,186)'})
       }
       else{
                 style={color:'rgb(186,186,186)'};
           
       }
        return (
            <div className="Searcher">
                <div className="Search_left">
      
                    {/* <NavLink className="xuanke" to="/" activeStyle={{color:'rgb(0,204,168)' ; border-bottom:' 4px solid rgb(0,204,168)'}}onClick={this.changeColor2} style={style2}>选课</NavLink> */}
                    {/* <NavLink  className="wo" to="/MyPage" activeStyle={{color:'rgb(0,204,168)'}} onClick={this.changeColor} style={style}>我</NavLink> */}
                    <NavLink className="xuanke" 
                    to="/" exact 
                    activeStyle={{color:'rgb(0,204,168)',
                    borderBottom:'4px solid rgb(0,204,168)'
                    }}
                    style={{color:'rgb(186,186,186)'}}
                    >
                        选课
                    </NavLink>
                    <NavLink  className="wo" to="/MyPage" activeStyle={{color:'rgb(0,204,168)', borderBottom:'4px solid rgb(0,204,168)'}}>我</NavLink>
                </div>
                <Link to="/SearchPage">
                    <div className="imgs"><img src={require('../assets/images/fangdajing.png')} alt=""/></div>
                </Link>
            </div>
        )
    }
}

