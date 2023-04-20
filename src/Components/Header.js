import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-400 text-orange-200 p-4 w-screen" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
      <div>AF</div>
      <nav className="hidden gap-4 mx-4 md:flex">
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </nav>
      <div className="md:hidden"><FontAwesomeIcon icon={faBars} /></div>
    </div>
  )
}

export default Header
