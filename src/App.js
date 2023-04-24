import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'



function App() {

  return (

    <div className='bg-blue-600 text-orange-400 md:text-2xl font-serif'>
      <Header />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default App
