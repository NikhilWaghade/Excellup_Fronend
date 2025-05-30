import React from "react";
import { Link } from "react-router-dom";
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
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <img
                  src={course.bannerImage}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 text-[#7a56d6] px-3 py-1 rounded-full text-sm font-medium font-inter">
                    {course.category}
                  </span>
                  <span className="bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-sm font-medium font-inter">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    {course.rating}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900 font-outfit">
                    {course.title}
                  </h2>
                  {course.icon}
                </div>

                <p className="text-sm text-gray-600 font-inter">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-[#7a56d6]/10 text-[#7a56d6] px-3 py-1 rounded-full text-xs font-inter"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-4 border-t">
                  <div className="flex gap-2 items-center">
                    <FaClock className="text-[#7a56d6] w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaCodeBranch className="text-[#7a56d6] w-4 h-4" />
                    {course.projects}
                  </div>
                </div>

                <Link
                  to={`/courses/${course.slug}`}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium font-outfit bg-[#7a56d6] text-white rounded-full hover:bg-[#7a56d6]/90 transition"
                >
                  View Details
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
