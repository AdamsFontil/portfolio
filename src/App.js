import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Home from './Components/Home'



function App() {

  return (

    <div className='bg-cyan-800 text-cyan-200 text-md md:text-3xl font-babita'>
      <Header />
      <div id="home" className='pt-6'><Home /></div>
      <div id="about" className='pt-10'><About /></div>
      <div id="skills" className='pt-10' ><Skills /></div>
      <div id="projects" className='pt-10'><Projects /></div>
      <div id="contact" className='pt-4'><Contact /></div>
    </div>
  )
}

export default App
