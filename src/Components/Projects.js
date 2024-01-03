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
    name: 'Tweeter: A Twitter Clone',
    tools: ['nextJs', 'tailwindcss', 'supabase', 'shadcnui', 'github actions', 'react-query'],
    github: 'https://github.com/AdamsFontil/social',
    live: 'https://social-indol.vercel.app',
    // eslint-disable-next-line quotes
    description: "This project is my proudest work, and shows all of the skills I've acquired during my school break. Made without tutorials, it showcases my frontend and backend abilities, with Shadcnui creating beautiful interfaces, Tailwind CSS styling smoothly, and React Query making cache management, and api calls much easier to work with. Supabase, is the backbone of this site as it handles data and storage. The live project excels in a responsive design, smooth login/logout, and comprehensive user profiles, notifications, and bookmarks. While lacking some social media features like liking posts, replying and following users, uploading images/videos, the site still captures the essence of the actual thing. Future improvements might fill these gaps, but with my return to school, I'm not sure if I'll be able to find the time to realize those plans. Please checkout this clone, make a post and tell me what you think.",
    imageName: 'tweeter'
  },
  {
    name: 'Shopping Store for a Friend',
    tools: ['nextJs', 'tailwindcss', 'pocketbase', 'daisyUI', 'fontAwesome'],
    github: 'https://github.com/AdamsFontil/nextCormerce',
    live: 'https://store-ashen-psi.vercel.app/',
    // eslint-disable-next-line quotes
    description: "This project was created to support my friend's venture into online business. While the showcased products on the site aren't available for sale due to the store not coming to fruition, the site offers a glimpse into what it could have been. The captivating interface, designed with DaisyUI, enhances the user experience. React-query handles state management, route calling, and cache management, contributing to the site's seamless functionality. The backend is powered by Pocketbase, managing user profiles, the catalog of items, and the site's images. Although the shopping aspect is a demo and doesn't feature actual products, the payment processing, integrated with Stripe, is fully functional within the project.",
    imageName: 'eStore'
  },
  {
    name: 'CI/CD practice with a Pokedex',
    tools: ['github actions', 'yaml', 'fly.io'],
    github: 'https://github.com/AdamsFontil/full-stack-open-pokedex',
    live: 'https://fly.io/apps/fragrant-silence-4491',
    description: 'The frontend was done for me, and some of the backend as well in this project. This project isn\'t about building anything. It was mainly about me learning about how continous integration and continous deployment work. In this project I learned and used github actions, used yaml to define my actions, and implemented multi-stage jobs and steps to keep the application green, and function with every new push made to the main branch. Also made it so that Pull Requests are only accepted if tests, linting jobs are done. This project also have versioning, that are done with major updates, once those are made deployment is immediately to fly.io',
    imageName: 'pokedex'
  },
  {
    name: 'Publix Clone',
    tools: ['react', 'mongoDB', 'express'],
    github: 'https://github.com/AdamsFontil/groceries',
    live: 'https://publixclone.netlify.app/',
    description: 'This is not a full-stack project. But it does show my frontend skills with CSS and design. There isn\'t much of a backend here and there\'s no database. The website has user authentication and token authentication, and features like a search bar and client-side form validation and is fully responsive. The project is inspired by Publix\'s website, which has a pleasing design and excellent UI/UX, and I did my best attempt to replicate the UI.',
    imageName: 'publixClonePic'
  },
  // {
  //   name: 'Blog List',
  //   tools: ['react', 'mongoDB','express', 'cypress', 'jest'],
  //   github: 'https://github.com/AdamsFontil/fsoPart4/tree/gh-pages',
  //   live: 'https://wandering-sound-6626.fly.dev/',
  //   description: 'This is yet another fullStack project so it has a frontend made with react, backend using Rest APIs and express, and it also has database with mongoDB that stores users and their blogs. Users can delete and like blogs. This project uses testing with Jest for unit test, and Cypress for E2E integration testing.',
  //   imageName: 'blogPic'
  // },
  // {
  //   name: 'Hospital',
  //   tools: ['react', 'mongoDB','express'],
  //   github: 'https://github.com/AdamsFontil/fsoPart3',
  //   live: 'https://twilight-rain-3479.fly.dev/',
  //   description: 'The PhoneBook project is part of the FullStack Open curriculum. It is a full-stack project that allows users to add and manage phone numbers in a MongoDB database. The project features user authentication using JWT (JSON Web Tokens), which allows users to log in and access their phone numbers. The project is built using React, MongoDB, and Express, and it demonstrates proficiency in these technologies. ',
  //   imageName: 'phonebookPic'
  // },
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
    <div className='p-4 '>
      <h1 className='text-2xl md:text-5xl mb-4'>Projects</h1>
      <Slider className='projects-slider mx-8 mb-6' {...settings}>
        {projectsData.map((project, index) => (
          <div className='text-white' key={index}>
            <img className='w-49 object-contain' src={images[`./${project.imageName}.png`]} alt={project.name} />
            <div className='pt-4'>
              <div className='flex items-center justify-between text-2xl md:text-4xl text-cyan-200'>
                <h2 className='text-2xl md:text-3xl'>{project.name}</h2>
                <div className='flex gap-2 justify-end'>
                  <a href={project.github} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} className='hover:text-white'  /> </a>
                  <a href={project.live} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:text-white'/> </a>
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
