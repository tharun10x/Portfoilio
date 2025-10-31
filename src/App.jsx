import './App.css'
import { lazy, Suspense } from 'react'
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
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1, marginTop: '40px' }} id="home" role="main">
        <Hero  className="" />
        
      </main>

      <section id="about" className="about static mt-20 max-w-4xl mx-auto px-6 leading-relaxed text-[#E6E6E6] flex items-center justify-center min-h-[50vh]" aria-label="About section">
        <Suspense fallback={<div />}>
          <ProfileCardComponent className='mt-20 absolute left-80' />
        </Suspense>
        <About />
      </section>
      <section id="skills" className="min-h-[50vh]" aria-label="Skills section" />
      <section id="projects" className="min-h-[50vh] flex items-center justify-center px-6" aria-label="Projects section">
        {/* <WorkInProgress /> */}
        
      </section>
       
      <section id="contact" className="min-h-[50vh] w-full static" aria-label="Contact section" />
      <Footer className="absolute bottom-4 left-0 right-0" />
      

    </>
    
  );
}

export default App
