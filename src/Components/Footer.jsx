import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Courses", href: "/courses" },
      { name: "Business Services", href: "/business-services" },
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
    ],
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Content Creation", href: "/services/content" },
      { name: "Business Solutions", href: "/services/business" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 justify-items-center sm:justify-items-start gap-6 sm:gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2 flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <img
              src="/assets/images/linear-light.svg"
              alt="excellup"
              className="w-52 mb-4"
            />
            <p className="text-gray-600 font-outfit mb-6 max-w-sm text-center sm:text-left">
              Empowering individuals and businesses with cutting-edge technology
              education and digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F] text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="hidden xl:block"></div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-outfit font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 font-outfit hover:text-[#7a56d6]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-[#7a56d6]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="text-gray-900 font-semibold font-outfit mb-4">
              Contact us
            </h3>
            <ul className="space-y-2 font-outfit text-sm sm:text-base">
              <li className="flex items-start text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-1" />
                123 Tech Park, Sector 15
                <br className="hidden sm:block" /> Noida, UP 201301
              </li>
              <li className="flex items-center text-gray-600">
                <FaPhone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </li>
              <li className="flex items-center text-gray-600">
                <FaEnvelope className="w-4 h-4 mr-2" />
                contact@excellup.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-white font-outfit font-medium">
            Copyright &copy; {new Date().getFullYear()} Excellup. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
