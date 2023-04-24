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
        <div className='bg-orange-400 p-5 border-2 rounded-md text-white flex flex-col gap-6' style={{ marginRight: '7rem' }}>
          <p>Welcome to my website! My name is Adams Fontil, and I'm a self-taught web developer
             with a passion for learning and a drive to succeed. I believe that the best way to achieve success
             is through hard work, dedication, and continuous learning, which is why I started teaching myself
              to code last year using The Odin Project.</p>

          <p> Since then, I've become proficient in a variety of web development technologies and frameworks,
            including my MERN tech stack, which includes React.js, MongoDB, Express.js, Tailwind CSS, and Node.js.
             What sets me apart is my dedication to continuous improvement and my ability to learn quickly. I'm
             always looking for new challenges and opportunities to expand my skills, and I'm currently working
             on Fullstack Open, a rigorous course from the University of Helsinki in Finland, to take my skills to
             the next level. </p>

          <p> I have completed several projects, including a full-stack e-commerce (Publix Clone) website. I'm
            passionate about web development and constantly seek to improve my skills through independent learning.
             My top skills include React.js with Redux, MongoDB, Express.js, Tailwind CSS, and Node.js, and I'm
              always looking for new ways to apply and expand my expertise. </p>

          <p> As an experienced web developer, I believe that I can be an asset to any development team. I'm seeking
             an entry-level web development position to apply my skills and contribute to the development of
             impactful web applications. Thank you for taking the time to read my profile, and I'm excited to
             connect with you!
          </p>
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
