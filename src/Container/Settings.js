import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { useState } from 'react'

const Settings = ({ sidebarStyle, isSelected, setsidebarStyle }) => {

    isSelected[0] = false;
    isSelected[1] = false;
    isSelected[2] = false;
    isSelected[3] = true;

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
            <h1 className='temp'>Settings</h1>
        </div>
    )
}

export default Settings
