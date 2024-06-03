import React from 'react'
import Navbar from './navbar-components/navbar'
import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
        <Navbar/>
        <div className='flex gap-2'>
          <button className='p-2  rounded text-sm bg-teal-500'>
            Resume
          </button>
          <button className='p-2  rounded text-sm bg-slate-800 hover:bg-slate-700'>
            <Sun className="h-5 w-5"/>
          </button>
        </div>
    </header>
  )
}
