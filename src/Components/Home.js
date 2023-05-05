import React from 'react'

import image4 from '../Assets/resume/mirrorPic.jpg'

const Home = () => {
  return (
    <div className=" flex flex-col justify-evenly items-center md:flex-row" >
      <div className='text-6xl md:text-9xl flex flex-col'>
        <h1>Adams Fontil</h1>
        <h2 className='text-3xl md:text-6xl'>Full-Stack Developer</h2>
      </div>
      <div>
        <img src={image4} className='' width='580px' ></img>
      </div>
    </div>
  )
}

export default Home
