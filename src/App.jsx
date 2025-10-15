import './App.css'
import Bg from './Components/Bg'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { scrollToId } from './utils/scroll'
import ProfileCardComponent from './blocks/Components/ProfileCard/ProfileCard'
import About from './Components/About'
  

function App() {
  return (
    <>
      
      <Bg />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }} id="home" role="main">
        <Hero />
        
      </main>

      <section id="about" className="about static mt-20 max-w-4xl mx-auto px-6 leading-relaxed text-[#E6E6E6] flex items-center justify-center min-h-[50vh]" aria-label="About section">
        <ProfileCardComponent className='mt-20 absolute left-80' />
        <About />
      </section>
      <section id="skills" className="min-h-[50vh]" aria-label="Skills section" />
      <section id="projects" className="min-h-[50vh] flex items-center justify-center px-6" aria-label="Projects section">
        {/* <WorkInProgress /> */}
        
      </section>
       
      <section id="contact" className="min-h-[50vh]" aria-label="Contact section" />
      <div className="w-full" style={{ height: '2px', backgroundColor: '#5c5c5cff' }} />

    </>
    
  );
}

export default App
