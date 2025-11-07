import {  CiMail } from '../icons'
import {  FaLinkedin } from '../icons'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full py-8 mt-8" aria-label="Footer">
    <div className=" px-4 mx-0">
        <div className="flex flex-col md:flex-row justify-around items-start gap-5">
          <div className="branding">
            <h1 className="text-xl font-bold text-[#E6E6E6] mb-1">
              Tharun Prasad K.
            </h1>

            <div className="flex items-center gap-4 mt-3 px-10">
              <a
                href="https://www.instagram.com/tharun.10l/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <FaInstagram size={30} />
              </a>

              <a
                href="https://github.com/tharun10x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <FaGithub size={30} />
              </a>

              <a
                href="https://www.linkedin.com/in/tharunprasadk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <br />
              
            </div>
            <p className="mt-3 text-gray-400 w-48">A passionate Frontend Developer who loves building interactive UIs</p>
          </div>

          <div className="quick">
            <h2 className="text-2xl text-[#E6E6E6] mb-2">Quick Links</h2>
            <ul className="space-y-1 list-none p-0 m-0">
              <li><a className="text-gray-400 hover:text-gray-200 transition" href="#home">Home</a></li>
              <li><a className="text-gray-400 hover:text-gray-200 transition" href="#about">About</a></li>
              <li><a className="text-gray-400 hover:text-gray-200 transition" href="#skills">Skills</a></li>
              <li><a className="text-gray-400 hover:text-gray-200 transition" href="#projects">Projects</a></li>
              <li><a className="text-gray-400 hover:text-gray-200 transition" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className=" ">
            <h2 className="text-2xl text-[#E6E6E6] mb-2 ">Contact</h2>
            
            <a
              href="mailto:tharunprasad.k@gmail.com"
              aria-label="Email"
              className="text-[#E6E6E6] hover:text-[#FF00C8] ease-in-out duration-200 flex gap-2 "
            >
              <CiMail className="flex text-[#FF00C8]" />
              <span>tharunprasad.k@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[#5c5c5cff] mt-8 pt-6" />

          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 font-sans">
            &copy; {new Date().getFullYear()} Tharun Prasad K. All rights reserved.
          </p>
      </div>
    </footer>
  );
}