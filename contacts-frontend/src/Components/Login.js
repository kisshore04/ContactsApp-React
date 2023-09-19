import React, { useState } from 'react'
import '../Styles/Loginpage.css'
import email_icon from '../Assets/RegisterAssets/email.png'
import password_icon from './../Assets/RegisterAssets/lock.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState("")
    const navigate = useNavigate();
    // const [nouser, setNouser] = useState(true)

    const userLogin = async (e) => {
        e.preventDefault();
        try {
            // console.log(email, password)
            setIsLoading(true)
            const userValue = await axios.post('http://localhost:5001/api/users/login', {
                email,
                password
            })
            // console.log(userValue.data.accessToken);
            const { accessToken } = userValue.data
            setToken(accessToken)
            if (token) {
                navigate("/CurrentPage")
                sessionStorage.setItem("authToken", token)
            }
            setIsLoading(false)
        } catch (error) {
            // setIsLoading(true)
            console.log("Log in failed")
            // setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <div className='container'>
            <div className='header'>
                <div className='headerText'>
                    Log in
                </div>
                <div className='underLine'></div>
            </div>
            <form onSubmit={userLogin}>
                <div className='inputsContainer'>
                    <div className='input'>
                        {/* <h4>Email </h4> */}
                        <img src={email_icon} alt='mail ' />
                        <input
                            type='email'
                            placeholder='Enter your email id'
                            id='email'
                            autoComplete='true'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        {/* <h4>Password</h4> */}
                        <img src={password_icon} alt='lock ' />
                        <input
                            type='password'
                            placeholder='Enter your password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='forgotPass'>Forgot password?
                        <span> Click here!</span>
                    </div>
                </div>
                <div className='registerContainer'>
                    {!isLoading ? <button className='registerButton' type='submit'>Log in</button> : <div className='registerButton'>loading.. </div>}
                    {/* {nouser ? <div className='registerIndicater'>Don't have an account? <span>Click here</span> to register!</div> : <div></div>} */}
                </div>
                <div className='registerContainer'>
                    {/* {nouser ? <div className='registerIndicater'>Don't have an account?<Link to={'/register'} style={{ textDecoration: 'none' }}> <span>Click here </span></Link>to register!</div> : <div></div>} */}
                    <div className='registerIndicater'> Don't have an account?<Link to={'/register'} style={{ textDecoration: 'none' }}> <span>Click here </span> </Link> to register!</div>
                </div>
            </form >
        </div >
    )
}

export default Login
