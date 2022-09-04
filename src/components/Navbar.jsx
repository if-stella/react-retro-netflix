import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
      <h1 className="text-red-600 font-bold cursor-pointer text-3xl">TEXTFLEX</h1>
      </Link>
      <div>
      <Link to="/login">
        <button className="text-white/80 hover:text-white pr-4 font-semibold">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="bg-red-600/95 hover:bg-red-600 px-5 py-2.5 rounded cursor-pointer text-white/90 hover:text-white font-semibold">Sign up</button>
      </Link>
      </div>
    </div>
  )
}

export default Navbar
