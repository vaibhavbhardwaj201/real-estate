import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setFormData(prev => (
      {
        ...prev,
        [e.target.id]: e.target.value
      }
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const data = await res.json()
    setFormData({
      username: '',
      email: '',
      password: ''
    })
    if (data.success === false) {
      setError(data.message)
      setLoading(false)
    }
    setLoading(false)
    navigate('/sign-in')
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
        <input type="text" id="username" placeholder='Username' value={formData.username} onChange={handleChange} className='border p-3 rounded-lg focus:outline-none' autoComplete='off' />
        <input type="email" id="email" placeholder='Email' value={formData.email} onChange={handleChange} className='border p-3 rounded-lg focus:outline-none' />
        <input type="password" id="password" placeholder='Password' value={formData.password} onChange={handleChange} className='border p-3 rounded-lg focus:outline-none' autoComplete='off' />
        <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-2 justify-end'>
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp