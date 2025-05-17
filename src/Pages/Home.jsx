import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { testimonials, features, technologies } from "/src/Data/testimonialData.jsx";
import logo from '../assets/Images/logo.png'
import { Users, Laptop, Rocket, Code2, MonitorSmartphone, TrendingUp, Video, Globe, Activity, Calendar } from 'lucide-react';
import { FaBookOpen, FaChalkboardTeacher, FaCheckCircle, FaCode, FaCogs, FaEnvelope, FaGlobe, FaHandshake, FaInstagram, FaLaptopCode, FaMapMarkerAlt, FaPaintBrush, FaPhoneAlt, FaRocket, FaStore, FaSuitcase, FaTimesCircle, FaUserGraduate, FaUsers, FaVideo, FaYoutube } from "react-icons/fa";
import emailjs from "emailjs-com";



export default function HomePage() {

const [text] = useTypewriter({
  words: [
    "Master the Future",
    "Learn New Tech Skills",
    "Empower Your Coding Journey",
    "Unlock Limitless Opportunities",
  ],
  loop: true,
  delaySpeed: 2000,
});

  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), 3000); // 3 sec delay
    return () => clearTimeout(timer);
  }, []);

  // services 
const combinedItems = [
 
  {
    icon: <Code2 className="w-10 h-10 text-blue-600" />,
    label: "Tech Education",
    description: "Learn coding from basics to real-world projects.",
    image: "/images/coding-education.jpg",//optional but not use this time dummy path
  },
  {
    icon: <Video className="w-10 h-10 text-red-600" />,
    label: "Content Creation",
    description: "Engaging tech tutorials, productivity hacks, and programming reels.",
    image: "/images/digital-services.jpg",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    label: "Digital Services",
    description: "Websites, reels, and social media management for local businesses.",
    image: "/images/brand-growth.jpg",
  },

  // From gridItems
  {
    icon: <Code2 className="w-10 h-10 text-purple-600" />,
    label: "Tech Bootcamps",
    description: "Hands-on offline training in Web Development, Editing, Design & more.",
  },
  {
    icon: <Video className="w-10 h-10 text-pink-600" />,
    label: "Content Creation",
    description: "Workshops and services for creators who want to grow with storytelling.",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    label: "Digital Services",
    description: "For small brands and businesses — branding, social media, and websites.",
  },
  {
    icon: <Activity className="w-10 h-10 text-red-600" />,
    label: "Real Projects",
    description: "Build portfolios that matter, not just certifications.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-yellow-600" />,
    label: "Offline Events",
    description: "Seminars, collabs, and face-to-face sessions that spark growth.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    label: "Community Support",
    description: "A tribe of learners, mentors, and makers growing together.",
  },
];

// Features 
const works = [
  {
    icon: <FaGlobe size={24} />,
    title: "🌐 Global & Local Website",
    description:
      "A responsive website designed for a hometown bakery, featuring online orders, gallery, and real-time offers. Built with React, Tailwind CSS, and Firebase.",
    link: "#",
    linkText: "View Live",
  },
  {
    icon: <FaInstagram size={24} />,
    title: "🎬 Instagram Tech Reel",
    description:
      "A fast-paced, high-impact reel educating students on how algorithms power modern apps. Created using CapCut and Adobe Premiere Pro.",
    link: "#",
    linkText: "Watch Reel",
  },
{
  icon: <FaLaptopCode size={24} />,
  title: "💻 C Programming Crash Course",
  description:
    "A beginner-friendly crash course video covering the fundamentals of C Programming — variables, loops, functions, and real coding examples.",
  link: "#",
  linkText: "Watch on YouTube",
},
  {
    icon: <FaPaintBrush size={24} />,
    title: "🖼️ Business Promo Poster",
    description:
      "A clean, vibrant promotional poster designed for a tech startup, combining strategic layout, bold visuals, and AI-generated slogans.",
    link: "#",
    linkText: "View Sample",
  },
  {
  icon: <FaCode size={24} />, 
  title: "🌐 Web Development Bootcamp",
  description:
    "An immersive bootcamp-style video series covering HTML, CSS, JavaScript, and React with real-world projects and deployment tips.",
  link: "#",
  linkText: "Explore Course",
},
{
  icon: <FaVideo size={24} />, 
  title: "🎥 Video Editing Masterclass",
  description:
    "Learn professional video editing techniques using CapCut and Adobe Premiere Pro — perfect for content creators and social media managers.",
  link: "#",
  linkText: "Watch Masterclass",
}
];


// wo is help 
const whoWeHelpData = [
  {
    icon: <FaUserGraduate size={28} />,
    title: "Students & Beginners",
    description:
      "Just starting out? We offer structured coding lessons, hands-on projects, and friendly mentorship to help you build skills with confidence — from C to full-stack development.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Aspiring Creators & Developers",
    description:
      "Already coding? Stay ahead with the latest tech trends, real-world challenges, project showcases, and practical career-building resources to level up your journey.",
  },
  {
    icon: <FaStore size={28} />,
    title: "Local Business Owners",
    description:
      "Need a modern website, social media reel, or digital brand boost? We help turn your business ideas into engaging online experiences — fast, affordable, and effective.",
  },
  {
    icon: <FaChalkboardTeacher size={28} />,
    title: "Parents & Educators",
    description:
      "Want to support your child’s tech future or enhance your teaching methods? We provide resources, workshops, and personalized guidance to help you guide the next generation.",
  },
  {
    icon: <FaSuitcase size={28} />,
    title: "Freelancers & Career Changers",
    description:
      "Thinking of switching to tech or launching a freelance career? EXCELLUP provides a launchpad with flexible learning, portfolio help, and client-ready tools.",
  },
];

const iconColors = [
  "bg-blue-100 text-blue-600",
  "bg-red-100 text-red-600",
  "bg-green-100 text-green-600",
  "bg-yellow-100 text-yellow-600",
  "bg-purple-100 text-purple-600",
];



// contact 
const formRef = useRef();
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(1);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q4h1fwd",
        "template_0krema4",
        formRef.current,
        "e2m9r4Gb8s8U3p-LM"
      )
      .then(
        () => {
          setFeedback({ message: "Message sent successfully!", type: "success" });
          formRef.current.reset();
          setCountdown(1);
          setShowPopup(true);
        },
        (error) => {
          console.error(error.text);
          setFeedback({ message: "Failed to send. Please try again.", type: "error" });
          setCountdown(1);
          setShowPopup(true);
        }
      );
  };

  // Auto-close after countdown
  useEffect(() => {
    if (!showPopup) return;
    if (countdown <= 0) {
      setShowPopup(false);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showPopup, countdown]);


  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white text-black p-6 md:p-12 -mt-20">
      {/* Hero Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mx-auto items-center pt-16 md:pt-32 px-4 md:px-8">
    {/* Left side content with typewriter */}
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-white space-y-8"
    >
      <h1 className="text-xl md:text-4xl font-extrabold leading-tight">
        <span className="text-[#7a56d6] mt-20 text-4xl">{text}</span>
        <Cursor cursorStyle="|" />
        <br />
        <span className="text-black text-2xl ">Build Your Future with Emerging Tech</span>
      </h1>

      <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl font-inter ">
        "Level up your coding skills with our cutting-edge education platform.
        Learn from industry leaders, build real-world projects, and join a thriving
        community of passionate developers."
      </p>

      <div className="flex flex-wrap gap-4 z-10">
        <Link to="/courses">
          <button className="bg-[#7a56d6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition flex items-center shadow-lg">
            🚀 Start Learning
          </button>
        </Link>

        <a
          href="https://youtu.be/ToZSFHUJdHM?si=qCJqiWzIAGUME63x"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#7a56d6] flex items-center shadow-lg"
        >
          ▶️ Watch Demo
        </a>
      </div>
    </motion.div>

    {/* Right side image section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex justify-center"
    >
      <motion.img
        src={logo}
        alt="Coding Students"
        className="rounded-3xl w-full max-w-md md:max-w-lg z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  </div>

      {/* Technologies Icons Section */}
         <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full mt-16 flex flex-col items-center justify-center gap-6 overflow-hidden"
    >
      <div className="text-[#7a56d6] text-2xl md:text-2xl font-bold md:mt-32">
        Trusted by Leading Technologies Worldwide
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          className="flex gap-12 w-max will-change-transform"
          animate={startAnim ? { x: ["0%", "-50%"] } : { x: "0%" }}
          transition={
            startAnim
              ? {
                  duration: 30, // Faster speed
                  repeat: Infinity,
                  ease: "linear",
                }
              : {}
          }
        >
          {/* Two sets for perfect seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="w-24 md:w-28 h-28 md:h-32 flex-shrink-0 flex flex-col items-center justify-center text-4xl bg-white rounded-xl  will-change-transform"
              animate={
                startAnim
                  ? { y: [0, -10, 0] }
                  : { y: 0 }
              }
              transition={
                startAnim
                  ? {
                      duration: 2,
                      delay: (index % technologies.length) * 0.1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }
                  : {}
              }
            >
              {tech.icon}
              <span className="text-lg mt-2 text-black text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  
    {/* About section  */}
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20" id="about-us">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-4xl font-bold text-[#7a56d6] mb-6">Who We Are</h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
      We’re a passionate team of innovators, developers, and tech educators from <strong>Balaghat, Madhya Pradesh</strong> — building <span className="text-blue-600 font-semibold">EXCELLUP</span> as a vibrant platform to democratize programming skills, ignite digital creativity, and empower individuals and businesses to thrive in a tech-driven world.
    </p>
  </motion.div>

  {/* Animated Cards Section */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
  >
    {/* Card 1 */}
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-[#7a56d6]"
      animate={{ y: [0, -6, 0] }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <div className="p-4 rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
        <Laptop className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Tech Education</h3>
      <p className="text-gray-600 text-sm">
        Make tech education fun, local, and practical for students and learners in every corner of India.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-[#7a56d6]"
      animate={{ y: [0, -6, 0] }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 0.2,
      }}
    >
      <div className="p-4 rounded-full bg-green-100 text-green-600 text-2xl mb-4">
        <Rocket className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Digital Empowerment</h3>
      <p className="text-gray-600 text-sm">
        Help local brands go digital with websites, videos, and online marketing tools.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-[#7a56d6]"
      animate={{ y: [0, -6, 0] }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 0.4,
      }}
    >
      <div className="p-4 rounded-full bg-purple-100 text-purple-600 text-2xl mb-4">
        <Users className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Creator-Led Brand</h3>
      <p className="text-gray-600 text-sm">
        Build a strong creator-led tech brand shaping India’s digital future from the ground up.
      </p>
    </motion.div>
  </motion.div>

  {/* Optional Image Section */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="mt-16 text-center"
  >
    <img
      src="https://img.freepik.com/premium-photo/team-celebrating-project-success_1265500-96079.jpg?ga=GA1.1.924705394.1747313358&semt=ais_hybrid&w=740"
      alt="Team EXCELLUP"
      className="rounded-2xl mx-auto shadow-lg w-full max-w-4xl"
    />
  </motion.div>
</section>


    {/* What We DoSection */}
    <motion.section
  id="what-we-do"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="bg-white py-20 px-4 md:px-10 lg:px-20 mt-5"
>
  <div className="max-w-5xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-[#7a56d6] mb-4">
      What We Do at EXCELLUP
    </h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-3 whitespace-pre-line">
      At <span className="text-blue-600 font-semibold">EXCELLUP</span>, we fuse
      cutting-edge technology, purposeful design, and modern education to craft
      impactful digital experiences that empower learners, creators, and
      forward-thinking businesses. From foundational coding skills to real-world
      project building, we aim to nurture future-ready talent, share insightful
      tech knowledge, and support digital growth with innovation at the core.
    </p>
    <p className="text-sm text-gray-500 italic">
      Based in <strong>Balaghat, Madhya Pradesh</strong>, we're building a
      community where education meets technology to shape tomorrow’s digital
      leaders.
    </p>
  </div>

  <motion.div
    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    {combinedItems.map((item, index) => {
      const iconStyle = iconColors[index % iconColors.length]; // same as in your work section
      return (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-[#7a56d6]"
          animate={{ y: [0, -6, 0] }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <div className={`p-4 rounded-full mb-4 text-2xl ${iconStyle}`}>
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            {item.label}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          <div>{item.image}</div>
        </motion.div>
      );
    })}
  </motion.div>
</motion.section>


    {/* Featured  */}
 <motion.section
  id="our-work"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="bg-white py-20 px-4 md:px-10 lg:px-20 mt-5"
>
  <div className="max-w-5xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-[#7a56d6] mb-4">Our Work Speaks</h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
      From real-world projects to digital experiments, our work blends creativity, technology, and purpose.  
      We transform ideas into meaningful digital experiences — for learners, local businesses, and global audiences.
    </p>
    <p className="text-sm text-gray-500 mt-2 italic">
      From classroom concepts to client-ready deliverables — we take pride in what we build.
    </p>
  </div>

  <motion.div
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    {works.map((work, idx) => {
      const iconStyle = iconColors[idx % iconColors.length];
      return (
        <motion.div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-[#7a56d6]"
          animate={{ y: [0, -6, 0] }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: idx * 0.2,
          }}
        >
          <div className={`p-4 rounded-full mb-4 text-2xl ${iconStyle}`}>
            {work.icon}
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">{work.title}</h3>
          <p className="text-gray-600 mb-3 text-sm">{work.description}</p>
          <a href={work.link} className="text-blue-600 underline text-sm">
            {work.linkText}
          </a>
        </motion.div>
      );
    })}
  </motion.div>
</motion.section>


    {/* Who We Help */}
    <motion.section
      id="who-we-help"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="py-20 px-4 md:px-10 lg:px-20 mt-5"
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-[#7a56d6] mb-4">
          Who Is <span className="text-black">EXCELLUP</span> For?
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          We empower diverse learners and clients — from curious coders to growing businesses — to succeed in the digital world. Whether you’re starting out or scaling up, EXCELLUP is your tech partner.
        </p>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {whoWeHelpData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-[#7a56d6]"
            animate={{ y: [0, -6, 0] }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
          >
            <div className={`p-4 rounded-full mb-4 text-2xl ${iconColors[idx % iconColors.length]}`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>


      {/* Why Choose Our Platform Section */}
    <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="w-full py-20 text-white text-center mt-16"
>
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
    Why Choose <span className="text-[#7a56d6]">EXCELLUP ?</span>
  </h2>
  <p className="text-black max-w-3xl mx-auto mb-12">
    Choose EXCELLUP for a transformative coding experience — where expert guidance, interactive learning, and real-world tech skills come together to help you grow, create, and succeed.
  </p>

  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    {features.map((feature, idx) => {
      const bgColors = ['bg-blue-100 text-blue-600', 'bg-red-100 text-red-600', 'bg-green-100 text-green-600'];
      const iconStyle = bgColors[idx % 3];

      return (
        <motion.div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-lg hover:ring-2 hover:ring-[#7a56d6]"
          animate={{ y: [0, -6, 0] }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: idx * 0.2,
          }}
        >
          <div className={`p-4 rounded-full mb-4 text-2xl ${iconStyle}`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </motion.div>
      );
    })}
  </motion.div>
</motion.div>
     
     {/* Testimonials Section */}
  <section className=" py-20 px-6 md:px-16 lg:px-24" id="testimonials">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold text-[#7a56d6] mb-6">Hear From Our Community</h2>
    <p className="text-gray-700 max-w-xl mx-auto mb-6">
      At EXCELLUP, we’re proud to support learners and creators from all walks of life.  
      Our mission is to empower you with skills, confidence, and real-world experience — and soon, you’ll hear directly from those who’ve walked this path.
    </p>
    <p className="text-gray-600 max-w-lg mx-auto italic">
      Whether you’re just starting out or scaling your expertise, EXCELLUP is here to guide you every step of the way.
    </p>
  </div>

  {/* Testimonial with image */}
  <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center text-gray-500 italic">
    <img 
      src="https://randomuser.me/api/portraits/women/68.jpg" 
      alt="User avatar" 
      className="w-24 h-24 rounded-full mb-6 md:mb-0 md:mr-8 object-cover shadow-md"
    />
    <div>
      <p className="mb-6 text-lg leading-relaxed">
        “Learning to code can be intimidating — but at EXCELLUP, it feels achievable and exciting.  
        The hands-on projects and supportive community make all the difference.  
        I can’t wait to share my journey here with others soon!”
      </p>
      <span className="block font-semibold text-gray-700">– Future EXCELLUP Learner</span>
    </div>
  </div>

 {/* add mor student testimonial  */}
  {/* <p className="mt-12 text-center text-gray-500 text-sm">
    (Testimonials coming soon — stay tuned as we grow together!)
  </p> */}
</section>

     {/* final call action section */}    
<section className="py-20 px-6 md:px-16 text-center max-w-4xl mx-auto">
  <h2 className="text-4xl font-extrabold mb-6 text-[#7a56d6]">
    Ready to <span className=" ">Start Your Journey  ?</span>
  </h2>

  <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
    You don’t need a fancy degree to build the future you want.  
    All it takes is the right people by your side, the right skills in your toolkit, and a growth mindset ready to tackle any challenge.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
    <button className="flex items-center gap-3 border-2 border-green-600 font-semibold px-6  rounded-full shadow-sm hover:bg-[#7a56d6] hover:text-white transition">
      <FaRocket className="text-xl" /> Apply to Bootcamp
    </button>

    <Link to="/courses" className="flex items-center justify-center gap-3 border-2 border-green-600 font-semibold px-6  rounded-full shadow-sm hover:bg-[#7a56d6] hover:text-white transition">
      <FaBookOpen className="text-xl" /> Start Learning Now
    </Link>

    <Link to="/services" className="flex items-center justify-center gap-3 border-2 border-green-600 font-semibold px-6  rounded-full shadow-sm hover:bg-[#7a56d6] hover:text-white transition">
      <FaCogs className="text-xl" /> Explore Our Services
    </Link>
  </div>
</section>
      
      {/* Contact Section */}
   <div className="min-h-screen bg-white from-black via-[#1a0033] to-black text-white px-4 py-16 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#7a56d6] mb-4">Get in Touch</h2>
          <p className="text-black">
            We’d love to hear from you. Fill out the form or contact us directly below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#7a56d6] text-xl" />
              <span className="text-black">+91 6263911619</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#7a56d6] text-xl" />
              <span className="text-black">+91 7999786513</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#7a56d6] text-xl" />
              <span className="text-black"> excellup.hub@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#7a56d6] cla text-xl" />
              <span className="text-black">Balaghat, Madhya Pradesh, India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-[#7a56d6] mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-black border border-gray-500  placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#7a56d6] mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-black border border-gray-500 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#7a56d6] mb-1">Message</label>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-white/20 text-black border border-gray-500 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7a56d6] text-black py-3 rounded-lg font-semibold hover:bg-purple-600 transition shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Feedback Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`
                bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl max-w-sm mx-4 border-2 text-center
                ${feedback.type === "success" ? "border-green-500" : "border-red-500"}
              `}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {feedback.type === "success" ? (
                <FaCheckCircle className="text-green-400 text-3xl mx-auto mb-2" />
              ) : (
                <FaTimesCircle className="text-red-400 text-3xl mx-auto mb-2" />
              )}
              <p className="text-white text-lg mb-4">{feedback.message}</p>
              {/* Progress Bar */}
              <div className="h-1 bg-white/40 rounded-full overflow-hidden">
                <motion.div
                  className={`${feedback.type === "success" ? "bg-green-400" : "bg-red-400"}`}
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 1, ease: "linear" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

     {/* Follow Us Section */}
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="w-full mt-24 flex flex-col items-center justify-center gap-8 overflow-hidden"
>
  <div className="text-[#7a56d6] text-2xl md:text-3xl font-bold">
    Follow Us 
  </div>

  {/* Social Icons Section with Smooth Looping Animation */}
  <div className="relative w-full overflow-hidden py-6">
    <motion.div
      className="flex gap-16 justify-center flex-wrap w-full will-change-transform"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {[
        {
          name: "YouTube",
          src: "https://img.icons8.com/3d-fluency/94/youtube-play.png",
          link: "https://youtube.com/@excellup_hub?si=HxFhFR3Dr6ql5Tzd",
        },
        {
          name: "LinkedIn",
          src: "https://img.icons8.com/3d-fluency/94/linkedin.png",
          link: "https://www.linkedin.com/in/excellup-hub-393700360/",
        },
        {
          name: "Instagram",
          src: "https://img.icons8.com/3d-fluency/94/instagram-new.png",
          link: "https://www.instagram.com/excellup_?igsh=YWw0MzhzbHpkaW1p",
        },
        {
          name: "WhatsApp",
          src: "https://img.icons8.com/3d-fluency/94/whatsapp.png",
          link: "https://wa.me/",
        },
      ].map((icon, index) => (
        <motion.a
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
        >
          <img src={icon.src} alt={icon.name} className="w-12 h-12 md:w-14 md:h-14" />
        </motion.a>
      ))}
    </motion.div>
  </div>
</motion.div>

      {/* Testimonials Section */}
     <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="w-full mt-32 px-6 md:px-16 text-center bg-[#f9f9f9] py-20"
>
  <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
    Student Success Stories
  </h2>
  <p className="text-black mb-10">
    Hear from our graduates who have transformed their careers through our courses
  </p>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    autoplay={{ delay: 5000 }}
    pagination={{ clickable: true }}
    className="pb-16"
  >
    {testimonials.map((student, index) => (
      <SwiperSlide key={index}>
        <motion.div
          className="bg-white text-black p-6 rounded-2xl shadow-xl min-h-[300px] flex flex-col justify-between mt-6 border hover:border-yellow-400 transition-all hover:shadow-yellow-400/40"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4">
            <img
              src={student.img}
              alt={student.name}
              className="w-14 h-14 mr-3 rounded-full object-cover"
            />
            <div className="text-left">
              <h3 className="font-semibold">{student.name}</h3>
              <p className="text-yellow-600 text-sm">{student.title}</p>
              <div className="text-yellow-500 text-sm mt-1">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-sm text-gray-700">{student.review}</p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>


    </div>
  );
}
