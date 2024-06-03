import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul className="flex gap-5">
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="project">Projects</NavLink></li>
            <li><NavLink to ="about">About me</NavLink></li>
        </ul>
    </nav>
  )
}
