// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  return isLoggedIn ? (
    <h1 className="head">Welcome User</h1>
  ) : (
    <h1 className="head">Please Login</h1>
  )
}

export default Message
