import './App.css'
import { lazy} from 'react'
import Bg from './Components/Bg'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Footer from './Components/footer'

const ProfileCardComponent = lazy(() => import('./blocks/Components/ProfileCard/ProfileCard'))

function App() {
  return (
    <>
      <Bg />
      <Navbar className="flex justify-center"/>

      <main style={{ position: 'relative', zIndex: 1, marginTop: '40px' }} id="home" role="main" className='flex justify-center'>
        <Hero />
      </main>

      <section id="about" className="about static mt-20 max-w-4xl mx-auto px-6 leading-relaxed text-[#E6E6E6] flex items-center justify-center min-h-[50vh]" aria-label="About section">
        
        <About />
      </section>

      <section id="skills" className="min-h-[50vh]" aria-label="Skills section" >

      </section>
      
      <section id="projects" className="min-h-[50vh] flex items-center justify-center px-6" aria-label="Projects section">
        {/* <WorkInProgress /> */}
        
      </section>
      
      <section id="contact" className="min-h-[50vh] bg-amber-950 " aria-label="Contact section">
        
      </section>
      <Footer />
      <div className="max-w-[1500px] bg-amber-400">
sdfg
      </div>
      
      
    </>
    
  );
}

export default App
