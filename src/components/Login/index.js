// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {btnClicked: false, btnText: 'Login', heading: 'PLease Login'}

  content=()=>{
          return (
              <>
                  <h1 className="login-head">{heading}</h1>
                  <button type="button" className="login-btn">{btnText}</button>
              </>
          )
  }

  render() {
    const {btnClicked}=this.state
    
    return (
        {!btnClicked&&{this.content()}}
    )
  }
}

export default Login
