/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { scale, fill } from '@cloudinary/url-gen/actions/resize'
// import { CloudinaryImage } from '@cloudinary/url-gen'



// const myImage = new CloudinaryImage('samples/people/smiling-man', { cloudName: 'dwzuukwh5' })
//   .resize(fill().width(300).height(150))
//   .quality(80)
//   // .delivery({ format: 'jpg', quality: 'auto' })

// const Image2 = new CloudinaryImage('samples/people/smiling-man', { cloudName: 'dwzuukwh5' })
//   .resize(scale().width(300).height(150))
//   .quality(100)

// const Image3 = new CloudinaryImage('samples/people/smiling-man', { cloudName: 'dwzuukwh5' })
//   .resize(scale().width(300).height(150))
//   .quality(80)

import image4 from '../Assets/pexels-ozan-çulha-16337978 (1).jpg'

const About = () => {
  return (
    <div className="flex p-4">
      <div className='flex justify-center items-center mt-14 flex-col m-5 md:flex-row'>
        <img className='object-contain border-md justify-center ' style={{ maxWidth: '320px', maxHeight: '220px', width: '100%', height: 'auto', flexGrow: '1', zIndex: '1' }} src={image4} alt="sample cloud" />
        <div className='bg-orange-200 p-5 border-2 rounded-md text-black ' style={{ marginRight: '7rem' }}>
          <h2>Adams Fontil - fullstack Developer</h2>
          <p>Hi, I'm Adams, I'm 22 and was born in Haiti. I wasn't really interested in computer science. I didn't like it,
            I thought that it was way too complex and out of reach. Also I didn't think it was useful to learn web development
            since <a href="https://www.wix.com/website/design" target="_blank" rel="noreferrer">Wix</a> existed.
          </p>
          <div className='flex justify-end gap-2'>
            <FontAwesomeIcon icon={faGithub} className='hover:-translate-y-1 transform transition-all duration-300' />
            <FontAwesomeIcon icon={faLinkedin} className='hover:-translate-y-1 transform transition-all duration-300' />
            <FontAwesomeIcon icon={faEnvelope} className='hover:-translate-y-1 transform transition-all duration-300' />
          </div>
        </div>
      </div>
    </div>
  )
}



export default About
