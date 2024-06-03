import React, { useState } from 'react'
import Navbar from './navbar-components/navbar'
import { Menu, Sun } from 'lucide-react';

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <header>
      <div className='nav-bar' data-visible={toggleNav}>
        <Navbar/>
          <div className='flex gap-2 flex-col md:flex-row'>
            <button className='p-2  rounded text-sm bg-teal-500'>
              Resume
            </button>
            <button className='p-2  rounded text-sm bg-slate-800 hover:bg-slate-700'>
              <Sun className="h-5 w-5"/>
            </button>
          </div>
      </div>

        <button 
        onClick={()=>{setToggleNav(prvious => (!prvious))}}
        className=' block md:hidden
         p-2
         rounded text-sm 
        bg-blue-800 
        hover:bg-slate-700 
        '
        >
          <Menu className="h-5 w-5"/>
        </button>
    </header>
  )
}
