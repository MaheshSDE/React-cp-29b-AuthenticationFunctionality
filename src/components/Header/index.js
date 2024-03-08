// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <ul className="unOrderList">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </>
)
export default Header
