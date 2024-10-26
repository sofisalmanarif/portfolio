import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='sticky top-0 py-6 px-2 backdrop-blur-lg'>
        <nav className='flex items-center justify-between'>
            <ul className='flex gap-10 text-[1,2rem] text-zinc-400'>
                <li><Link href={"/"}>home</Link></li>
                <li><Link href={"/"}>projects</Link></li>
                <li><Link href={"/"}>contact</Link></li>
            </ul>
            <span>mode</span>
        </nav>
    </header>
  )
}

export default Navbar