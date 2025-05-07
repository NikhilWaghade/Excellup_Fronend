import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#1a0033] to-black bg-[length:200%_200%] animate-gradient-x text-white px-6 md:px-20 py-10 -mt-[0.99em]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="src\assets\Images\logobgremove.png"
              alt="logo"
              className="w-24 h-24"
            />
            <span className="text-gray-300">
              Let's connect with our socials
            </span>
          </div>
          <div className="flex gap-4 text-xl text-white">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">COMPANY</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Condition</a>
            </li>
            <li>
              <a href="#">Pricing and Refund</a>
            </li>
            <li>
              <a href="#">Hire From Us</a>
            </li>
          </ul>
        </div>

        {/* Community Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">COMMUNITY</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#">Inertia</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-3">Get In Touch</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>+91 6263911619</li>
            <li>+91 1234567890</li>
            <li>excellup.hub@.com</li>
            <li>Balaghat</li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400"
      >
        <p>Copyright © 2025 Excellup Pvt. Ltd.</p>
        <p>All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
