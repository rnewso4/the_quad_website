import Q from '../Images/Q.png'
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = ({ isDarkMode, setDarkMode }) => {
    const [isMenuShowing, setMenu] = useState(true)
    const onClick = () => {
        return setMenu(!isMenuShowing)
    }

    const onToggle = () => {
        return setDarkMode(!isDarkMode)
    }
    
    return (
        <>
            <div id={isDarkMode ? 'navbardark' : 'navbar'}>
                <svg width="0" height="0">
                    <linearGradient id="sun-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#7a6ded" offset="0%" />
                        <stop stopColor="#591885" offset="100%" />
                    </linearGradient>
                    <linearGradient id="moon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#7a47b5" offset="0%" />
                        <stop stopColor="#f5e6ff" offset="100%" />
                    </linearGradient>
                </svg>
                <div id='navbarLeft'>
                    <img src={ Q } alt='letter Q' id='logoNavbar'/>
                    <div className='navLeftContainers'>Find Events</div>
                    <div className='navLeftContainers'>Meet Friends</div>
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
                            <IoMoonOutline style={{ stroke: "url(#moon-gradient)" }} className='SMIcon'/>
                        </div>
                        <div className='dropdownItems' id='lightMode' onClick={onToggle}>
                            <IoSunnyOutline style={{ stroke: "url(#sun-gradient)" }} className='SMIcon' />
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