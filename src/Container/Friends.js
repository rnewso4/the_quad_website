import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { useState } from 'react'

const Friends = ({ isSidebarMax, isSelected }) => {

    isSelected[0] = false;
    isSelected[1] = false;
    isSelected[2] = true;
    isSelected[3] = false;

    const [sidebarStyle, setsidebarStyle] = useState(isSidebarMax)
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
