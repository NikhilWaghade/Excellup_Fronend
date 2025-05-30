import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import courses from "../../Data/courseData.js";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses[slug];

  // Handle course not found
  if (!course)
    return (
      <div className="text-black p-10 text-center text-2xl font-semibold">
        Course not found
      </div>
    );

  // Accordion open state for syllabus
  const [openIndex, setOpenIndex] = useState(null);
  const toggleSyllabus = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Course Info + Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black space-y-6 md:mt-16"
          >
            <h1 className="text-4xl font-bold text-[#7a56d6]">{course.title}</h1>
            <p>{course.description}</p>
            <div className="text-lg font-semibold mb-4">
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
            className="flex justify-center md:mt-16"
          >
            <iframe
              width="560"
              height="315"
              src={course.videoLink}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="my-16">
          <h2 className="text-3xl text-[#7a56d6] font-bold text-center mb-6">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {course.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-6 rounded-xl shadow-xl text-center"
              >
                <h3 className="text-2xl font-semibold text-[#7a56d6] mb-4">
                  {project.title}
                </h3>

                <div className="w-full">
                  <Link
                    to={`/project/${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <img
                      src={project.imageLink}
                      alt={project.title}
                      className="w-full h-72 object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-200"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ / Syllabus Accordion */}
        <motion.div
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
                      <FaChevronUp className="inline-block" />
                    ) : (
                      <FaChevronDown className="inline-block" />
                    )}
                  </span>
                </div>
                {openIndex === idx && <p className="text-black mt-2">{item}</p>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enroll Button */}
        <div className="text-center mt-8">
          <Link
            to="/enroll"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
