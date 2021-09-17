import Q from '../Images/Q.png'
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({ isDarkMode, setDarkMode }) => {
    const [isMenuShowing, setMenu] = useState(false)
    const onClick = () => {
        return setMenu(!isMenuShowing)
    }

    const onToggle = () => {
        return setDarkMode(!isDarkMode)
    }
    
    return (
        <>
            <div id={isDarkMode ? 'navbardark' : 'navbar'}>
                <div id='navbarLeft'>
                    <img src={ Q } alt='letter Q' id='logoNavbar'/>
                    <div>Find Events</div>
                    <div>Meet Friends</div>
                </div>
                <div>
                    <input type='text' placeholder='Search' id='navbarSearch'/>
                </div>
                <div id='navbarRight' onClick={onClick}>
                    <div>Your Account</div>
                </div>
                <div id={isMenuShowing ? 'dropMenuShow' : 'dropMenu'}>
                    <div id='profile'>
                        <h1 id='userName'>Bobby Newsome</h1>
                        <h2 id='userEmail'>rnewso4@lsu.edu</h2>
                    </div>
                    <div id='dropdownInnerContents'>
                        <div className='dropdownItems'>
                            <Link to="#">My Profile</Link>
                        </div>
                        <div className='dropdownItems'>
                            <Link to="#">Account Settings</Link>
                        </div>
                        <div className='dropdownItems' id='darkMode' onClick={onToggle}>
                            Dark Mode
                        </div>
                        <div className='dropdownItems' id='lightMode' onClick={onToggle}>
                            Light Mode
                        </div>
                        <div id='bottomNavbar'>
                            <IoCloseOutline id='navClose' onClick={onClick} />
                            <Link to="/login" id='signout'>Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar