// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {BtnClicked: true, btnText: 'Logout', heading: 'Welcome User'}

  content=()=>{
          return (
              <>
                  <h1 className="logout-head">{heading}</h1>
                  <button type="button" className="logout-btn">{btnText}</button>
              </>
          )
  }

  render() {
      const {BtnClicked}=this.state

    return (
        {BtnClicked&&{this.content()}}
    )
  }
}

export default Logout
