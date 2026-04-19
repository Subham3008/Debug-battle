import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10%] bg-black text-white px-10 py-5 flex justify-between items-center'>
      <h1>Spotify</h1>
      <div className='flex gap-6'>
        <p>Home Icon</p>
        <p>Search bar</p>
      </div>
      <div>Login</div>
    </div>
  )
}

export default Navbar
