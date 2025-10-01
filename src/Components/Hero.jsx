import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownTrayIcon, RiGithubLine, FiLinkedin, HiMail, FaDiagramProject, FaPaperPlane } from '../icons'
import { scrollToId } from '../utils/scroll'
import Arrow from './Arrow'
import Button from './ui/Button'
import { buildVariants } from '../animations/variants'
import TypingName from './TypingName'

function Hero(){
  const prefersReducedMotion = useReducedMotion()
  const { containerVariants, childVariants, iconContainerVariants, iconItemVariants } = buildVariants(prefersReducedMotion)
  const scrollTo = (id) => scrollToId(id, 20)
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className=" sm:mt-5 h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl bg-transparent backdrop-blur-[3px] md:border-[#00FFFF] md:border-2 shadow-2xl flex flex-col items-center justify-center "
      >
      
        <motion.h1
          variants={childVariants}
          className=" text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FF00C8] to-[#BF00FF] bg-clip-text text-transparent animate-cloud"
        >
          <TypingName />
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="mt-5 text-xl font-sans md:text-2xl lg:text-[28px] text-[#E6E6E6] font-medium leading-relaxed max-w-3xl mx-auto"
        >
          A passionate <span className='font-bold text-[#FF00C6]'>Frontend Developer </span>who loves building interactive <span className='text-[#FF00C6]'>UI</span>, exploring <span className='font-bold text-[#BF00FF]'>Machine Learning</span> and I'm a tech enthusiast
        </motion.p>
    <div className="mt-15 text-[15px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* contact */}
      <Button className="group font-bold min-w-[14rem]" onClick={()=>scrollTo('contact')}>
              <span className="inline-flex items-center gap-2">
                <span className="relative inline-block w-5 h-5">
                  {/* Mail fades out and slides slightly up-right */}
                  <HiMail
                    aria-hidden="true"
                    className="absolute inset-0 w-5 h-5 text-current transition-all duration-300 ease-out opacity-100 translate-x-0 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0"
                  />
                  {/* Plane flies in from bottom-right diagonally into place */}
                  <FaPaperPlane
                    aria-hidden="true"
                    className="absolute inset-0 w-5 h-5 text-current opacity-0 translate-y-5 -translate-x-7 rotate-12 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:rotate-0"
                  />
                </span>
                <span>Get in Touch</span>
              </span>
            </Button>
          {/* project */}
          <Button variant='outline' className='group flex items-center gap-2 min-w-[14rem]' onClick={()=>scrollTo('projects')}>
            <FaDiagramProject className='w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#00FFFF]' />
            View Projects
          </Button>
          {/* download btn */}
          <a
            href="/cv.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 min-w-[14rem] border text-[#e6e6e6] font-semibold border-[#00FFFF]/50 rounded-xl px-6 py-2 hover:bg-[#00FFFF]/10 hover:scale-110 hover:shadow-[0_0_25px_-4px_#00FFFF] hover:brightness-110 transition duration-300 transform"
            aria-label="Download CV"
          >
            <ArrowDownTrayIcon className='w-5 h-5 text-[#e6e6e6] transition-transform duration-300 group-hover:translate-y-2 group-hover:text-[#00FFFF]' />
            Download CV
          </a>
        </div>
        <motion.div
          className="flex justify-start gap-5 mt-10"
          variants={iconContainerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={iconItemVariants}>
            <a href="https://github.com/tharun10x" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='focus:outline-none focus-visible:ring focus-visible:ring-[#BF00FF]/15 rounded'>
              <RiGithubLine className='w-10 h-10 text-[#e6e6e6] cursor-pointer transition duration-300 hover:text-[#BF00FF] hover:drop-shadow-[0_0_10px_#BF00FF] transform hover:scale-110 active:scale-95' />
            </a>
          </motion.span>
          <motion.span variants={iconItemVariants}>
            <a href="https://www.linkedin.com/in/tharunprasad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='focus:outline-none focus-visible:ring focus-visible:ring-[#66a6ff]/15 rounded'>
              <FiLinkedin className='w-10 h-10 text-[#e6e6e6] cursor-pointer transition duration-300 hover:text-[#66a6ff] hover:drop-shadow-[0_0_10px_#66a6ff] transform hover:scale-110 active:scale-95' />
            </a>
          </motion.span>
        </motion.div>
        <div className="flex justify-center mt-8 sm:mt-10">
        <Arrow
          onClick={() => scrollToId('about', 20)} className='hover:shadow-[0_0_25px_4px_#e6e6e6e]'  />
      </div>
      </motion.div>
      
    </>
  );
}

export default Hero