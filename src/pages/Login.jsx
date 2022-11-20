import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <>
    <div className="w-full h-screen">
    <img className="absolute w-full h-full object-cover modern-full-bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/86f889bc-30d6-41be-b5aa-4286b00f4c05/DE-en-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix background"/>
    <img className="absolute w-full h-full object-cover retro-full-bg" src="https://res.cloudinary.com/dhrtgukmg/image/upload/v1663069648/txtflix/rgbi-background_wptvcq.png" alt="Netflix background"/>
    <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-10">
      <div className="max-w-[480px] h-[480px] mx-auto bg-black/75 text-white">
        <div className="max-w-[343px] mx-auto flex flex-col h-[480px] justify-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
          <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
            <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-500 focus:outline-0 focus:ring-0" type="email" placeholder="Email" autoComplete="email" rel="noreferrer noopener"/>
            <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-500 focus:outline-0 focus:ring-0" type="password" placeholder="Password" autoComplete="current-password" rel="noreferrer noopener"/>
            <button className="bg-red-600/95 hover:bg-red-600 px-5 py-3 my-6 cursor-pointer text-white/90 hover:text-white font-semibold" rel="noreferrer noopener">Log in</button>
          </form>
          <p className="pt-3">
              <span className='text-gray-500'>
                New to Textflex?
              </span>{' '}
              <Link to='/signup' className="font-semibold">Sign up</Link>
              </p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login
