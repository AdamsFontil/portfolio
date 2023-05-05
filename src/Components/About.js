/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume from '../Assets/resume/Adams_Fontil_fullStack.pdf'
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
        <div className=' text-white p-5 flex flex-col gap-2'>
          <h1 className='text-4xl md:text-7xl text-cyan-200'>About Me</h1>
          <p>Hello there and welcome to my website! My name is Adams Fontil, and I'm a self-taught web developer. My coding journey began around this time last year when I was looking for a change from my background in accounting. I found myself wanting to do something that I didn't have to force myself to do, challenging, and more flexible and that's when I stumbled upon the world of computer science thanks to Reddit.</p>
          <p>At first, I had a hard time finding my footing, trying various courses like App Academy, CS50, to name a few, but they didn't seem to work for me. However, that all changed when I found The Odin Project(TOP) thanks to Reddit again. TOP is an amazing resource that taught me most of what I know today. From there, I've continued to learn and improve, now pursuing the Full Stack Open curriculum to become a better developer with skills in both front and back-end development.</p>
          <p>I'm constantly revising and improving my old projects and creating new ones to apply what I know and grow my portfolio. I believe being consistent, dedicated, and focused are key to achieving success in any field, and that's what I am for to get to where I want to be.</p>
          <p>Thank you for taking the time to read my profile, like really. I'm excited to connect with you. If you're interested in contacting me, please visit my contact section to find my professional accounts and resume. I'm actively seeking an entry-level web development position and welcome any feedback and opportunities.I've also added them to the bottom right this section.</p>
          <div className='flex text-2xl md:text-4xl text-cyan-200 justify-end gap-2'>
            <div><p>My Links: </p></div>
            <a href={resume} target='_blank' rel="noreferrer"> <FontAwesomeIcon icon={faFile} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
            <a href='mailto:adamsfuntil@gmail.com' target='_blank' rel="noreferrer"> <FontAwesomeIcon icon={faEnvelope} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
            <a href='https://www.linkedin.com/in/adams-fontil/' target='_blank' rel="noreferrer" > <FontAwesomeIcon icon={faLinkedin} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
            <a href='https://github.com/AdamsFontil' target='_blank' rel="noreferrer" > <FontAwesomeIcon icon={faGithub} className='hover:-translate-y-1 transform transition-all duration-300' /> </a>
          </div>
        </div>
      </div>
    </div>
  )
}



export default About
