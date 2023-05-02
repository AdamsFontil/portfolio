import React from 'react'

import image4 from '../Assets/resume/jacketPic.jpg'

const Home = () => {
  return (
    <div className="flex justify-between items-center gap-8 m-5" style={{ height:'90vh' }}>
      <div className='text-3xl md:text-7xl flex gap flex-col gap-4'>
        <h1>Adams Fontil</h1>
        <h2 className='text-lg md:text-3xl'>Full-Stack Developer</h2>
      </div>
      <div>
        <img src={image4} className='sm:-m-16' width='780px' ></img>
      </div>
    </div>
  )
}

export default Home
