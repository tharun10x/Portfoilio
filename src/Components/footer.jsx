export default function Footer() {
  return (
    <footer className="w-full text-center py-4 mt-8">
    <div className="wrapper w-full   text-left flex justify-between gap-15">
        <div className="self">
            <h1 className="text-xl font-bold text-[#E6E6E6] mb-2">
                Tharun Prasad K.
            </h1>
        </div>
        <div className="quick text-xl text-[#E6E6E6]">
            <h1 className="text-2xl mb-0.5">Quick Links</h1>
            <li className="list-none text-gray-500 font-sans"><a href="#home">Home</a></li>
            <li className="list-none text-gray-500 font-sans"><a href="#about">About</a></li>
            <li className="list-none text-gray-500 font-sans"><a href="#skills">Skills</a></li>
            <li className="list-none text-gray-500 font-sans"><a href="#projects">Projects</a></li>
            <li className="list-none text-gray-500 font-sans"><a href="#contact">Contact</a></li>
        </div>
    </div>
    <div className="w-full" style={{ height: '2px', backgroundColor: '#5c5c5cff', marginTop: '40px' }} />
      <p className="text-lg mt-10 text-gray-600 dark:text-gray-400 font-sans">
        &copy; {new Date().getFullYear()} Tharun Prasad K.  All rights reserved.
      </p>
    </footer>
  );
}