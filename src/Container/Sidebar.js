import { VscMenu } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { GiHeartBottle } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ isSelected, sidebarStyle, isDarkMode, setDarkMode, onClick}) => {
    
    var isHomepage = isSelected[0];
    var isEvent = isSelected[1];
    var isFriends = isSelected[2];
    var isSettings = isSelected[3];

    return (
        <div className={sidebarStyle ? 'sidebarMax' : 'sidebarMin'} id={isDarkMode ? 'sidebarDark' : 'sidebarLight'}>
            <div className='sidebarTop'>
                <span onClick={() => onClick()}>
                    <VscMenu id='menu'/>
                    <IoCloseOutline id='close' />
                </span>
                <div className='profile'>BN</div>
            </div>
            <ul class="navList">
                <li>
                    <Link to='/homepage'>
                        <IoHomeOutline className={isHomepage ? 'SideIconsSelected' : 'SideIcons'}/>
                        <span className={isHomepage ? 'linksNameSelected' : 'linksName'}>Home</span>
                    </Link>
                    {/*<span className='toolTip'>Home</span>*/}
                </li>
                <li>
                    <Link to="/events">
                        <MdEventAvailable className={isEvent ? 'SideIconsSelected' : 'SideIcons'}/>
                        <span className={isEvent ? 'linksNameSelected' : 'linksName'}>Events</span>
                    </Link>
                    {/*<span className='toolTip'>Home</span>*/}
                </li>
                <li>
                    <Link to="/friends">
                        <GiHeartBottle className={isFriends ? 'SideIconsSelected' : 'SideIcons'}/>
                        <span className={isFriends ? 'linksNameSelected' : 'linksName'}>Friends</span>
                    </Link>
                    {/*<span className='toolTip'>Home</span>*/}
                </li>
            </ul>
            {/*Later, fix the sidebar to match the bottom tag of the login page so it doesn't look as bad on safari */}
            <div id='bottomTagSidebar'>
                <Link to='/settings'>
                    <div id='settingsContainer'>
                        <IoSettingsOutline id={isSettings ? 'settingsIconSelected' : 'settingsIcon'}/>
                    </div>
                </Link>
                <Link to="/contact" id='contactLink'>Contact Us</Link>
            </div>
        </div>
    )
}
export default Sidebar