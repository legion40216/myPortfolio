import React, { useEffect, useState } from 'react'
import Navbar from './navbar-components/navbar'
import { Menu, Sun, Moon } from 'lucide-react';

const applyDarkMode = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : false;
};

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false)
  const [darkMode, setDarkMode] = useState(getInitialTheme);


  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);

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

  const handleToggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', JSON.stringify(newDarkMode));
  };

  return (
    <header>
      <div 
      className='nav-bar' 
      data-visible={toggleNav}
      >
        <Navbar 
        setToggleNav={setToggleNav}
        />
          <div className='flex gap-2 flex-col md:flex-row'>
            <button className='p-2 rounded text-sm bg-teal-500'>
              Resume
            </button>
            <button 
            onClick={handleToggleDarkMode }
            className='p-2 rounded text-sm 
            bg-gray-200 hover:bg-slate-300
            dark:bg-slate-800 dark:hover:bg-slate-700
            flex justify-center
            '
            >
              {
                darkMode ? (
                  <Sun className="h-5 w-5"/>
                )
                : 
                (
                  <Moon className="h-5 w-5"/>
                )
              }
            </button>
          </div>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          setToggleNav(prev => !prev);
        }}
        className=' block md:hidden p-2 rounded text-sm
         bg-blue-600  hover:bg-slate-300 text-white
         dark:hover:bg-slate-700'
        >
        <Menu className="h-5 w-5"/>
      </button>
    </header>
  )
}
