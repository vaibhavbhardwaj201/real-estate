import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' >
        <input type="text" id="username" placeholder='Username' className='border p-3 rounded-lg focus:outline-none' />
        <input type="text" id="email" placeholder='Email' className='border p-3 rounded-lg focus:outline-none' />
        <input type="text" id="password" placeholder='Password' className='border p-3 rounded-lg focus:outline-none' />
        <button type="button" className='bg-slate-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp