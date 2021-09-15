import Q from '../Images/Q.png'
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <div id='navbar'>
                <div id='navbarLeft'>
                    <img src={ Q } alt='letter Q' />
                    <div>
                        <a href="#">Find Events</a>
                    </div>
                    <div>
                        <a href="#">Meet Friends</a>
                    </div>
                </div>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <div id='navbarRight'>
                    <a href="#about">Your Account</a>
                </div>
            </div>
        </>
    )
}

export default Navbar