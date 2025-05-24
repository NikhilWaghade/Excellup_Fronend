import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logosvg from "../assets/Images/linear-dark(svg).svg";

const Footer = () => {
  return (
    <footer className="bg-[#7a56d6] text-white px-6 md:px-20 py-10 -mt-[0.99em]">
      {/* Desktop: 4 columns, Mobile: 2 columns x 2 rows */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 "
      >
        {/* About */}
        <div className="md:ml-0 ml-10">
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about">Who We Are</Link></li>
            <li><Link to="/contact">Our Mission</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:ml-14">
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/hire">Hire From Us</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        {/* Learn */}
        <div className="md:ml-28 ml-10">
          <h4 className="font-semibold mb-3">Learn</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:ml-36">
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm ">
            <li>📞 +91 6263911619</li>
            <li>📞 +91 1234567890</li>
            <li>📧 excellup.hub@gmail.com</li>
            <li>📍 Balaghat, MP</li>
          </ul>
        </div>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-10"
      >
        <img className="w-36" src={logosvg} alt="Excellup Logo" />
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-4 gap-6 text-2xl text-white"
      >
        <a
          href="https://youtube.com/@excellup_hub?si=HxFhFR3Dr6ql5Tzd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/excellup_?igsh=YWw0MzhzbHpkaW1p"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/excellup-hub-393700360?"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border-t mt-8 pt-4 text-center text-sm text-gray-300"
      >
        <p className="text-lg">© 2025 EXCELLUP</p>
        <p className="text-sm">All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
