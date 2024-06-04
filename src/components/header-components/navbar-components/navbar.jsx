import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar({
  setToggleNav
}) {
  return (
    <nav>
        <ul className="flex gap-5">
            <li onClick={()=>{setToggleNav(prvious => (!prvious))}}>
              <NavLink to ="/">Home</NavLink>
            </li>
            <li onClick={()=>{setToggleNav(prvious => (!prvious))}}>
              <NavLink to ="project">Projects</NavLink>
              </li>
            <li onClick={()=>{setToggleNav(prvious => (!prvious))}}>
              <NavLink to ="about">About me</NavLink>
            </li>
        </ul>
    </nav>
  )
}
