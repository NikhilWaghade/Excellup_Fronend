import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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
        scrolled
          ? "bg-white backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 xl:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/">
                <img
                  src="/assets/images/linear-light.svg"
                  className="w-44 sm:w-48 md:w-52"
                  alt="Excellup"
                />
              </Link>
            </motion.div>
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-black/80 hover:text-brand transition-colors duration-300 text-sm uppercase font-outfit"
              >
                {item.label}
              </Link>
            ))}
            <PrimaryBtn>Register Now</PrimaryBtn>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-brand"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-50 text-brand hover:scale-110 transition-transform"
          >
            <X size={32} />
          </button>

          <div className="relative h-full w-full px-6 py-10">
            <motion.div
              className="flex flex-col items-start justify-center h-full gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {[{ path: "/", label: "Home" }, ...navLinks].map((item, i) => (
                <motion.div key={item.path} variants={itemVariants} custom={i}>
                  <Link
                    to={item.path}
                    className="text-2xl sm:text-3xl font-light font-outfit text-brand uppercase hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <PrimaryBtn className="mt-8 sm:mt-10">Register Now</PrimaryBtn>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

// Animation variants
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
  hidden: { y: 20, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};
