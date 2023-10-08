import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
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
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      setFormData({
        email: '',
        password: ''
      })
      if (data.success === false) {
        setError(data.message)
        setLoading(false)
        return
      }
      setLoading(false)
      setError(null)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
        <input type="email" id="email" placeholder='Email' value={formData.email} onChange={handleChange} className='border p-3 rounded-lg focus:outline-none' />
        <input type="password" id="password" placeholder='Password' value={formData.password} onChange={handleChange} className='border p-3 rounded-lg focus:outline-none' autoComplete='off' />
        <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-2 justify-end'>
        <p>Do not have an account?</p>
        <Link to={'/sign-up'}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  )
}

export default SignIn