// testimonials.jsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaRocket,
  FaUsers,
  FaBrain,
  FaVideo,
  FaShieldAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

// Testimonials data
export const testimonials = [
  {
    name: "Rohit Sharma",
    title: "Data Science",
    review:
      "It was a great learning experience. My trainer delivered each session well. All topics were explained with in-depth theory, real-time examples, and execution of the same in Python. The teaching methodology enhanced the learning process.",
    img: "https://img.icons8.com/3d-fluency/94/user-male-circle.png",
  },
  {
    name: "Virat Kohli",
    title: "Data Science",
    review:
      "The faculty was extremely knowledgeable, and the entire class appreciated his way of teaching. Enjoyed learning from Harshil Sir. He makes all the topics easy to understand and learn by real-life examples.",
    img: "https://img.icons8.com/3d-fluency/94/user-male-circle.png",
  },
  {
    name: "Mahendra Sing Dhoni",
    title: "Data Science",
    review:
      'Very well done, and easy to follow if you are a real beginner. The syllabus is well structured, the teacher is a very good presenter. The course "data science with python" starts with explaining all the key terms a beginner needs to understand and illustrates them with multiple examples which help to remember them.',
    img: "https://img.icons8.com/3d-fluency/94/user-female-circle.png",
  },
  {
    name: "Hardik Padiya",
    title: "Data Science",
    review:
      "Perfect for beginner level. Concepts with code and practical-wise have been explained well. Overall best course in making you eager to learn from basics to advances with ease.",
    img: "https://img.icons8.com/3d-fluency/94/user-male-circle.png",
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
    icon: <FaCode className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Build Real-World Projects",
    description:
      "Gain practical experience by building projects that will impress future employers and enhance your portfolio.",
    icon: <FaRocket className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Collaborative Developer Community",
    description:
      "Connect with passionate developers, share knowledge, and collaborate on projects for mutual growth.",
    icon: <FaUsers className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Skill-Building Exercises",
    description:
      "Sharpen your skills with curated exercises, quizzes, and challenges designed to push your limits.",
    icon: <FaBrain className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Expert-Led Video Tutorials",
    description:
      "Learn from industry experts through high-quality video tutorials that break down complex topics.",
    icon: <FaVideo className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Safe & Secure Learning",
    description:
      "Your progress and personal data are safeguarded with the highest level of security and privacy.",
    icon: <FaShieldAlt className="text-yellow-400 text-3xl" />,
  },
];

export default { testimonials, technologies, features };
