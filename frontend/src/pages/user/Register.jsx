import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../../services/user'



import '../../styles/user/Register.css';



function Register() {
  const [info, setInfo] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    confirmPassword: '',
  })

  const navigate = useNavigate()

  const onRegister = async () => {
    if (info.firstName.length === 0) {
      toast.warn('Please enter first name')
    } else if (info.lastName.length === 0) {
      toast.warn('Please enter last name')
    } else if (info.email.length === 0) {
      toast.warn('Please enter email')
    } else if (info.password.length === 0) {
      toast.warn('Please enter password')
    } else if (info.confirmPassword.length === 0) {
      toast.warn('Please enter password')
    } else if (info.confirmPassword !== info.password) {
      toast.warn('Password does not match')
    } else {
      const { firstName, lastName, email, password, phone } = info
      const result = await registerUser(
        firstName,
        lastName,
        email,
        password,
        phone
      )
      if (result['status'] === 'success') {
        toast.success('Successfully registered a user')
        navigate('/')
      }
    }
  }

  return (
    <div className="register-bg">
      <div className="register-card pop-in">
        <h1 className="page-header text-center">Register</h1>
        <div className='mb-3'>
          <label>First Name</label>
          <input
            onChange={e => setInfo({ ...info, firstName: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>Last Name</label>
          <input
            onChange={e => setInfo({ ...info, lastName: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>Email</label>
          <input
            onChange={e => setInfo({ ...info, email: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>Phone Number</label>
          <input
            onChange={e => setInfo({ ...info, phone: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            onChange={e => setInfo({ ...info, password: e.target.value })}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label>Confirm Password</label>
          <input
            onChange={e => setInfo({ ...info, confirmPassword: e.target.value })}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3 text-center'>
          <div className='mb-2'>
            Already have an account? Login <Link to='/'>here</Link>
          </div>
          <button
            onClick={onRegister}
            className='btn btn-success register-btn'
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
