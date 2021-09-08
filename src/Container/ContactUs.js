import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { useState } from 'react'

const ContactUs = ({ isSelected }) => {

    isSelected.forEach((item, index, arr) => {
        arr[index] = false;
    });
    const [sidebarStyle, setsidebarStyle] = useState(true)
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
            <h1 className='temp'>Hi! My name is Bobby</h1>
        </div>
    )
}

export default ContactUs
