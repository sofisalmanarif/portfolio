import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='sticky z-10 top-0 py-6 px-2 backdrop-blur-sm'>
        <nav className='flex items-center justify-between'>
            <ul className='flex gap-10 text-[1,2rem] font-[navfont] text-zinc-400'>
                <li><Link className='hover:text-white duration-300 ease-in-out' href={"/"}>home</Link></li>
                <li><Link className='hover:text-white duration-300 ease-in-out' href={"/myprojects"}>projects</Link></li>
                <li><Link className='hover:text-white duration-300 ease-in-out' href={"/contactme"}>contact</Link></li>
            </ul>
            <span></span>
        </nav>
    </header>
  )
}

export default Navbar