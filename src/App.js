import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Home from './Components/Home'



function App() {

  return (

    <div className='bg-blue-600 text-orange-400 md:text-2xl font-serif'>
      <Header />
      <div id="home"><Home /></div>
      <div id="about" className='pt-16'><About /></div>
      <div id="skills" className='pt-12' ><Skills /></div>
      <div id="projects" className='pt-12'><Projects /></div>
      <div id="contact" className='pt-10'><Contact /></div>
    </div>
  )
}

export default App
