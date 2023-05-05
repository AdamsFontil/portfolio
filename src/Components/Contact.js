import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import image4 from '../Assets/pexels-ozan-çulha-16337978 (1).jpg'
import resume from '../Assets/resume/Adams_Fontil_fullStack.pdf'

console.log('image', image4)
console.log('resume', resume)

const Contact = () => {
  return (
    <div className='flex flex-col text-4xl md:text-6xl justify-center gap-9 items-center p-4' style={{ height:'100vh' }}>

      <h2 className=' text-7xl md:text-9xl'>Contact me</h2>
      <div className='flex items-center md:p-3'>
        <FontAwesomeIcon icon={faFile} className='p-2' />
        <a href={resume} target='_blank' className='hover:border-b-2 border-white' rel="noreferrer">resume</a>
      </div>
      <div className='flex items-center md:p-3'>
        <FontAwesomeIcon icon={faEnvelope} className='p-2' />
        <a href='mailto:adamsfuntil@gmail.com' target='_blank' className='hover:border-b-2 border-white' rel="noreferrer">adamsfuntil@gmail.com</a>

      </div>
      <div className='flex items-center md:p-3'>
        <FontAwesomeIcon icon={faLinkedin} className='p-2' />
        <a href='https://www.linkedin.com/in/adams-fontil/' target='_blank' className='hover:border-b-2 border-white' rel="noreferrer">linkedin</a>
      </div>
      <div className='flex items-center md:p-3'>
        <FontAwesomeIcon icon={faGithub} className='p-2' />
        <a href='https://github.com/AdamsFontil' target='_blank' className='hover:border-b-2 border-white' rel="noreferrer">github</a>

      </div>
    </div>
  )
}


export default Contact
