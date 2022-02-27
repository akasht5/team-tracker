import React,{ useState } from 'react'
import './LoginForm.css'

const Login = () => {
  const [data, setData] = useState({
    email:'',
    password: ''
  });

  const handleChange = (e) => {
      e.preventDefault();

      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setData({
      email: '',
      password: ''
    })
  }

  const { email, password } = data;

  return (
    <div className="login">
        <h1>Login</h1>
        <p>Sign in with your account.</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login