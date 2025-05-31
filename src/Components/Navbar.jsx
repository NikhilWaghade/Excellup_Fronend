import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // close on route change
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/services", label: "Services" },
    { path: "/community", label: "Community" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white py-4 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/assets/images/linear-light.svg"
                alt="Excellup"
                className="w-36 sm:w-44 md:w-48"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 sm:gap-">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-sm text-black/80 hover:text-brand uppercase font-medium transition duration-200 sm:ml-5 md:mr"
              >
                {item.label}
              </Link>
            ))}
            <PrimaryBtn>Register Now </PrimaryBtn>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-brand"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 h-1/2 bg-white/95 backdrop-blur-sm z-40 md:hidden px-6 py-6 shadow-lg"
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand hover:scale-110 transition-transform"
            >
              <X size={28} />
            </button>
          </div>

          <motion.div
            className="flex flex-col items-start gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((item, i) => (
              <motion.div key={item.path} variants={itemVariants} custom={i}>
                <Link
                  to={item.path}
                  className="text-xs font-medium text-brand uppercase tracking-wide hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <PrimaryBtn className="mt-4 text-xs px-3 py-1">Register</PrimaryBtn>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
};
