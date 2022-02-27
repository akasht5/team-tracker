import React, { useState } from 'react';
import './SignupForm.css';

const Signup = () => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { fullname, email, password, confirmPassword } = data;

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setData({
            fullname: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }
    
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <p>Create a new account</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" value={fullname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} />    
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"  value={confirmPassword} onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup