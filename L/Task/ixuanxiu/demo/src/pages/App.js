import React,{Component }from 'react'
import ReactDOM from 'react-dom'
// import HomePage from './HomePage'
// import MyPage from './MyPage'
import CoursePage from './CoursePage'
export default class App extends Component{
    render(){
        return(
        <div>
            {/* <MyPage/> */}
            {/* <HomePage /> */}
            <CoursePage/>
        </div>
        )
    }
}
ReactDOM.render(<App/> ,document.getElementById("root"))
