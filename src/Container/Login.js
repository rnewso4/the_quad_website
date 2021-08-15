import loginDesign from '../Images/undraw_Chilling_re_4iq9.svg'
import welcome from '../Images/WELCOME.png'
import quad from '../Images/Quad_Logo.png'

const Login = () => {
    return (
        <>
            <div className='leftContainer'>
                <img src={quad} alt='Quad logo' />
                <label>Email</label>
                <input 
                type='email' 
                placeholder='tigers@lsu.edu'
                />
                <label>Password</label>
                <input 
                type='password' 
                placeholder='Password'
                />
                <p className="specialP">Forgot your password?</p>
                <div className='vertical-center'>
                <button>LOGIN</button>
                </div>
                <div className='bottomTag'>
                    <p>Don't have an account? &nbsp;
                    <span className='specialP2'>Register </span> 
                    </p>
                </div>
            </div>
            <div className='rightContainer'>
                <img id='welcome' src={welcome} alt='Welcome' />
                <img id='couch' src={loginDesign} alt='People sitting on couch'/>
            </div>
        </>
    )
}

export default Login
