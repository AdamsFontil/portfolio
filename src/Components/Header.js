import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)

  function handleClick() {
    setShowDropdown(!showDropdown)
  }
  function handleClickClose() {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="flex justify-between items-center bg-blue-600 text-orange-400 p-4 w-screen" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
      <a href='#home' className='hover:scale-110' >AF</a>
      <nav className="hidden gap-4 mx-4 md:flex">
        <div><a href="#about" className='hover:underline'>About</a></div>
        <div><a href="#skills" className='hover:underline'>Skills</a></div>
        <div><a href="#projects" className='hover:underline'>Projects</a></div>
        <div><a href="#contact" className='hover:underline'>Contact</a></div>
      </nav>
      <div className="md:hidden" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
      {showDropdown && (
        <div className='fixed flex-col top-0 text-6xl left-0 h-screen w-screen bg-orange-400 text-blue-600 flex justify-center items-center z-10'>
          <div className='fixed flex top-0 text-2xl left-0 p-4 justify-between  bg-blue-600 text-orange-400 w-screen'>
            <div> <a href='#home' className='hover:scale-110' >AF</a> </div>
            <div className=" flex justify-end" onClick={handleClickClose}><FontAwesomeIcon icon={faX} /></div>
          </div>
          <div className='flex flex-col gap-4'>
            <div><a href="#about" onClick={handleClick}>About</a></div>
            <div><a href="#skills" onClick={handleClick}>Skills</a></div>
            <div><a href="#projects" onClick={handleClick}>Projects</a></div>
            <div><a href="#contact" onClick={handleClick}>Contact</a></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
