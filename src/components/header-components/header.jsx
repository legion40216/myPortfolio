import React, { useEffect, useState } from 'react'
import Navbar from './navbar-components/navbar'
import { Menu, Sun } from 'lucide-react';

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (toggleNav && !event.target.closest('.nav-bar')) {
        setToggleNav(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleNav]);

  return (
    <header>
      <div className='nav-bar' data-visible={toggleNav}>
        <Navbar 
        setToggleNav={setToggleNav}
        />
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
        onClick={(e) => {
          e.stopPropagation();
          setToggleNav(prev => !prev);
        }}
        className=' block md:hidden p-2 rounded text-sm
         bg-blue-800 hover:bg-slate-700'
        >
        <Menu className="h-5 w-5"/>
      </button>
    </header>
  )
}
