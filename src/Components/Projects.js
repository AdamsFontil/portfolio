import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const images = {}
function importAll(r) {
  r.keys().forEach(key => images[key] = r(key))
}
// eslint-disable-next-line no-undef
importAll(require.context('../Assets/projectPics', false, /\.(png|jpe?g|svg)$/))

console.log('images', images)

const projectsData = [
  {
    name: 'Publix Clone',
    tools: ['react', 'mongoDB', 'express'],
    github: 'https://github.com/AdamsFontil/groceries',
    live: 'site.com',
    description: 'This is a full-stack project, a Publix Clone, that aims to test my skills in CSS and design, backend development using REST, and MongoDB database. The website has user authentication and token authentication, and features like a search bar and client-side form validation. The project will use React, MongoDB, and Express as its main tools. This project also makes use of unit testing with Jest and end-to-end testing with Cypress. The project is inspired by Publix\'s website, which has a pleasing design and excellent UI/UX, and I will attempt to replicate it.',
    imageName: 'publixClonePic'
  },
  {
    name: 'Blog List',
    tools: ['react', 'mongoDB','express', 'cypress', 'jest'],
    github: 'https://github.com/AdamsFontil/fsoPart4/tree/gh-pages',
    live: 'https://wandering-sound-6626.fly.dev/',
    description: 'This is yet another fullStack project so it has a frontend made with react, backend using Rest APIs and express, and it also has database with mongoDB that stores users and their blogs. Users can delete and like blogs. This project uses testing with Jest for unit test, and Cypress for E2E integration testing.',
    imageName: 'blogPic'
  },
  {
    name: 'Personal Website',
    tools: ['react', 'tailwindcss'],
    github: 'https://github.com/AdamsFontil/portfolio',
    live: 'https://644fc7ebcd7cb5224f280479--vermillion-cajeta-1205c6.netlify.app/',
    description: 'Personal website made mainly with react and tailwind to showcase my abilities and the projects that Ive made',
    imageName: 'portfolioPic'
  },
  {
    name: 'Library Project',
    tools: ['javascript', 'css'],
    github: 'https://github.com/AdamsFontil/library',
    live: 'https://adamsfontil.github.io/library/',
    description: 'The Library App is a user-friendly web application that allows users to add, remove, and toggle read status of books in their collection. It features form validation, factory functions, and inheritance, and ensures that books are not duplicated in the library. The app is well-organized and has a responsive design, and uses local storage to save data.',
    imageName: 'libraryPic'
  },
  {
    name: 'PhoneBook',
    tools: ['react', 'mongoDB','express'],
    github: 'https://github.com/AdamsFontil/fsoPart3',
    live: 'https://twilight-rain-3479.fly.dev/',
    description: 'The PhoneBook project is part of the FullStack Open curriculum. It is a full-stack project that allows users to add and manage phone numbers in a MongoDB database. The project features user authentication using JWT (JSON Web Tokens), which allows users to log in and access their phone numbers. The project is built using React, MongoDB, and Express, and it demonstrates proficiency in these technologies. ',
    imageName: 'phonebookPic'
  },
  // {
  //   name: 'Todo List',
  //   tools: ['javascript', 'css'],
  //   github: '',
  //   live: '$69.99',
  //   description: 'Calculator app thats just like the one on your phone. This was one my first big projects, testing my understanding javascript. Made with vanilla javascript and css',
  //   imageName: Image1
  // },
  // {
  //   name: 'Calculator',
  //   tools: ['javascript', 'css'],
  //   github: '',
  //   live: '$69.99',
  //   description: 'Calculator app thats just like the one on your phone. This was one my first big projects, testing my understanding javascript. Made with vanilla javascript and css',
  //   imageName: Image1
  // },
]





const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='p-4 bg-orange-400 text-blue-600 border-2 border-white rounded-lg'>
      <h1 className='text-6xl mb-5'>My Projects</h1>
      <Slider className='projects-slider mx-8 mb-6' {...settings}>
        {projectsData.map((project, index) => (
          <div className=' text-white' key={index}>
            <img className='w-49 object-contain' src={images[`./${project.imageName}.png`]} alt={project.name} />
            <div className='pt-4'>
              <div className='flex items-center justify-between text-blue-600'>
                <p className=''>{project.name}</p>
                <div className='flex gap-2 justify-end'>
                  <a href={project.github} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} className='hover:text-white'  /> </a>
                  <a href={project.live} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:text-white'   /> </a>
                </div>
              </div >
              <div className='flex flex-col gap-3'>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}


export default Projects
