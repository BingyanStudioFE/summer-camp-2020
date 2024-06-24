import React,{Component }from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router ,Route } from "react-router-dom"
// import { BrowserRouter as Router ,Switch, Route, Link } from "react-router-dom"
import HomePage from './HomePage'
import MyPage from './MyPage'
import CoursePage from './CoursePage'
import ViewPage from './ViewPage'
import SearchPage from './SearchPage'
export default class App extends Component{
    render(){
        return(
        <div>
            <Router>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/MyPage" component={MyPage}></Route>
            <Route path="/CoursePage" component={CoursePage}></Route>
            <Route path="/ViewPage" component={ViewPage}></Route>
            <Route path="/SearchPage" component={SearchPage}></Route>
            </Router>
        </div>
        )
    }
}
ReactDOM.render(<App/> ,document.getElementById("root"))
