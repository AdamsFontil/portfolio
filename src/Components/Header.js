// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// function Header() {

//   function handleClick() {
//     console.log('hi')
//     return (
//       <div className='flex z-10'>
//         <div><a href="#about">About</a></div>
//         <div><a href="#skills">Skills</a></div>
//         <div><a href="#projects">Projects</a></div>
//         <div><a href="#contact">Contact</a></div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex justify-between items-center bg-blue-600 text-orange-400 p-4 w-screen" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
//       <a href='#home' className='hover:scale-110' >AF</a>
//       <nav className="hidden gap-4 mx-4 md:flex">
//         <div><a href="#about" className='hover:underline'>About</a></div>
//         <div><a href="#skills" className='hover:underline'>Skills</a></div>
//         <div><a href="#projects" className='hover:underline'>Projects</a></div>
//         <div><a href="#contact" className='hover:underline'>Contact</a></div>
//       </nav>
//       <div className="md:hidden" onClick={handleClick}><FontAwesomeIcon icon={faBars} /></div>
//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)

  function handleClick() {
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
        <div className='fixed top-0 left-0 h-screen w-screen bg-blue-600 text-orange-400 flex justify-center items-center z-10'>
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
