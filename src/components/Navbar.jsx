import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 font-bold cursor-pointer text-3xl">TEXTFLEX</h1>
      <div>
        <button className="text-white pr-4">Log in</button>
        <button className="bg-red-600 px-5 py-2.5 rounded cursor-pointer text-white">Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
