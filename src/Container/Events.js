import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { useState } from 'react'

const Events = ({ sidebarStyle, isSelected, setsidebarStyle }) => {

    isSelected[0] = false;
    isSelected[1] = true;
    isSelected[2] = false;
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
            <div id={sidebarStyle ? 'eventMax' : 'eventMin'}>
                <div className='eventItems' id='item1'></div>
                <div className='eventItems'></div>
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
