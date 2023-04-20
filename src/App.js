import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'



function App() {

  return (
    <div className='bg-blue-400 text-orange-200 md:text-2xl font-serif'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
