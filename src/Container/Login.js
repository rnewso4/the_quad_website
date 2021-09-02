import loginDesign from '../Images/undraw_Chilling_re_4iq9.svg'
import welcome from '../Images/WELCOME.png'
import quad from '../Images/Quad_Logo.png'
import { VscAccount } from "react-icons/vsc";
import { BsFillLockFill } from "react-icons/bs";
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    return (
        <div id='mainContainer'>
            <div className='leftContainer'>
                <img src={quad} alt='Quad logo' />
                <form className='loginForm'>
                    <div className='iconLabels'>
                        <VscAccount className='icons'/>
                        <label>Email</label>
                    </div>
                    <input type='text' placeholder='tigers@lsu.edu'/>
                    <div className='iconLabels' id='label2'>
                        <BsFillLockFill className='icons'/>
                        <label>Password</label>
                    </div>
                    <input type='password' placeholder='Password'/>
                    <div>
                        <a href='#' id="FPassword">Forgot your password?</a>
                    </div>
                    <div className='vertical-center'>
                        <button onClick={() => history.push('/homepage')}>LOGIN</button>
                    </div>
                </form>
                <div className='bottomTag'>
                    <p>Don't have an account? </p>
                    <a href='#' id="Register">Register</a>
                </div>
            </div>
            <div className='rightContainer'>
                <img id='welcome' src={welcome} alt='Welcome' />
                <img id='couch' src={loginDesign} alt='People sitting on couch'/>
            </div>
        </div>
    )
}

export default Login