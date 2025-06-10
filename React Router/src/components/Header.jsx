import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'


function Header() {
  return (
    <div className="flex gap-2">
        <ul>
            <li>
                <NavLink to="/">
                    hello
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    about
                </NavLink>
            </li>
            <li>
                <NavLink to="/Hello">
                    Hello
                </NavLink>
            </li>
            <li>
                <NavLink to="/Yo">
                    Yo
                </NavLink>
            </li>
        </ul>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Header