import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import courses from "../../Data/courseData.js";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses[slug];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleSyllabus = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment form submitted!");
    // Here you would normally send this to a backend or API
  };

  if (!course) {
    return (
      <div className="text-black p-10 text-center text-2xl font-semibold">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title + Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black space-y-6 md:mt-16"
          >
            <h1 className="text-4xl font-bold text-[#7a56d6]">{course.title}</h1>
            <p className="text-lg">{course.description}</p>
            <div className="text-xl font-semibold">
              <span className="line-through text-yellow-500 mr-4">
                {course.fee}
              </span>
              <span className="text-red-400">{course.discount}</span>
            </div>
            <div>
              <span className="font-semibold">Duration:</span> {course.duration}
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }} 
  className="flex justify-center md:mt-16 h-96"
>
  <img
    src={course.headimageLink}
    alt={course.title}
    className="rounded-lg shadow-lg w-full max-w-xl object-cover "
  />
</motion.div>

        </div>

        {/* Projects */}
        {/* <div className="my-16">
          <h2 className="text-3xl text-[#7a56d6] font-bold text-center mb-6">
            Projects You'll Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {course.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-xl text-center"
              >
                <h3 className="text-2xl font-semibold text-[#7a56d6] mb-4">
                  {project.title}
                </h3>

                <Link
                  to={`/project/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <img
                    src={project.imageLink}
                    alt={project.title}
                    className="w-full h-72 object-cover rounded-lg hover:opacity-90 transition duration-200"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        {/* Syllabus Accordion */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="my-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl text-[#7a56d6] font-bold text-center mb-6">
            Course Syllabus
          </h2>
          <div className="space-y-4">
            {course.syllabus.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-4 rounded-lg cursor-pointer transition duration-300"
                onClick={() => toggleSyllabus(idx)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#7a56d6]">
                    Lesson {idx + 1}
                  </h3>
                  <span className="text-yellow-400">
                    {openIndex === idx ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                {openIndex === idx && (
                  <p className="text-black mt-2">{item}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Enrollment Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto mt-16">
          <h2 className="text-3xl text-[#7a56d6] font-bold text-center mb-6">
            Enroll Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Your Message (optional)"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#7a56d6] hover:bg-[#9071df] text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Enroll Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
