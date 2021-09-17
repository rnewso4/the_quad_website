import Navbar from "./Navbar"
import Sidebar from './Sidebar'

const Settings = ({ sidebarStyle, isSelected, setsidebarStyle, isDarkMode, setDarkMode }) => {

    isSelected[0] = false;
    isSelected[1] = false;
    isSelected[2] = false;
    isSelected[3] = true;

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
            <h1 className='temp'>Settings</h1>
        </div>
    )
}

export default Settings
