import React,{Component }from 'react'
import ReactDOM from 'react-dom'
// import LoginPage from './LoginPage'
import HomePage from './HomePage'
export default class App extends Component{
    render(){
        return(
        <div>
            {/* <LoginPage /> */}
            <HomePage />
        </div>
        )
    }
}
ReactDOM.render(<App/> ,document.getElementById("root"))
