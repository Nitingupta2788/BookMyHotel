import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
    const login = useContext(AuthContext)
    return (<div className="navbar">
        <div className='navContainer'>
            <Link className='logo' to='/'  >Book My Hotel</Link>

            {login ? login.user.username :
                <div>
                    <button className='navbutton'>Register</button>
                    <button className='navbutton'>Login</button>
                </div>}
        </div>

    </div >

    )
}

export default Navbar