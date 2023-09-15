import React, { useState } from 'react'
import axios from 'axios'
import '../Styles/Registerpage.css'
import user_icon from '../Assets/RegisterAssets/user-interface.png'
import email_icon from '../Assets/RegisterAssets/email.png'
import password_icon from './../Assets/RegisterAssets/lock.png'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            if (username === " " || email === " " || password === " ") {
                alert("Please fill all the details!!")
                return;
            }
            setIsLoading(true);
            const response = await axios.post(`http://localhost:5001/api/users/register`, {
                username,
                email,
                password
            })
            // console.log(username, email, password)
            setIsLoading(false)
            console.log(response.data.username);
            let resdata = response.data;
            alert(`User:${resdata.data.username} registered successfully!`)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }
    return (
        <div className='container'>
            <div className='header'>
                <div className='headerText'>
                    Register
                </div>
                <div className='underLine'></div>
            </div>
            <form onSubmit={registerUser}>
                <div className='inputsContainer'>
                    <div className='input'>
                        {/* <h4>Name</h4> */}
                        {/* <label></label> */}
                        <img src={user_icon} alt='user ' />
                        <input
                            type='text'
                            placeholder='Enter your username'
                            id='username'
                            autoComplete='true'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                    {!isLoading ? <button className='registerButton' type='submit'>Register</button> : <div className='registerButton'>loading.. </div>}
                </div>
            </form>
        </div>
    )
}

export default Register