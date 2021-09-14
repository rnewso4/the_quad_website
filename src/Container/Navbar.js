import Q from '../Images/Q.png'
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <ul id="navbar">
                <li> <img src={ Q } alt='letter Q' /></li>
                <li><a href="#about">Find Events</a></li>
                <li><a href="#about">Meet Friends</a></li>
                <input type='search' placeholder='Search' style={{float:"center"}}/>
                <button><BsSearch/></button>
                <li style={{float:"right"}}><a class="active" href="#about">Your Account</a></li>
            </ul>
        </>
    )
}

export default Navbar