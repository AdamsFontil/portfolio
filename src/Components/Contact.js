import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
  return (
    <div className='flex flex-col gap-4 items-center p-4 text-white md:text-3xl bg-orange-200'>

      <h2 className='text-7xl'>Contact me</h2>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faFile} />
        <p className='hover:border-b-2 border-blue-500'>resume</p>
      </div>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faEnvelope} />
        <p className='hover:border-b-2 border-blue-500'>adamsfuntil</p>
      </div>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faLinkedin} />
        <p className='hover:border-b-2 border-blue-500'>linkedin</p>
      </div>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faGithub} />
        <p className='hover:border-b-2 border-blue-500'>github</p>
      </div>
    </div>
  )
}


export default Contact
