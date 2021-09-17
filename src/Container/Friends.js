import Navbar from "./Navbar"
import Sidebar from './Sidebar'

const Friends = ({ sidebarStyle, isSelected, setsidebarStyle, isDarkMode, setDarkMode }) => {

    isSelected[0] = false;
    isSelected[1] = false;
    isSelected[2] = true;
    isSelected[3] = false;

    const onClick = () => {
        return setsidebarStyle(!sidebarStyle)
    }

    return (
        <div>
            <Navbar 
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}/>
            <Sidebar 
            isSelected={isSelected}
            sidebarStyle={sidebarStyle}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}
            onClick={onClick}/>
            <h1 className='temp'>Friends</h1>
        </div>
    )
}

export default Friends
