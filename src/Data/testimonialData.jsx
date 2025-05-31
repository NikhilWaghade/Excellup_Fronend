import React from "react";
import { FaHtml5, FaCss3Alt,  FaJs, FaReact,  FaNodeJs,  FaGithub,  FaCode,  FaRocket,  FaUsers, FaBrain, FaVideo, FaShieldAlt,} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

// Testimonials data
export const testimonials = [
  {
    name: "Arjun Sarkar",
    title: "MERN Stack",
    review:
      "It was a great learning experience. My trainer delivered each session well. All topics were explained with in-depth theory, real-time examples, and execution of the same in Python. The teaching methodology enhanced the learning process.",
    img: "https://img.freepik.com/premium-psd/happy-young-college-student-smiling-looking-into-camera-isolated-background_920413-2675.jpg?ga=GA1.1.924705394.1747313358&w=740",
  },
  {
    name: "Kabir Singh",
    title: "Programing",
    review:
      "The faculty was extremely knowledgeable, and the entire class appreciated his way of teaching. Enjoyed learning from Harshil Sir. He makes all the topics easy to understand and learn by real-life examples.",
    img: "https://img.freepik.com/free-photo/young-male-student-with-modern-laptop-color-background_231208-14335.jpg?ga=GA1.1.924705394.1747313358&w=740",
  },
  {
    name: "Riya Sharma",
    title: "Web Devlopment",
    review:
      'Very well done, and easy to follow if you are a real beginner. The syllabus is well structured, the teacher is a very good presenter. The course "data science with python" starts with explaining all the key terms a beginner needs to understand and illustrates them with multiple examples which help to remember them.',
    img: "https://img.freepik.com/free-photo/young-woman-with-backpack-walking-through-green-park-with-silver-laptop-hands_231208-8084.jpg?ga=GA1.1.924705394.1747313358&w=740",
  },
  {
    name: "Neha Patel ",
    title: "Video Editing",
    review:
      "Perfect for beginner level. Concepts with code and practical-wise have been explained well. Overall best course in making you eager to learn from basics to advances with ease.",
    img: "https://img.freepik.com/free-photo/young-woman-holding-laptop-sitting-floor-beige-wall_176420-2690.jpg?ga=GA1.1.924705394.1747313358&semt=ais_hybrid&w=740",
  },
    {
    name: "Shubham Verma",
    title: "DSA & Algorithms",
    review:
      'Very well done, and easy to follow if you are a real beginner. The syllabus is well structured, the teacher is a very good presenter. The course "data science with python" starts with explaining all the key terms a beginner needs to understand and illustrates them with multiple examples which help to remember them.',
    img: "https://img.freepik.com/free-photo/young-smiling-man-working-with-laptop-office_1268-21465.jpg?ga=GA1.1.924705394.1747313358&w=740",
  },
];

// Technologies data
export const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Express", icon: <SiExpress className="text-green-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-950" /> },
];

// Features data
export const features = [
  {
    title: "Hands-On Coding Challenges",
    description:
      "Practice coding with real-time feedback and hands-on challenges to test your skills.",
    icon: <FaCode className="text-blue-600 text-3xl" />,
  },
  {
    title: "Build Real-World Projects",
    description:
      "Gain practical experience by building projects that will impress future employers and enhance your portfolio.",
    icon: <FaRocket className="text-red-600 text-3xl" />,
  },
  {
    title: "Collaborative Developer Community",
    description:
      "Connect with passionate developers, share knowledge, and collaborate on projects for mutual growth.",
    icon: <FaUsers className="text-green-600 text-3xl" />,
  },
  {
    title: "Skill-Building Exercises",
    description:
      "Sharpen your skills with curated exercises, quizzes, and challenges designed to push your limits.",
    icon: <FaBrain className="text-purple-600 text-3xl" />,
  },
  {
    title: "Expert-Led Video Tutorials",
    description:
      "Learn from industry experts through high-quality video tutorials that break down complex topics.",
    icon: <FaVideo className="text-yellow-600 text-3xl" />,
  },
  {
    title: "Safe & Secure Learning",
    description:
      "Your progress and personal data are safeguarded with the highest level of security and privacy.",
    icon: <FaShieldAlt className="text-pink-600 text-3xl" />,
  },
];

export default { testimonials, technologies, features };
