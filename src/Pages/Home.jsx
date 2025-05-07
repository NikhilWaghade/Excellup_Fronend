import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter"; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaCode, FaRocket, FaUsers, FaBrain, FaVideo, FaShieldAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import{ testimonials,features, technologies } from '/src/Data/testimonialData.jsx'; 



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

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-black via-[#1a0033] to-black p-6 md:p-12 ">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mx-auto items-center pt-28 md:pt-24">
  <motion.div
    initial={{ opacity: 0, x: -70 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="text-white space-y-8 px-4 md:px-0"
  >
    <h1 className="text-xl md:text-4xl font-extrabold leading-tight">
      <span>{text}</span>
      <br />
      <span className="text-yellow-400">Build Your Future with Emerging Tech</span>
    </h1>

    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
      "Level up your coding skills with our cutting-edge education platform.
      Learn from industry leaders, build real-world projects, and join a thriving
      community of passionate developers."
    </p>

    <div className="flex flex-wrap gap-4">
      <Link to="/courses">
       <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition flex items-center shadow-lg">
      🚀 Start Learning
      </button>
    </Link>
    <Link to="/">
      <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition flex items-center shadow-lg">
        ▶️ Watch Demo
     </button>
  </Link>
</div>
  </motion.div>

  {/* Right side image section */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    className="flex justify-center px-4 md:px-0 "
  >
    <motion.img
      src="src\assets\Images\logobgremove.png"
      alt="Coding Students"
      className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
    />
  </motion.div>
     </div>

      {/* Technologies Icons Section */}
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="w-full mt-16 flex flex-col items-center justify-center gap-6"
>
  <div className="text-white text-xl md:text-2xl font-semibold">
    Trusted by Leading Technologies Worldwide
  </div>

  <motion.div
    className="w-full flex-nowrap overflow-x-auto no-scrollbar flex justify-start gap-8 px-4"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {technologies.map((tech, index) => (
      <motion.div
        key={index}
        className="flex-shrink-0 w-24 md:w-28 h-28 md:h-32 flex flex-col items-center justify-center text-4xl pt-4 overflow-visible"
        animate={{ y: [0, -10, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        {tech.icon}
        <span className="text-sm mt-2 text-white text-center">{tech.name}</span>
      </motion.div>
    ))}
  </motion.div>
</motion.div>


      {/* Why Choose Our Platform Section */}
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="w-full py-20 text-white text-center mt-16 "
>
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
    Why Choose <span className="text-yellow-400">Our Platform</span>
  </h2>
  <p className="text-gray-300 max-w-3xl mx-auto mb-12">
    Discover the features that make our platform the perfect choice for your coding journey
  </p>

  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 "
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
  >
    {features.map((feature, idx) => (
      <motion.div
        key={idx}
        className="bg-[#1e1e3f] p-6 rounded-2xl shadow-xl flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-yellow-500/30 hover:ring-2 hover:ring-yellow-400"
        animate={{ y: [0, -10, 0] }}
        whileHover={{ scale: 1.5 }} // ✨ Hover scale
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: idx * 0.3,
        }}
      >
        <div className="bg-[#2c2c54] p-4 rounded-full mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400 text-sm">{feature.description}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

           {/* Follow Us Section */}
   {/* Follow Us Section */}
<motion.div
 animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="w-full mt-20 text-center"
>
  <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
    Follow Us <span className="inline-block">🚀</span>
  </h2>
  <div className="flex justify-center gap-10 md:gap-20 flex-wrap">
    {[
      {
        name: "YouTube",
        src: "https://img.icons8.com/3d-fluency/94/youtube-play.png",
        link: "https://youtube.com",
      },
      {
        name: "LinkedIn",
        src: "https://img.icons8.com/3d-fluency/94/linkedin.png",
        link: "https://linkedin.com",
      },
      {
        name: "Instagram",
        src: "https://img.icons8.com/3d-fluency/94/instagram-new.png",
        link: "https://instagram.com",
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
        className="w-16 h-16"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        whileHover={{ scale: 1.2 }}
      >
        <img
          src={icon.src}
          alt={icon.name}
          className="w-full h-full"
        />
      </motion.a>
    ))}
  </div>
</motion.div>


{/* Testimonials Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="w-full mt-32 px-6 md:px-16 text-center overflow-visible"
>
  <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
    Student Success Stories
  </h2>
  <p className="text-gray-300 mb-10">
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
    className="pb-16 overflow-visible"
  >
    {testimonials.map((student, index) => (
      <SwiperSlide key={index} className="h-full overflow-visible">
        <motion.div
          className="bg-[#1e1e3f] text-white p-6 rounded-2xl shadow-xl h-full mt-6 transition-all hover:shadow-yellow-500/30 hover:ring-2 hover:ring-yellow-400"
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
              className="w-12 h-12 mr-3 rounded-full"
            />
            <div className="text-left">
              <h3 className="font-semibold">{student.name}</h3>
              <p className="text-yellow-400 text-sm">{student.title}</p>
              <div className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-sm text-gray-200">{student.review}</p>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>



    </div>
  );
}
