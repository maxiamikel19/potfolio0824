import { Link } from 'react-router-dom'
import './Navbar.css'
import VLogo from '../../utilities/logo/VLogo'

function Navbar() {
  return (
    <div className='navbar'>
        <VLogo />
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/project'}>Projects</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
        <button>Contact me</button>
    </div>
  )
}

export default Navbar