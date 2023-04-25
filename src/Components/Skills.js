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
    skills: ['html5', 'css3', 'javascript', 'react', 'tailwindcss']
  },
  {
    category: 'back-end',
    skills: ['node.js', 'express', 'mongodb', 'rest-apis']
  },
  {
    category: 'misc.',
    skills: ['npm','git', 'github', 'cypress', 'jest']
  }
]

const Skills = () => {
  return (
    <div className='flex flex-col p-4 gap-4'>
      <h2 className='text-4xl'>Skills</h2>
      {skillsData.map((skillCategory, index) => (
        <div className='flex flex-col' key={index}>
          <h3>{skillCategory.category}</h3>
          <div className='flex gap-4'>
            {skillCategory.skills.map((skill, index) => (
              <div className='hover:-translate-y-2 transform transition-all duration-300' key={index}>
                <img className='border-2 bg-white h-16 w-16 p-1 border-white rounded-md object-fill' src={images[`./${skill.toLowerCase()}-color.svg`]} alt={skill} />
                <p className='text-white text-sm hover:text-red-400 justify-center items-end flex '>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
