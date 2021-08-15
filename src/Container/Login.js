const Login = () => {
    return (
        <>
            <div className='leftContainer'>
                <h1 className='header1'>THE</h1>
                <h1 className='header2'>QUAD</h1>
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

            </div>
        </>
    )
}

export default Login
