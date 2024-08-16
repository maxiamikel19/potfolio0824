import { Link } from 'react-router-dom'
import './Navbar.css'
import VLogo from '../../utilities/logo/VLogo'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef, useState } from 'react'

function Navbar() {

    const [menu,setMenu] = useState('/')
    const menuRef = useRef();

    const showMenu = () => {
        menuRef.current.style.right="0";
    }
    const hideMenu = () => {
        menuRef.current.style.right="-350px";
    }

  return (
    <div className='navbar'>
        <span className='logo-title'><VLogo /> <span>Maxi Homepage</span></span>
        <button type='button' onClick={showMenu}>
             <FaBars className='nav-mobil-open'/>
        </button>
        <ul ref={menuRef} className='nav-menu'>
            <button type='button' onClick={hideMenu} className='nav-mobil-close'>
                <FaTimes />
            </button> 
            <li>
                <Link to={'/'} onClick={() => {setMenu('/'); hideMenu();}}>Home</Link>
                {menu === '/' ? <p className='underlined-menu'></p>: <></>}
            </li>
            <li>
                <Link to={'/about'} onClick={() => {setMenu('/about'); hideMenu();}}>About</Link>{menu === '/about' ? <p className='underlined-menu'></p> : <></>}
            </li>
            <li>
                <p><Link to={'/project'} onClick={() => {setMenu('/project'); hideMenu();}}>Projects</Link></p>{menu === '/project' ? <p className='underlined-menu'></p> : <></>}
            </li>
            <li>
                 <p><Link to={'/contact'} onClick={() => {setMenu('/contact'); hideMenu();}}>Contact</Link></p>{menu === '/contact' ? <p className='underlined-menu'></p> : <></>}
            </li>
        </ul>
    </div>
  )
}

export default Navbar