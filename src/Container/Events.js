import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineQuestion } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from 'react'

const Events = ({ sidebarStyle, isSelected, setsidebarStyle, isDarkMode, setDarkMode }) => {

    const [likes, setLikes] = useState(100)
    const [going, setGoing] = useState(90)
    const [comments, setComments] = useState(0)
    const [activateHeart, setActivateHeart] = useState(true)
    const [activateQuestion, setActivateQuestion] = useState(false)
    const detailedTextP = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
    
    var numOfLikes = likes + ' likes';
    var numOfGoing = going + ' going';
    var numOfComments = comments + ' comments';

    isSelected[0] = false;
    isSelected[1] = true;
    isSelected[2] = false;
    isSelected[3] = false;

    const onClick = () => {
        return setsidebarStyle(!sidebarStyle)
    }

    const onHeartClick = (e) => {
        e.preventDefault()

        if(!activateHeart) {
            setLikes(likes+1)
            setActivateHeart(true)
        }
        else {
            setLikes(likes-1)
            setActivateHeart(false)
        }
    }

    const onGoingClick = (e) => {
        e.preventDefault()

        if(!activateQuestion) {
            setGoing(going+1)
            setActivateQuestion(true)
        }
        else {
            setGoing(going-1)
            setActivateQuestion(false)
        }
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
            <div id={sidebarStyle ? 'eventMax' : 'eventMin'}>
                <div className='eventItems' id='item1'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText' id={activateHeart ? 'heartyes' : 'heartno'}>
                            <AiFillHeart className='eventIcons' id='heartActive' onClick={onHeartClick}/>
                            <AiOutlineHeart className='eventIcons' id='heartInactive' onClick={onHeartClick }/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText' id={activateQuestion ? 'goingyes' : 'goingno'}>
                            <AiOutlineCheck className='eventIcons' id='goingActive' onClick={onGoingClick}/>
                            <AiOutlineQuestion className='eventIcons' id='goingInactive' onClick={onGoingClick}/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
                <div className='eventItems'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText'>
                            <AiOutlineHeart className='eventIcons'/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText'>
                            <AiOutlineQuestion className='eventIcons'/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
                <div className='eventItems'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText'>
                            <AiOutlineHeart className='eventIcons'/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText'>
                            <AiOutlineQuestion className='eventIcons'/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
                <div className='eventItems'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText'>
                            <AiOutlineHeart className='eventIcons'/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText'>
                            <AiOutlineQuestion className='eventIcons'/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
                <div className='eventItems'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText'>
                            <AiOutlineHeart className='eventIcons'/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText'>
                            <AiOutlineQuestion className='eventIcons'/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
                <div className='eventItems'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText'>
                            <AiOutlineHeart className='eventIcons'/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText'>
                            <AiOutlineQuestion className='eventIcons'/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
                <div className='eventItems'>
                    <div id='timeAndName'>
                        <p>7:00 AM</p>
                        <div className='profile'>AMB</div>
                    </div>
                    <div id='title'>
                        <p>AgCenter Burger Bash Event!</p>
                    </div>
                    <div id='detailedText'>
                        <p>{detailedTextP}</p>
                    </div>
                    <div id='bottomTag'>
                        <div className='IconAndText'>
                            <AiOutlineHeart className='eventIcons'/>
                            <p>{numOfLikes}</p>
                        </div >
                        <div className='IconAndText'>
                            <AiOutlineQuestion className='eventIcons'/>
                            <p>{numOfGoing}</p>
                        </div>
                        <div className='IconAndText'>
                            <AiOutlineComment className='eventIcons'/>
                            <p>{numOfComments}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
