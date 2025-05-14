import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaWordpress,
  FaLaptopCode,
  FaServer,
  FaHtml5,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const courses = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    icon: <FaHtml5 className="text-4xl text-yellow-400" />,
    description: "HTML, CSS, JavaScript, React & UI/UX fundamentals.",
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    icon: <FaServer className="text-4xl text-yellow-400" />,
    description: "Node.js, Express, MongoDB & RESTful APIs.",
  },
  {
    slug: "full-stack-web",
    title: "Full Stack Web Development",
    icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
    description: "Frontend + Backend full-stack development with projects.",
  },
  {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals",
    icon: <FaCode className="text-4xl text-yellow-400" />,
    description: "C, C++, Python, Java with real practice.",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    icon: <FaWordpress className="text-4xl text-yellow-400" />,
    description: "No-code website development with WordPress.",
  },
  {
    slug: "dsa",
    title: "Data Structures & Algorithms",
    icon: <FaDatabase className="text-4xl text-yellow-400" />,
    description: "Master DSA and crack coding interviews.",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-white from-black via-[#1a0033] to-black text-black px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-yellow-400">Courses</span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:ring-2 hover:ring-[#7a56d6] transition-all"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-[#7a56d6] mb-2">{course.title}</h3>
              <p className="text-black text-sm mb-4">{course.description}</p>
              <Link
                to={`/courses/${course.slug}`}
                className= "  inline-block mt-2 bg-yellow-400 text-black font-semibold py-1 px-4 rounded hover:bg-[#7a56d6] transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
