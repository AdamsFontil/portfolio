import React from 'react'

const images = {}
function importAll(r) {
  r.keys().forEach(key => images[key] = r(key))
}
// eslint-disable-next-line no-undef
importAll(require.context('../Assets/skillsIcons', false, /\.(png|jpe?g|svg)$/))

console.log('images', images)

const skillsData = [
  {
    category: 'front-end',
    skills: ['html', 'css', 'javascript', 'react', 'tailwindcss', 'redux', 'typescript', 'react native', 'react query', 'next.js' ]
  },
  {
    category: 'back-end',
    skills: ['node.js', 'express', 'mongodb', 'rest-apis', 'graphql','ci cd', 'docker', 'github actions']
  },
  {
    category: 'misc.',
    skills: ['npm','git', 'github', 'cypress', 'jest', 'fly.io' ]
  },
]

const Skills = () => {
  return (
    <div className='flex flex-col md:p-4 p-2 gap-2 md:gap-4'>
      <h2 className='text-4xl md:text-7xl'>Skills</h2>
      {skillsData.map((skillCategory, index) => (
        <div className='flex flex-col' key={index}>
          <h3 className=''>{skillCategory.category} testing</h3>
          <div className='flex  w-full md:gap-4'>
            {skillCategory.skills.map((skill, index) => (
              <div className='flex flex-col hover:-translate-y-2 pl-1 w-12 md:w-24 transform transition-all duration-300  items-center' key={index}>
                <img className='border-2 bg-white h-8 w-8 md:h-16 md:w-16 border-white rounded-md object-fill items-center' src={images[`./${skill.toLowerCase()}-color.svg`]} alt={skill} />
                <p className='text-white text-xs break-words text-center md:text-lg hover:text-cyan-200 justify-center items-end flex '>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
