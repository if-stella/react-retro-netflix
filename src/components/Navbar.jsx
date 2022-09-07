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
    <div className="flex items-center justify-between p-4 z-[90] absolute w-full">
      <Link to="/">
      <h1 className="text-red-600 font-semibold cursor-pointer text-3xl border-none">TEXTFLEX</h1>
      </Link>
      <div>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='primary pr-4 font-semibold border-none'>Your Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600/95 hover:bg-red-600 border-red-600 hover:border-white px-5 py-2.5 cursor-pointer primary font-semibold'>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='primary pr-4 font-semibold border-none'>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600/95 hover:bg-red-600 border-red-600 hover:border-white px-5 py-2.5 cursor-pointer primary font-semibold border-none'>Sign Up</button>
          </Link>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
