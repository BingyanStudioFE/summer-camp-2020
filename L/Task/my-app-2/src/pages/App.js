import React,{Component }from 'react'
import ReactDOM from 'react-dom'
// import LoginPage from './LoginPage'
// import HomePage from './HomePage'
import Btn from '../components/Btn'
export default class App extends Component{
    render(){
        return(
        <div>
            {/* <LoginPage /> */}
            {/* <HomePage /> */}
            <Btn/>
        </div>
        )
    }
}
ReactDOM.render(<App/> ,document.getElementById("root"))