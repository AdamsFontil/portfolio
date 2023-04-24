import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
  return (
    <div className='flex flex-col gap-4 items-center p-4 text-white md:text-3xl bg-orange-400'>

      <h2 className='text-7xl'>Contact me</h2>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faFile} />
        <a className='hover:border-b-2 border-blue-600'>resume</a>
      </div>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href='mailto:adamsfuntil@gmail.com' target='_blank' className='hover:border-b-2 border-blue-600' rel="noreferrer">adamsfuntil@gmail.com</a>

      </div>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faLinkedin} />
        <a href='https://www.linkedin.com/in/adams-fontil/' target='_blank' className='hover:border-b-2 border-blue-600' rel="noreferrer">linkedin</a>
      </div>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faGithub} />
        <a href='https://github.com/AdamsFontil' target='_blank' className='hover:border-b-2 border-blue-600' rel="noreferrer">github</a>

      </div>
    </div>
  )
}


export default Contact
