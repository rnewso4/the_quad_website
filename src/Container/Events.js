import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { useState } from 'react'

const Events = ({ isSidebarMax, isSelected }) => {

    isSelected[0] = false;
    isSelected[1] = true;
    isSelected[2] = false;
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
            <div id='eventContainer'>
                <div className='eventItems' id='item1'></div>
                <div className='eventItems'></div>
                <div className='eventItems'></div>
                <div className='eventItems'></div>
                <div className='eventItems'></div>
                <div className='eventItems'></div>
            </div>
        </div>
    )
}

export default Events
