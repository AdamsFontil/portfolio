import React from 'react'

import image4 from '../Assets/pexels-ozan-çulha-16337978 (1).jpg'

const Home = () => {
  return (
    <div className="flex justify-between items-center gap-3 " style={{ height:'100vh' }}>
      <div className='text-6xl flex gap-8 flex-col'>
        <h1>Adams Fontil</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <div>
        <img src={image4} className='rounded-full' width='400px' ></img>
      </div>
    </div>
  )
}

export default Home
