import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 flex justify-between gap-4 w-[90%] lg:w-[70%] m-auto'>
        <Link to='/' className='font-bold text-xl'>nak workouts</Link>
    </nav>
  )
}

export default Navbar