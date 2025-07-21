import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../App'

import { loginUser } from '../../services/user'

import '../../styles/user/Login.css';


function Login() {
  // get the auth context
  const { setUser } = useContext(AuthContext)

  const [info, setInfo] = useState({
    email: '',
    password: '',
  })

  // get navigate function reference
  const navigate = useNavigate()
  

  const onLogin = async () => {
    if (info.email.length == 0) {
      toast.warn('Please enter email')
    } else if (info.password.length == 0) {
      toast.warn('Please enter password')
    } else {
      const { email, password } = info
      const result = await loginUser(email, password)
      if (result['status'] == 'success') {
        toast.success('Welcome to my Airbnb')

        // cache the token
        const { token, firstName, lastName } = result['data']
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('firstName', firstName)
        sessionStorage.setItem('lastName', lastName)

        // set the context
        setUser({ firstName, lastName, email })

        // redirect to home
        navigate('/home')
      }
    }
  }

  return (
    <div className="auth-bg">
      <div className="login-card pop-in">
      <h1 className='page-header' >Login</h1>
      <div className='container'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            type='password'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <div className='mb-3'>
            Don't have an account yet?
            <div>
            Register <Link to='/register'>here</Link>
            </div>
          </div>
          <button
            onClick={onLogin}
            className='btn btn-success'
          >
            Login
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
