// Write your code here
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

const Home = () => {
  const {btnClicked, BtnClicked} = props

  return (
    <>
      {!btnClicked && <Login />}
      {BtnClicked && <Logout />}
    </>
  )
}

export default Home
