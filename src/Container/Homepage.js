import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import map from '../Images/LSUMap.png'

/**
 * 
 * This page uses the Google Maps api to display events happening on campus and 
 * also allows users to pick their location to add a new event
 * @param {*} param0 
 * @returns 
 */

const Homepage = ({ sidebarStyle, isSelected, setsidebarStyle }) => {

    isSelected[0] = true;
    isSelected[1] = false;
    isSelected[2] = false;
    isSelected[3] = false;

    const onClick = () => {
        return setsidebarStyle(!sidebarStyle)
    }

    return (
        <div className="container">
            <Navbar />
            <Sidebar 
            isSelected={isSelected}
            sidebarStyle={sidebarStyle}
            onClick={onClick}/>
            <div className='homepage'>
                <img src={map} alt='Quad logo' id={sidebarStyle ? 'mapMax' : 'mapMin'}/>
            </div>
        </div>
    )
}

export default Homepage
