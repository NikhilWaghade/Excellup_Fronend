import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import logosvg from '../assets/Images/linear-dark(svg).svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <nav className="z-50 relative bg-[#7a56d6] via-[#1a0033] text-white py-2  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
<div className="flex items-center flex-shrink-0">
  <Link to="/">
    <img
      className="w-40 "
      src={logosvg}
      alt="Excellup Logo"
    />
  </Link>
</div>


        {/* Centered Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/courses" className="hover:text-gray-300">Services</Link>
          <Link to="/gallary" className="hover:text-gray-300">Gallery</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:flex">
          <Link to="/courses" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Courses</Link>
          <Link to="/gallary" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact</Link>
          <Link to="/registration" onClick={() => setIsOpen(false)} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar