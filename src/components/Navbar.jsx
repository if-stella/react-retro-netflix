import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
      <h1 className="text-red-600 font-semibold cursor-pointer text-3xl">TEXTFLEX</h1>
      </Link>
      <div>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white/80 hover:text-white pr-4 font-semibold'>Your Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600/95 hover:bg-red-600 px-5 py-2.5 rounded cursor-pointer text-white/90 hover:text-white font-semibold'>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white/80 hover:text-white pr-4 font-semibold'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600/95 hover:bg-red-600 px-5 py-2.5 rounded cursor-pointer text-white/90 hover:text-white font-semibold'>Sign Up</button>
          </Link>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
