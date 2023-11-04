import React from 'react'
import '../style/Header.css'
import header__logo from '../Images/header__logo.png'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img src={header__logo} alt="" />
                </div>
                <ul className='header__ul'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog">Blog</NavLink>
                    </li>
                 
                    <li>
                        < NavLink className='header__list' to="/Contact">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header