import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaServer,
  FaLaptopCode,
  FaCode,
  FaWordpress,
  FaDatabase,
  FaStar,
  FaClock,
  FaCodeBranch,
  FaArrowRight,
} from "react-icons/fa";

// Original course data, enhanced with images and features
const courses = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    icon: <FaHtml5 className="w-6 h-6 text-[#7a56d6]" />,
    description: "HTML, CSS, JavaScript, React & UI/UX fundamentals.",
    category: "Frontend",
    duration: "4 Months",
    projects: "3+ Projects",
    rating: 4.7,
    bannerImage:
      "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJvbnRlbmR8ZW58MHx8MHx8fDA%3D",
    features: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    icon: <FaServer className="w-6 h-6 text-[#7a56d6]" />,
    description: "Node.js, Express, MongoDB & RESTful APIs.",
    category: "Backend",
    duration: "4 Months",
    projects: "3+ Projects",
    rating: 4.6,
    bannerImage:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2VuZHxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Node.js", "Express", "MongoDB", "API"],
  },
  {
    slug: "full-stack-web",
    title: "Full Stack Web Development",
    icon: <FaLaptopCode className="w-6 h-6 text-[#7a56d6]" />,
    description:
      "Frontend + Backend full-stack development with real projects.",
    category: "Full Stack",
    duration: "6 Months",
    projects: "6+ Projects",
    rating: 4.9,
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    features: ["Frontend", "Backend", "MongoDB", "React", "Node.js"],
  },
  {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals",
    icon: <FaCode className="w-6 h-6 text-[#7a56d6]" />,
    description: "C, C++, Python, Java with real problem solving practice.",
    category: "Programming",
    duration: "3 Months",
    projects: "100+ Problems",
    rating: 4.8,
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1661872817492-fd0c30404d74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJvZ3JhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    features: ["C", "C++", "Python", "Java"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    icon: <FaWordpress className="w-6 h-6 text-[#7a56d6]" />,
    description: "No-code website development using WordPress CMS.",
    category: "No-Code",
    duration: "2 Months",
    projects: "2+ Sites",
    rating: 4.5,
    bannerImage:
      "https://images.unsplash.com/photo-1678341859828-bfb1a2bd527a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29yZHByZXNzfGVufDB8fDB8fHww",
    features: ["WordPress", "Themes", "Plugins", "SEO"],
  },
  {
    slug: "dsa",
    title: "Data Structures & Algorithms",
    icon: <FaDatabase className="w-6 h-6 text-[#7a56d6]" />,
    description: "Master DSA and crack coding interviews.",
    category: "DSA",
    duration: "5 Months",
    projects: "200+ Problems",
    rating: 4.9,
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1681810994162-43dbe0919d3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhdGElMjBzdHJ1Y3R1cmUlMjBhbmQlMjBhbGdvcml0aGFtfGVufDB8fDB8fHww",
    features: ["Arrays", "Trees", "Graphs", "Recursion", "DP"],
  },
];

const Courses = () => {
  return (
    <section className="w-full py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mt-10 ">
            Our <span className="text-[#7a56d6]">Courses</span>
          </h1>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto mt-2">
            Learn the most in-demand skills with hands-on real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-red-5 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
                >
                  <div className="relative h-48">
                    <img
                      src={course.bannerImage}
                      alt={`${course.title} - ${course.description}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-inter bg-white/90 text-[#7a56d6] font-medium">
                        {course.category}
                      </span>
                      <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                        <FaStar className="text-yellow-400 w-4 h-4" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold font-outfit text-gray-900">
                          {course.title}
                        </h3>
                        <div className="text-[#7a56d6]">{course.icon}</div>
                      </div>

                      <p className="text-gray-600 text-sm font-inter">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-inter bg-[#7a56d6]/10 text-[#7a56d6]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 flex flex-col sm:flex-row justify-between">
                      <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t">
                        <div className="flex justify-between w-full items-center gap-4">
                          <div className="flex items-center gap-1">
                            <FaClock className="text-[#7a56d6] w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCode className="text-[#7a56d6] w-4 h-4" />
                            <span>{course.projects}</span>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <Link
                           to={`/courses/${course.slug}`}
                          className="inline-flex items-center bg-brand text-white px-4 py-2.5 sm:py-1.5 rounded-full font-medium w-full sm:w-auto justify-center font-outfit border border-brand hover:bg-white hover:text-brand"
                        >
                          Enroll Now
                          <FaArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
