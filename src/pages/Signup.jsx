import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/86f889bc-30d6-41be-b5aa-4286b00f4c05/DE-en-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix background"/>
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[480px] h-[480px] mx-auto bg-black/75 text-white ">
            <div className="max-w-[343px] mx-auto flex flex-col h-[480px] justify-center">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-500 rounded focus:outline-0 focus:ring-0" type="email" placeholder="Email" autoComplete="email"/>
                <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-500 rounded focus:outline-0 focus:ring-0" type="password" placeholder="Password" autoComplete="current-password"/>
                {/*<input onChange={(e) => setName(e.target.value)} className="p-3 my-2 bg-gray-500 rounded focus:outline-0 focus:ring-0" type="name" placeholder="Your name" autoComplete="name"/>*/}
                <button className="bg-red-600/95 hover:bg-red-600 px-5 py-3 my-6 rounded cursor-pointer text-white/90 hover:text-white font-semibold">Sign up</button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p className='flex'><input className="mr-2 accent-red-800" type="checkbox"/>Remember me</p>
                  <p>Need help?</p>
                </div>
              </form>
              <p className="pt-8">
                <span className='text-gray-500'>
                  Already subscribed to Textflex?
                </span>{' '}
                <Link to='/login' className="font-semibold">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
