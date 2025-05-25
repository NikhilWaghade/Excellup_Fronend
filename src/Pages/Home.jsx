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
import { Users, Laptop, Rocket, Code2, MonitorSmartphone, TrendingUp, Video, Globe, Activity, Calendar } from 'lucide-react';
import { FaBookOpen, FaChalkboardTeacher, FaCheckCircle, FaCode, FaCogs, FaEnvelope, FaGlobe, FaHandshake, FaInstagram, FaLaptopCode, FaMapMarkerAlt, FaPaintBrush, FaPhoneAlt, FaRocket, FaStore, FaSuitcase, FaTimesCircle, FaUserGraduate, FaUsers, FaVideo, FaYoutube } from "react-icons/fa";
import emailjs from "emailjs-com";
import wlclogo from '../assets/Images/wlc_logo.png'



export default function HomePage() {

const [text] = useTypewriter({
  words: [
    "Master the Future",
    "Learn New Tech Skills",
    "Code Your Dream Career",
    "Level Up Your Skills",
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
    icon: <Video className="w-10 h-10 text-red-600" />,
    label: "Content Creation",
    description: "Engaging tech tutorials, productivity hacks, and programming reels.",
   // image: "/images/digital-services.jpg",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    label: "Digital Services",
    description: "Websites, reels, and social media management for local businesses.",
   // image: "/images/brand-growth.jpg",
  },

  // From gridItems
  {
    icon: <Code2 className="w-10 h-10 text-purple-600" />,
    label: "Tech Bootcamps",
    description: "Hands-on offline training in Web Development, Editing, Design & more.",
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
    title: " Global & Local Website",
    description:
      "A responsive website designed for a hometown bakery, featuring online orders, gallery, and real-time offers. Built with React, Tailwind CSS, and Firebase.",
    link: "#",
    linkText: "View Live",
    image: "https://plus.unsplash.com/premium_photo-1722126194543-ab8a195ce9e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <FaInstagram size={24} />,
    title: " Instagram Tech Reel",
    description:
      "A fast-paced, high-impact reel educating students on how algorithms power modern apps. Created using CapCut and Adobe Premiere Pro.",
    link: "#",
    linkText: "Watch Reel",
    image: "https://images.unsplash.com/photo-1618835350907-653a211d5889?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHwlRjAlOUYlOEUlQUMlMjBJbnN0YWdyYW0lMjBUZWNoJTIwUmVlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    icon: <FaVideo size={24} />,
    title: " Video Editing Masterclass",
    description:
      "Learn professional video editing techniques using CapCut and Adobe Premiere Pro — perfect for content creators and social media managers.",
    link: "#",
    linkText: "Watch Masterclass",
    image: "https://images.unsplash.com/photo-1576267345152-5e8d10f75cb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUYwJTlGJThFJUE1JTIwVmlkZW8lMjBFZGl0aW5nJTIwTWFzdGVyY2xhc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <FaPaintBrush size={24} />,
    title: " Business Promo Poster",
    description:
      "A clean, vibrant promotional poster designed for a tech startup, combining strategic layout, bold visuals, and AI-generated slogans.",
    link: "#",
    linkText: "View Sample",
    image: "https://images.unsplash.com/photo-1637652915488-4be9bbfbb8a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
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
    <div className="min-h-screen w-full flex flex-col items-center bg-white text-black p- -mt-20">
      {/* Hero Section */}
   <section id="hero" className="relative w-full min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-12">
    {/* Left side content */}
    <div className="space-y-6">
      <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-white md:-mt-48">
        <span className="text-[#7a56d6] md:text-3xl text-2xl uppercase">{text}</span>
        <Cursor cursorStyle="|" />
        <br />
        <span className="text-black text-2xl">Build Your Future with Emerging Tech</span>
      </h1>

      <p className="text-black text-lg md:text-xl leading-relaxed max-w-2xl font-inter">
        "Level up your coding skills with our cutting-edge education platform.
        Learn from industry leaders, build real-world projects, and join a thriving
        community of passionate developers."
      </p>

      <div className="flex flex-wrap gap-4">
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
    </div>

    {/* Right side image */}
    <div className="flex justify-center mt-10 md:mt-0">
      <img
        src={wlclogo}
        alt="Coding Students"
        className="rounded-3xl w-full max-w-[320px] sm:max-w-[400px] md:max-w-lg z-0"
      />
    </div>
  </div>

  {/* Fixed WhatsApp icon */}
  <div className="fixed bottom-8 right-6 sm:right-8 flex flex-col gap-6 z-50">
    <motion.a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_#25d366] transition-all"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileHover={{ scale: 1.15 }}
      aria-label="WhatsApp"
    >
      <img
        src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
        alt="WhatsApp"
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
    </motion.a>
  </div>
</section>



      {/* Technologies Icons Section */}
<section className="bg-[#D8DDF1] w-full overflow-hidden h-72">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className="w-full pt-14 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center gap-10"
  >
    {/* Heading */}
    <div className="text-[#7a56d6] text-center text-2xl sm:text-3xl md:text-4xl font-bold font-lato">
      Trusted by Leading Technologies Worldwide
    </div>

    {/* Marquee Section */}
    <div className="relative w-full overflow-hidden">
      <div className="w-full">
        <motion.div
          className="flex gap-10 sm:gap-12 md:gap-16 w-max will-change-transform pb-32"
          animate={startAnim ? { x: ["0%", "-50%"] } : { x: "0%" }}
          transition={
            startAnim
              ? {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }
              : {}
          }
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="w-20 sm:w-24 md:w-28 h-24 sm:h-28 md:h-32 flex-shrink-0 flex flex-col items-center justify-center rounded-xl"
              animate={startAnim ? { y: [0, -10, 0] } : { y: 0 }}
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
              <span className="text-sm sm:text-base mt-2 text-black text-center font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>


     
  
    {/* About section  */}
<section className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20" id="about-us">
  {/* Heading + Description */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7a56d6] mb-6 font-lato">
      Who We Are
    </h2>
    <p className="text-gray-700 text-justify text-sm sm:text-base max-w-3xl mx-auto mb-12 font-inter px-2 sm:px-4 leading-relaxed mt-4">
      <span className="relative font-semibold text-black">We’re</span>{' '}
      <span className="relative">
        a passionate team of innovators, developers, and tech educators from <strong>Balaghat, Madhya Pradesh</strong> — building <span className="text-blue-600 font-semibold">EXCELLUP</span> as a vibrant platform to democratize programming skills, ignite digital creativity, and empower individuals and businesses to thrive in a tech-driven world.
      </span>
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
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-2 sm:px-4"
  >
    {/* Card 1 */}
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-[#7a56d6] hover:shadow-[#7a56d6]"
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
      <h3 className="text-lg md:text-xl font-semibold mb-2">Tech Education</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Make tech education fun, local, and practical for students and learners in every corner of India.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-[#7a56d6] hover:shadow-[#7a56d6]"
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
      <h3 className="text-lg md:text-xl font-semibold mb-2">Digital Empowerment</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        Help local brands go digital with websites, videos, and online marketing tools.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-[#7a56d6] hover:shadow-[#7a56d6]"
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
      <h3 className="text-lg md:text-xl font-semibold mb-2">Creator-Led Brand</h3>
      <p className="text-gray-600 text-sm sm:text-base">
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
    className="mt-16 text-center px-4"
  >
    <img
      src="https://img.freepik.com/premium-photo/team-celebrating-project-success_1265500-96079.jpg?ga=GA1.1.924705394.1747313358&semt=ais_hybrid&w=740"
      alt="Team EXCELLUP"
      className="rounded-2xl mx-auto shadow-lg w-full max-w-5xl object-cover"
    />
  </motion.div>
</section>



    {/* What We DoSection */}
<section
  id="what-we-do"
  className="w-full py-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#D8DDF1]"
>
  <div className="max-w-6xl mx-auto text-center mb-12 px-2">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 font-lato">
      What We Do at <span className="text-[#7a56d6]">EXCELLUP</span>
    </h2>
    <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
      Empowering future coders, creators, and digital leaders with real-world, project-based learning in tech, design, and innovation.
    </p>
    <p className="text-xs sm:text-sm text-gray-600 italic mt-2">
      Based in <strong>Balaghat, Madhya Pradesh</strong>
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-2 sm:px-0">
    {combinedItems.map((item, index) => {
      const iconStyle = iconColors[index % iconColors.length];
      return (
        <div
          key={index}
          className="bg-white rounded-3xl border border-gray-100 shadow-md p-5 sm:p-6 text-center flex flex-col items-center transition-all hover:shadow-lg hover:ring-2 hover:ring-[#7a56d6] hover:shadow-[#7a56d6]"
        >
          {/* Icon */}
          <div className={`w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center text-white text-xl sm:text-2xl rounded-full shadow-sm mb-4 ${iconStyle}`}>
            {item.icon}
          </div>

          {/* Text */}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.label}</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {item.description}
          </p>

          {/* Optional Image */}
          {item.image && (
            <div className="mt-4 w-full overflow-hidden rounded-xl">
              <div className="transition-transform duration-300 hover:scale-[1.03]">
                {item.image}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>



  {/* Featured  */}
<section
  id="our-work"
  className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16"
>
  {/* Heading container */}
  <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14 px-2">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7a56d6] mb-4">
      Our Work Speaks
    </h2>
    <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
      From real-world projects to digital experiments, our work blends creativity,
      technology, and purpose — transforming ideas into meaningful experiences.
    </p>
  </div>

  {/* Swiper container */}
  <Swiper
    modules={[Autoplay, Pagination]}
    slidesPerView={1}
    spaceBetween={30}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    className="max-w-6xl mx-auto px-2"
  >
    {works.map((work, idx) => (
      <SwiperSlide key={idx}>
        <div className="flex flex-col md:flex-row items-center bg-[#ebf5fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8">
            <div className="mb-2 text-[#7a56d6] text-lg sm:text-xl">{work.icon}</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {work.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {work.description}
            </p>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7a56d6] font-medium inline-block text-sm sm:text-base border-b-2 border-transparent hover:border-[#7a56d6] transition"
            >
              {work.linkText}
            </a>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>




    {/* Who We Help */}
<motion.section
  id="who-we-help"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#D8DDF1] w-full -mt-2"
>
  {/* Section Header */}
  <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7a56d6] mb-4 font-lato">
      Who Is <span className="text-black">EXCELLUP</span> For?
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
      We empower diverse learners and clients — from curious coders to growing businesses — to succeed in the digital world. Whether you’re starting out or scaling up, EXCELLUP is your tech partner.
    </p>
  </div>

  {/* Card List */}
  <motion.div
    className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    {whoWeHelpData.map((item, idx) => (
      <motion.div
        key={idx}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-xl bg-[#9c7ee8c5] hover:bg-[#9d8cc0] transition-all"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
      >
        {/* Icon */}
        <div className={`p-4 rounded-full text-2xl sm:text-3xl ${iconColors[idx % iconColors.length]} mx-auto sm:mx-0`}>
          {item.icon}
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-black mb-1">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            {item.description}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>



    {/* Why Choose Our Platform Section */}
  <section className="bg-[#f5f5fa]">
  <div className="w-full py-16 sm:py-20 text-white text-center">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-black font-lato">
      Why Choose <span className="text-[#7a56d6]">EXCELLUP?</span>
    </h2>

    {/* Subtext */}
    <p className="text-black max-w-4xl mx-auto font-inter px-4 text-sm sm:text-base md:text-lg leading-relaxed mt-4 text-justify">
      <span className="relative font-semibold text-blue-600">Choose</span>{' '}
      <span className="relative top-1">
        EXCELLUP for a transformative coding experience — where expert guidance,
        interactive learning, and real-world tech skills come together to help you grow, create,
        and succeed.
      </span>
      <br />
      <span className="block text-center mt-3 text-base font-medium">
        Grow, create, and succeed.
      </span>
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-6 sm:px-10 md:px-16 mt-12">
      {features.map((feature, idx) => {
        const bgColors = [
          'bg-blue-100 text-blue-600',
          'bg-red-100 text-red-600',
          'bg-green-100 text-green-600',
        ];
        const iconStyle = bgColors[idx % 3];

        return (
          <div
            key={idx}
            className="bg-white p-6 sm:p-7 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-[#7a56d6] hover:shadow-[#7a56d6]/30 transition-all duration-300"
          >
            <div className={`p-4 rounded-full mb-4 text-2xl ${iconStyle}`}>
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


   
     {/* final call action section */}    
<section id="container" className="bg-[#D8DDF1] w-full">
  <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 text-center max-w-5xl mx-auto">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#7a56d6] font-lato">
      Ready to <span className="text-black">Start Your Journey?</span>
    </h2>

    {/* Paragraph */}
    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 leading-relaxed font-inter px-2 sm:px-6">
      You don’t need a fancy degree to build the future you want.  
      All it takes is the right people by your side, the right skills in your toolkit, and a growth mindset ready to tackle any challenge.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
      <button className="flex items-center justify-center gap-3 border-2 border-green-600 text-sm sm:text-base font-semibold px-6 py-3 min-w-[240px] rounded-full shadow-sm hover:bg-[#7a56d6] hover:text-white transition duration-300">
        <FaRocket className="text-lg sm:text-xl" /> Apply to Bootcamp
      </button>

      <Link
        to="/courses"
        className="flex items-center justify-center gap-3 border-2 border-green-600 text-sm sm:text-base font-semibold px-6 py-3 min-w-[240px] rounded-full shadow-sm hover:bg-[#7a56d6] hover:text-white transition duration-300"
      >
        <FaBookOpen className="text-lg sm:text-xl" /> Start Learning Now
      </Link>

      <Link
        to="/services"
        className="flex items-center justify-center gap-3 border-2 border-green-600 text-sm sm:text-base font-semibold px-6 py-3 min-w-[240px] rounded-full shadow-sm hover:bg-[#7a56d6] hover:text-white transition duration-300"
      >
        <FaCogs className="text-lg sm:text-xl" /> Explore Our Services
      </Link>
    </div>
  </div>
</section>


      
      {/* Contact Section */}
  <div className="min-h-screen bg-white from-black via-[#1a0033] to-black text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 flex items-center justify-center">
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
          <span className="text-black">excellup.hub@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-[#7a56d6] text-xl" />
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
          className="w-full p-3 rounded-lg bg-white/20 text-black border border-gray-500 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
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
        className="w-full bg-[#7a56d6] text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition shadow-lg"
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
          className={`bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl max-w-sm mx-4 border-2 text-center ${
            feedback.type === "success" ? "border-green-500" : "border-red-500"
          }`}
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
          <div className="h-1 bg-white/40 rounded-full overflow-hidden">
            <motion.div
              className={`${
                feedback.type === "success" ? "bg-green-400" : "bg-red-400"
              }`}
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


     
         {/* Student story Section */}
 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="w-full px-4 sm:px-8 md:px-16 text-center md:py-20 py-12 bg-[#D8DDF1]"
>
  <h2 className="text-[#7a56d6] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-lato">
    Student Success Stories
  </h2>
  <p className="text-black mb-10 max-w-3xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
    Hear from our graduates who have transformed their careers through our courses
  </p>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    }}
    autoplay={{ delay: 5000 }}
    pagination={{ clickable: true }}
    className="pb-16"
  >
    {testimonials.map((student, index) => (
      <SwiperSlide key={index}>
        <motion.div
          className="bg-white text-black p-6 rounded-2xl shadow-xl min-h-[300px] flex flex-col justify-start gap-4 mt-6 border hover:shadow-2xl hover:ring-2 hover:ring-[#7a56d6] transition-all hover:shadow-[#7a56d6]"
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
          <div className="flex items-center mb-2">
            <img
              src={student.img}
              alt={student.name}
              className="w-12 h-12 sm:w-14 sm:h-14 mr-3 rounded-full object-cover"
            />
            <div className="text-left">
              <h3 className="font-semibold text-sm sm:text-base">{student.name}</h3>
              <p className="text-yellow-600 text-xs sm:text-sm">{student.title}</p>
              <div className="text-yellow-500 text-xs sm:text-sm mt-1">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{student.review}</p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>



     {/* Follow Us Section */}
    <section id="container" className="w-full h-96 md:h-80 py-10 md:py-16 ml-16 md:ml-0">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className="w-full flex flex-col items-center justify-center gap-10 px-6 sm:px-12"
  >
    <h2 className="text-[#7a56d6] text-2xl sm:text-3xl md:text-4xl font-bold text-center font-lato mr-16 ">
      Follow Us on Social Media
    </h2>

    {/* Icons grid */}
   <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-full max-w-xl sm:max-w-4xl">
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
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white shadow-xl flex items-center justify-center transition-all hover:shadow-[0_0_20px_#7a56d6] group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.15 }}
        >
          <img
            src={icon.src}
            alt={icon.name}
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="absolute -bottom-8 text-xs sm:text-sm font-semibold text-[#7a56d6] opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            {icon.name}
          </span>
        </motion.a>
      ))}
    </div>
  </motion.div>
</section>

 

    </div>
  );
}
