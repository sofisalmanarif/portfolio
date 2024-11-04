import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className='sticky z-10 top-0 py-6 px-2 w-full backdrop-blur-sm'>
        <nav className='flex items-center w-full justify-between'>
            <ul className='z-100 flex gap-10 text-[1,2rem] font-[navfont] text-zinc-400'>
                <li><Link className='dark:hover:text-white hover:text-zinc-700 duration-300 ease-in-out' href={"/"}>home</Link></li>
                <li><Link className='dark:hover:text-white hover:text-zinc-700  duration-300 ease-in-out' href={"/myprojects"}>projects</Link></li>
                <li><Link className='dark:hover:text-white hover:text-zinc-700  duration-300 ease-in-out' href={"/contactme"}>contact</Link></li>
            </ul>
            <div>
            <ModeToggle></ModeToggle>
            
            </div>
        </nav>
    </header>
  )
}

export default Navbar