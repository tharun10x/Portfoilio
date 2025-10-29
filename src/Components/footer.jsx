export default function Footer() {
  return (
    <footer className="w-full py-8 mt-8" aria-label="Footer">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
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
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://github.com/tharun10x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.73 3.07 8.74 7.33 10.16.54.1.74-.24.74-.52 0-.26-.01-1.12-.02-2.03-2.98.65-3.61-1.43-3.61-1.43-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.64 2.52 1.17 3.14.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.29 0-1.17.42-2.12 1.12-2.87-.11-.27-.49-1.36.11-2.84 0 0 .91-.29 2.98 1.1a10.4 10.4 0 012.71-.37c.92 0 1.85.12 2.71.37 2.07-1.39 2.98-1.1 2.98-1.1.6 1.48.22 2.57.11 2.84.7.75 1.12 1.7 1.12 2.87 0 4.11-2.5 5.01-4.88 5.28.39.35.73 1.04.73 2.1 0 1.52-.01 2.75-.01 3.12 0 .29.2.63.75.52A11.12 11.12 0 0023.1 11.6C23.1 5.33 18.27.5 12 .5z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/tharunprasadk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7.5 10.5v6H5V10.5h2.5zM6.25 9.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12 10.5v1.1c.33-.6 1.05-1.2 2.2-1.2 2.35 0 2.78 1.55 2.78 3.57V16.5h-2.5v-2.45c0-.58-.01-1.33-.82-1.33-.82 0-.95.64-.95 1.29V16.5H12v-6z" fill="currentColor"/>
                </svg>
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
        </div>

        <div className="border-t border-[#5c5c5cff] mt-8 pt-6" />

        <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 font-sans">
          &copy; {new Date().getFullYear()} Tharun Prasad K. All rights reserved.
        </p>
      </div>
    </footer>
  );
}