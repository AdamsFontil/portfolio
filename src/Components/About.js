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

// import image4 from '../Assets/pexels-ozan-çulha-16337978 (1).jpg'

const About = () => {
  return (
    <div className="flex">
      <div className='flex justify-center items-center flex-col md:flex-row'>

        {/* <img className='object-contain border-md justify-center ' style={{ maxWidth: '320px', maxHeight: '220px', width: '100%', height: 'auto', flexGrow: '1', zIndex: '1' }} src={image4} alt="sample cloud" /> */}
        <div className='bg-orange-400 p-5 text-white flex flex-col gap-6'>
          <h1 className='text-4xl'>About Me</h1>
          <p>Welcome to my website! My name is Adams Fontil, and I'm a self-taught web developer
with a passion for learning and a drive to succeed. I believe that consistency, dedication, and focus are key to achieving success in any field. That's why I started teaching myself to code last year using The Odin Project, and I'm currently furthering my education through the Full Stack Open curriculum.</p>
          <p>The Full Stack Open is a comprehensive online course developed by the University of Helsinki, covering a wide range of web development technologies, including React, Redux, Node.js, MongoDB, and GraphQL. The curriculum is designed to take my skills to the next level by challenging me with practical exercises and real-world projects. </p>
          <p>I'm constantly revising and improving my old projects and also developing new ones to add to my portfolio. I'm eager to apply my skills and contribute to the development of impactful web applications. I believe that I can be an asset to any development team, and I'm actively seeking an entry-level web development position. Thank you for taking the time to read my profile, and I'm excited to connect with you!</p>
          <div className='flex justify-end gap-2'>
            <a href='https://github.com/AdamsFontil' target='_blank' rel="noreferrer" > <FontAwesomeIcon icon={faGithub} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
            <a href='https://www.linkedin.com/in/adams-fontil/' target='_blank' rel="noreferrer" > <FontAwesomeIcon icon={faLinkedin} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
            <a href='mailto:adamsfuntil@gmail.com' target='_blank' rel="noreferrer"> <FontAwesomeIcon icon={faEnvelope} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
          </div>
        </div>
      </div>
    </div>
  )
}



export default About
