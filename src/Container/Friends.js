import Navbar from "./Navbar"
import Sidebar from './Sidebar'

const Friends = ({ sidebarStyle, isSelected, setsidebarStyle }) => {

    isSelected[0] = false;
    isSelected[1] = false;
    isSelected[2] = true;
    isSelected[3] = false;

    const onClick = () => {
        return setsidebarStyle(!sidebarStyle)
    }

    return (
        <div>
            <Navbar />
            <Sidebar 
            isSelected={isSelected}
            sidebarStyle={sidebarStyle}
            onClick={onClick}/>
            <h1 className='temp'>Friends</h1>
        </div>
    )
}

export default Friends
