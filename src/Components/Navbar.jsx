import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="max-w-7xl mx-auto px-3 sm:px-6  xl:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1>
            <motion.a
              href="#"
              className="text-2xl font-light text-white"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/assets/images/linear-light.svg"
                className="w-44 sm:w-48 md:w-52"
                alt="excellup"
              />
            </motion.a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Courses", "Services", "Community", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-black/80 hover:text-brand transition-colors duration-300 text-sm uppercase font-outfit"
                >
                  {item}
                </motion.a>
              )
            )}
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

        {/* Mobile Navigation */}
        {/* {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40"
          >
            <div className="relative h-full w-full p-8">
              <motion.div
                className="flex flex-col items-start justify-center h-full gap-8 px-4"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {[
                  { path: "/", label: "Home" },
                  { path: "/magazine", label: "Magazine" },
                  { path: "/careers", label: "Careers" },
                  { path: "/team", label: "Our Team" },
                  { path: "/manifesto", label: "Manifesto" },
                  { path: "/contact", label: "Contact us" },
                ].map((item, i) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    custom={i}
                  >
                    <Link
                      to={item.path}
                      className="text-3xl font-light font-outfit text-brand uppercase hover:opacity-70 transition-opacity"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )} */}
      </div>
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
