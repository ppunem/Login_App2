// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Componen {
  state = {isLoggedIn: false}

  onClickButton=()=>{
      this.setState(prevState=>{isLoggedIn:!prevState.isLoggedIn})
  }

  render() {
      const {isLoggedIn}=this.state
      return(
           <div className="main-cotainer">
            <div className="Container">
              <Message isLoggedIn={isLoggedIn}/>
              {isLoggedIn?<Logout logout={this.onClickButton}/>:<Login Login={this.onClickButton}/>}
            </div>
          <div/>
      )
    
  }
}

export default Home
