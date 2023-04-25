import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Image1 from '../Assets/pexels-ozan-çulha-16337978 (1).jpg'

const projectsData = [
  {
    name: 'Publix Clone',
    tools: ['react', 'mongoDB', 'express'],
    github: 'https://github.com/',
    live: 'site.com',
    description: 'Publix app created to test both design skills, and backend. This site has authentication, and uses mongoDB to store those users, and the items they have in their carts',
    screenshot: Image1
  },
  {
    name: 'Calculator',
    tools: ['javascript', 'css'],
    github: '',
    live: '$69.99',
    description: 'Calculator app thats just like the one on your phone. This was one my first big projects, testing my understanding javascript. Made with vanilla javascript and css',
    screenshot: Image1
  },
  {
    name: 'Todo List',
    tools: ['javascript', 'css'],
    github: '',
    live: '$69.99',
    description: 'Another plain old javascript project. In this project I made use objects, and protypal inheritance',
    screenshot: Image1
  },
  {
    name: 'Library Project',
    tools: ['javascript', 'css'],
    github: '24 Hours Advance Notice Required',
    live: '$69.99',
    description: 'This project let us add books to your collection when youre done reading them. This site made use of form validation, factory functions, inheritance and properly structuring code.',
    screenshot: Image1
  },
  {
    name: 'PhoneBook',
    tools: ['react', 'mongoDB','express'],
    github: '24 Hours Advance Notice Required',
    live: '$69.99',
    description: 'FullStack Project that I made as I went through the FullStack Open cirriculum. It stores phone numbers in mongoDB, allows users and authenticaticates them ',
    screenshot: Image1
  },
  {
    name: 'Blog List',
    tools: ['react', 'mongoDB','express', 'cypress', 'jest'],
    github: '24 Hours Advance Notice Required',
    live: '$69.99',
    description: 'This is yet another fullStack project so it has a frontend made with react, backend using Rest APIs and express, and it also has database with mongoDB that stores users and their blogs. Users can delete and like blogs. This project uses testing with Jest for unit test, and Cypress for E2E integration testing.',
    screenshot: Image1
  }
]



const Projects = () => {
  return (
    <div className='p-4 flex flex-col gap-2'>
      <h1 className='text-4xl'>My Projects</h1>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        {projectsData.map((project, index) => (
          <div className=' border-orange-400 rounded-lg border-2 text-white' key={index}>
            <img className='w-50 object-contain border-2 ' src={project.screenshot} alt={project.name} />
            <div className='p-4'>
              <div className='flex items-center justify-between text-orange-400'>
                <p className=''>{project.name}</p>
                <div className='flex gap-2 justify-end'>
                  <a href={project.github} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} className='hover:text-white'  /> </a>
                  <a href={project.live} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:text-white'   /> </a>
                </div>
              </div >
              <div className='flex flex-col gap-3'>
                <p>{project.description}</p>
                {/* <div>
                  <h2>Tools used:</h2>
                  <p>{project.tools}</p> <br></br>
                </div> */}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  )
}


export default Projects
