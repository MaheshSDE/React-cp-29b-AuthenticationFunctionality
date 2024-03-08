// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logOutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="logOutButtonContainer">
      <button className="button" onClick={logOutButton} type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
