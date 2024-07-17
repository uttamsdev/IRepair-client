import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../button'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.header
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{
      duration: 1,
      delay: 1
    }}
    className='h-16'>
      <nav className='px-5 w-full h-full max-w-[1230px] mx-auto flex justify-between items-center'>
        <span className='text-3xl'>iRepair</span>
        <ul className='space-x-5'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Navbar