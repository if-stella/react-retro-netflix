import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"
import {FaBars, FaTimes} from 'react-icons/fa';
import {ReactComponent as Close} from '../assets/txt-icon-cross.svg';

import {ReactComponent as Burger} from '../assets/txt-icon-burger.svg';
import {ReactComponent as LogoRetro} from '../assets/logo-retro.svg';
import {ReactComponent as LogoModern} from '../assets/logo-modern.svg';


const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [navbar,setNavbar] = useState(false)

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
    <div className={navbar ? 'navbar active w-full h-[62px] sm:h-[70px] flex justify-between items-center p-4 z-[50] absolute top-0' : 'navbar w-full h-[62px] sm:h-[70px] flex justify-between items-center p-4 z-[50] absolute top-0'}>
      <Link to="/">
        <LogoRetro className="cursor-pointer w-28 sm:w-32 retro-icon"/>
        <LogoModern className="cursor-pointer w-28 sm:w-32 new-icon"/>
      </Link>
      <div className="hidden md:flex">
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='primary pr-4 font-semibold border-none hover:border-none textlink'>Your Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600/95 hover:bg-red-600 px-5 py-2.5 cursor-pointer primary font-semibold filled-button'>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='primary pr-4 font-semibold border-none hover:border-none textlink'>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600/95 hover:bg-red-600 px-5 py-2.5 cursor-pointer primary font-semibold border-none filled-button'>Sign Up</button>
          </Link>
        </div>
      )}
      </div>
      <div onClick={handleClick} className='md:hidden text-white z-[55]'>
        {!nav ?
        <>
        <Burger className="retro-icon cursor-pointer absolute top-4 right-3 w-8 h-8"/>
        <FaBars className="new-icon cursor-pointer w-5 h-5"/>
        </>
         :
        <>
        <FaTimes className="cursor-pointer new-icon w-5 h-5" />
        <Close className="cursor-pointer retro-icon w-6 h-6"/>
        </>}
      </div>


      {user?.email ? (
         <div className={!nav ? 'hidden' : 'mobinav top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-7'}>
          <Link to='/account'>
            <button className='primary sm:pr-4 font-semibold border-none hover:border-none textlink'>Your Account</button>
          </Link>
          <button onClick={handleLogout} className='px-5 py-2.5 cursor-pointer primary font-semibold filled-button'>Logout</button>
        </div>
      ) : (
        <div className={!nav ? 'hidden' : 'mobinav top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-7'}>
          <Link onClick={handleClick} to='/login'>
            <button className='primary sm:pr-4 font-semibold border-none hover:border-none textlink'>Log In</button>
          </Link>
          <Link onClick={handleClick} to='/signup'>
            <button className='px-5 py-2.5 cursor-pointer primary font-semibold border-none filled-button'>Sign Up</button>
          </Link>
        </div>
      )}
      </div>
  )
}

export default Navbar
