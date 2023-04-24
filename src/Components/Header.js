import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function Header() {
  return (
    <div className="flex justify-between items-center bg-blue-600 text-orange-400 p-4 w-screen" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
      <div>AF</div>
      <nav className="hidden gap-4 mx-4 md:flex">
        <div><a href="#about">About</a></div>
        <div><a href="#skills">Skills</a></div>
        <div><a href="#projects">Projects</a></div>
        <div><a href="#contact">Contact</a></div>
      </nav>
      <div className="md:hidden"><FontAwesomeIcon icon={faBars} /></div>
    </div>
  )
}

export default Header
