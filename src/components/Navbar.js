import React from 'react'
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {

  return (
    <>
      <div>
        <header>
          <div className="header tflex">
            <div className="logo tflex"><a href="/Portfolio"><img src={logo} alt="" />{props.logoName}</a></div>
            <ul>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/projects">PROJECTS</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
          </div>
        </header>
      </div>
    </>

  )
}
