import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTypewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { technologies } from "/src/Data/testimonialData.jsx";
import {
  BookOpen,
  GraduationCap,
  Star,
  Users,
  Clock,
  Code,
  Play,
  ArrowRight,
} from "lucide-react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaClock,
  FaChalkboardTeacher,
  FaCode,
  FaCogs,
  FaGlobe,
  FaHandshake,
  FaLaptopCode,
  FaMobile,
  FaCloud,
  FaRocket,
  FaSuitcase,
  FaUsers,
  FaVideo,
  FaRobot,
  FaArrowRight,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaCrown,
  FaCheckCircle,
  FaLinkedin,
  FaYoutube,
  FaBriefcase,
  FaCertificate,
  FaHtml5,
  FaServer,
  FaWordpress,
  FaDatabase,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// components
import PrimaryBtn from "../Components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

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
          setFeedback({
            message: "Message sent successfully!",
            type: "success",
          });
          formRef.current.reset();
          setCountdown(1);
          setShowPopup(true);
        },
        (error) => {
          console.error(error.text);
          setFeedback({
            message: "Failed to send. Please try again.",
            type: "error",
          });
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
    <div className="min-h-screen w-full flex flex-col items-center bg-white text-black ">
      {/* Hero Section */}
      <Hero />

      {/* Technologies Section */}
      <section className="w-full pb-10">
        <div className="">
          {/* Heading */}
          <h2 className="text-neutral-400 text-center text-sm sm:text-xl md:text-2xl font-medium font-outfit mb-4 max-w-60 sm:max-w-2xl mx-auto">
            Empowering Innovation with Industry-Leading Technologies
          </h2>

          {/* Marquee Section */}
          <div className="relative w-full overflow-hidden">
            <Marquee gradient={false} className="flex gap-8 sm:gap-10">
              {[1, 2].map((set) => (
                <div
                  key={set}
                  className="py-4 md:py-6 flex items-center gap-x-8 sm:gap-x-12 md:gap-x-24 mx-2 sm:mx-8 md:mx-12"
                >
                  {[...technologies].map((tech, index) => (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      className=" flex-shrink-0 flex flex-col items-center justify-center"
                    >
                      <div className="text-3xl sm:text-4xl md:text-5xl">
                        {tech.icon}
                      </div>
                      {/* <span className="text-sm mt-2 text-neutral-500 text-center font-medium font-outfit">
                      {tech.name}
                    </span> */}
                    </motion.div>
                  ))}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Course Showcase Section */}
      <CourseShowcase />
      {/* <EnhancedCourseShowcase /> */}

      {/* Key Features Section */}
      {/* <KeyFeatures /> */}
      <LearningJourney />

      {/* Business Services Section */}
      <BusinessServices />

      {/* Student Success Section */}
      <StudentSuccess />
    </div>
  );
}

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand/10 rounded-full filter blur-3xl"></div> */}
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-brand/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-10 sm:py-24 px-4 sm:px-6 md:px-12 xl:px-0 mt-36 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
          {/* Left Side - Content */}
          <div className="space-y-8 relative z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            {/* Main Heading */}
            <div className="mb-8 -mt-20 sm:mt- md:mb-12">
              <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold font-outfit mb-4 max-w-2xl leading-[1.2] lg:leading-[1.2]">
                <span className="text-[#7a56d6]">Transform</span> Your Future
                with <span className="text-[#7a56d6]">Tech Skills</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-inter max-w-xl leading-relaxed mx-auto md:mx-0">
                Master in-demand tech skills through hands-on projects, expert
                mentorship, and a supportive learning environment. Your journey
                to becoming a tech professional starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 child:w-full sm:child:w-fit w-full sm:w-fit">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand rounded-full hover:bg-brand/90 transition-colors duration-300 shadow-lg hover:shadow-xl "
              > <GraduationCap className="w-5 sm:w-40 md:w-5 h-5 mr-2" />
               
                Start Learning
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-brand bg-white border-2 border-brand rounded-full hover:bg-brand hover:text-white transition-colors duration-300"
              >
                <FaHandshake className="w-5 h-5 mr-2" />
                Get in Touch
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="sm:flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600 hidden ">
              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-brand text-2xl" />
                <span>Project-Based Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCogs className="text-brand text-2xl" />
                <span>Industry-Standard Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSuitcase className="text-brand text-2xl" />
                <span>Career Guidance</span>
              </div>
            </div>
            
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-0 w-full h-80 sm:h-96 md:h-full flex items-center justify-center">
              <div className="absolute -top-12 md:-top-96  xl:-right-[30rem] w-[56rem] sm:w-[70rem] xl:w-[100rem] h-fit">
                <DotLottieReact
                  src="https://lottie.host/fce98368-464b-4f90-b022-5689a94ce922/f0DrhtIrzA.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-6 sm:right-8 z-50">
        <motion.a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-3 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_#25d366] transition-all"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </motion.a>
      </div>
    </section>
  );
};

const CourseShowcase = () => {
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
  //  {
  //    slug: "wordpress-development",
  //    title: "WordPress Development",
  //    icon: <FaWordpress className="w-6 h-6 text-[#7a56d6]" />,
  //    description: "No-code website development using WordPress CMS.",
  //    category: "No-Code",
  //    duration: "2 Months",
  //    projects: "2+ Sites",
  //    rating: 4.5,
  //    bannerImage:
  //      "https://images.unsplash.com/photo-1678341859828-bfb1a2bd527a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29yZHByZXNzfGVufDB8fDB8fHww",
  //    features: ["WordPress", "Themes", "Plugins", "SEO"],
  //  },
  //  {
  //    slug: "dsa",
  //    title: "Data Structures & Algorithms",
  //    icon: <FaDatabase className="w-6 h-6 text-[#7a56d6]" />,
  //    description: "Master DSA and crack coding interviews.",
  //    category: "DSA",
  //    duration: "5 Months",
  //    projects: "200+ Problems",
  //    rating: 4.9,
  //    bannerImage:
  //      "https://plus.unsplash.com/premium_photo-1681810994162-43dbe0919d3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhdGElMjBzdHJ1Y3R1cmUlMjBhbmQlMjBhbGdvcml0aGFtfGVufDB8fDB8fHww",
  //    features: ["Arrays", "Trees", "Graphs", "Recursion", "DP"],
  //  },
 ];

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  return (
    <section className="w-full py-10 sm:py-20 bg-gradient-to-t from-gray-100 via-gray-200 to-white overflow-hidden relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 rounded-xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
            Featured <span className="text-[#7a56d6]">Courses</span>
          </h2>
          <p className="sm:text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Industry-relevant courses designed to launch your tech career
          </p>
        </div>

        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-16 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-brand hover:bg-brand/80 rounded-full p-3 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 group hidden md:block">
            <FaChevronLeft className="w-5 h-5  text-white" />
          </div>
          <div className="swiper-button-next-custom absolute right-16 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-brand hover:bg-brand/80 group rounded-full p-3 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 group hidden md:block">
            <FaChevronRight className="w-5 h-5 text-white" />
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom mt-4 sm:mt-8 text-center"></div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-[#7a56d6] rounded-full hover:bg-[#7a56d6]/90 transition-colors duration-300"
          >
            View All Courses
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #7a56d6;
          transform: scale(1.2);
        }

        .mySwiper {
          padding: 20px 0;
        }

        .swiper-slide {
          height: auto;
        }

        .swiper-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
};

const BusinessServices = () => {
  const services = [
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Custom Website Development",
      description:
        "Professional, responsive websites tailored to your business needs",
      features: [
        "Modern Design",
        "Mobile Responsive",
        "SEO Optimized",
        "Fast Loading",
      ],
    },
    {
      icon: <FaVideo className="w-6 h-6" />,
      title: "Promotional Reels",
      description:
        "Engaging video content to showcase your products and services",
      features: [
        "Professional Editing",
        "Social Media Ready",
        "Brand Consistent",
        "High Quality",
      ],
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Digital Solutions",
      description: "Comprehensive digital services to grow your business",
      features: [
        "Digital Marketing",
        "Social Media Management",
        "Content Creation",
        "Analytics",
      ],
    },
  ];

  return (
    <section className="w-full py-10 sm:py-20 bg-[#F7EEE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Content Side */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
              Business <span className="text-[#7a56d6]">Services</span>
            </h2>
            <p className="sm:text-lg font-inter text-gray-600 mb-8 max-w-lg">
              Comprehensive digital solutions to help your business grow and
              succeed in the digital age
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=""
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 sm:p-3 rounded-full bg-[#7a56d6]/10 text-[#7a56d6]">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold font-outfit mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className=" md:hidden">
              <img src="/assets/images/1.webp" className="w-full" />
            </div>

            <div className="mt-8 md:mt-12">
              <Link
                to="/business-services"
                className="inline-flex items-center px-6 py-3 text-base font-medium font-outfit text-white bg-[#7a56d6] rounded-full hover:bg-[#7a56d6]/90 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full h-full hidden md:block">
            <div className="absolute top-0 right-0">
              <img src="/assets/images/1.webp" className="w-[45rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StudentSuccess = () => {
  const stats = [
    { number: "200+", label: "Active Students" },
    { number: "10+", label: "Live Events" },
    { number: "15+", label: "Expert Mentors" },
    { number: "100+", label: "Learning Resources" },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      quote:
        "Excellup transformed my career. The hands-on projects and mentorship helped me land my dream job.",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Priya Patel",
      role: "AI Engineer",
      company: "AI Innovations",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
      quote:
        "The practical approach to learning AI and machine learning at Excellup was exactly what I needed.",
      skills: ["Python", "Machine Learning"],
    },
    {
      name: "Amit Kumar",
      role: "Web Developer",
      company: "Digital Creations",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      quote:
        "From zero to professional developer in 6 months. Excellup's curriculum is industry-focused and practical.",
      skills: ["JavaScript", "React", "Node.js"],
    },
  ];

  const galleryImages = [
    {
      url: "https://img.freepik.com/free-photo/software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team_482257-33535.jpg",
      title: "Web Development Batch",
      description: "Students learning React and Node.js",
    },
    {
      url: "https://img.freepik.com/free-photo/system-developers-analyzing-code-wall-screen-tv-looking-errors-while-team-coders-collaborate-artificial-intelligence-project-programmers-working-together-machine-learning-software_482257-41819.jpg",
      title: "Tech Talk Event",
      description: "Industry experts sharing insights",
    },
  ];

  return (
    <section className="w-full py-10 sm:py-20 bg-gray-50">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
            Our Vibrant <span className="text-[#7a56d6]">Community</span>
          </h2>
          <p className="md:text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Join a thriving community of learners, mentors and industry experts.
            Experience the power of collaborative learning.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:p-6 md:bg-white rounded-xl shadow-sm"
            >
              <div className="text-2xl md:text-4xl font-bold font-outfit text-[#7a56d6] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-inter text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Split Section for Testimonials and Gallery */}
        <div className="flex flex-col  gap-12 mb-16">
          {/* Left Side - Gallery */}
          <div className="w-full">
            <h3 className="text-2xl font-medium font-outfit mb-8 text-center">
              Community Events & Workshops
            </h3>
            <Marquee autoFill direction="left" speed={40} pauseOnHover>
              <div className="flex gap-6 mx-3">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group overflow-hidden rounded-xl max-w-96 sm:max-w-md"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                      <h4 className="text-white font-outfit font-semibold">
                        {image.title}
                      </h4>
                      <p className="text-gray-200 text-sm hidden sm:block">
                        {image.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Right Side - Testimonials */}
          <div className="w-full">
            <h3 className="text-2xl font-medium font-outfit mb-8 text-center">
              Hear From Our Students
            </h3>
            <Marquee autoFill direction="right" speed={40} pauseOnHover>
              <div className="flex gap-6 mx-3">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow overflow-hidden max-w-80 md:max-w-md border border-brand/30"
                  >
                    <div className="p-4 sm:p-6 font-inter">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-lg font-outfit">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                          <p className="text-[#7a56d6] text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 italic text-sm">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {testimonial.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-[#7a56d6]/10 text-[#7a56d6]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center w-full">
          <Link to="/community">
             <PrimaryBtn>Join Our Community</PrimaryBtn>
         </Link>
       </div>
      </div>
    </section>
  );
};

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaBookOpen className="w-6 h-6" />,
      title: "Foundation Building",
      description:
        "Master core concepts and fundamentals through structured learning paths",
      step: "01",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Project Development",
      description:
        "Build industry-relevant projects to showcase your practical skills",
      step: "02",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Get personalized guidance from industry professionals",
      step: "03",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community & Networking",
      description: "Connect with peers and industry experts for opportunities",
      step: "04",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: <FaSuitcase className="w-6 h-6" />,
      title: "Resume & Portfolio",
      description: "Create a compelling resume and portfolio to stand out",
      step: "05",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Internship Placement",
      description: "Get placed in top companies through our placement support",
      step: "06",
      gradient: "from-yellow-500 to-green-500",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
              Your Path to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Internship
              </span>
            </h2>
            <p className="md:text-lg text-gray-600 max-w-2xl mx-auto font-inter">
              Follow our proven roadmap to secure your dream tech internship
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Path with Tooltips */}
          <div className="relative">
            {/* Snake Path */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>

            {/* Tooltip Cards */}
            <div className="space-y-24 relative">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-purple-500 flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-purple-600">
                      {feature.step}
                    </span>
                  </div>

                  {/* Tooltip Card */}
                  <div
                    className={`w-[280px] bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-all duration-300 ${
                      index % 2 === 0 ? "mr-12" : "ml-12"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-10`}
                      >
                        <div
                          className={`text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text`}
                        >
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Space for Media Content */}
          <div className="hidden lg:block">
            {/* This space is reserved for your image/video content */}
            <div className="relative h-full min-h-[600px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-center p-8">
                Add your image or video content here
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-4 text-base font-medium font-outfit text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your Journey
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const EnhancedCourseShowcase = () => {
  // Featured MERN Stack Course
  const featuredCourse = {
    category: "🔥 Most Popular",
    title: "MERN Stack Development",
    description:
      "Master full-stack development with MongoDB, Express.js, React, and Node.js. Build real-world applications and get job-ready in 6 months.",
    duration: "6 months",
    projects: "8+ Real Projects",
    rating: 4.9,
    students: "500+",
    icon: <FaLaptopCode className="w-6 h-6" />,
    bannerImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    features: ["MongoDB", "Express.js", "React", "Node.js"],
    highlights: [
      "Live Industry Projects",
      "1:1 Expert Mentorship",
      "Job Placement Support",
      "Industry Certification",
    ],
    originalPrice: "₹15,000",
    currentPrice: "₹5,000",
    discount: "40% OFF",
  };

  // Other courses for carousel
  const otherCourses = [
    {
      category: "Mobile Development",
      title: "App Development",
      description:
        "Build native and cross-platform mobile apps with React Native and Flutter",
      duration: "5 months",
      projects: "6+ Applications",
      rating: 4.7,
      icon: <FaMobile className="w-6 h-6" />,
      bannerImage:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      features: ["React Native", "Flutter", "Firebase", "Redux"],
    },
    {
      category: "Programming",
      title: "DSA & System Design",
      description:
        "Master Data Structures, Algorithms, and System Design for tech interviews",
      duration: "4 months",
      projects: "100+ Problems",
      rating: 4.9,
      icon: <FaChartLine className="w-6 h-6" />,
      bannerImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      features: ["Java", "Python", "C++", "System Design"],
    },
    {
      category: "AI & ML",
      title: "Python & AI Development",
      description: "Learn Python programming and build AI/ML applications",
      duration: "6 months",
      projects: "5 AI/ML Projects",
      rating: 4.8,
      icon: <FaRobot className="w-6 h-6" />,
      bannerImage:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      features: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    },
    {
      category: "Cloud & DevOps",
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Azure, Docker, Kubernetes, and CI/CD pipelines",
      duration: "5 months",
      projects: "4+ Projects",
      rating: 4.7,
      icon: <FaCloud className="w-6 h-6" />,
      bannerImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      features: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    },
  ];

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  return (
    <section className="w-full py-10 sm:py-20 bg-gradient-to-t from-white via-purple-50/30 to-blue-50/20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
            Featured <span className="text-[#7a56d6]">Courses</span>
          </h2>
          <p className="sm:text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Industry-relevant courses designed to launch your tech career
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 mb-4 sm:mb-12">
          {/* Featured Course - Left Side (Desktop) / Top (Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative mb-10"
          >
            {/* Popular Badge - Floating */}
            <div className="absolute -top-4 -left-4 z-20">
              <div className="bg-white border-2 border-brand text-brand px-4 py-2 rounded-full font-bold font-outfit text-sm flex items-center gap-2 shadow-lg">
                <FaCrown className="w-4 h-4" />
                Most Popular
              </div>
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="bg-red-500 text-white px-3 py-2 rounded-full font-semibold text-xs font-outfit shadow-lg">
                {featuredCourse.discount}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:cursor-pointer relative">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
              </div>

              {/* Course Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={featuredCourse.bannerImage || "/placeholder.svg"}
                  alt={featuredCourse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold">
                      {featuredCourse.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Users className="w-4 h-4" />
                    <span>{featuredCourse.students}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-white relative z-10">
                {/* Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-white text-2xl">
                    {featuredCourse.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-outfit leading-tight">
                      {featuredCourse.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white/90 mb-6 font-inter text-sm">
                  {featuredCourse.description}
                </p>

                {/* Highlights */}
                {/* <div className="grid grid-cols-2 gap-2 mb-6">
                  {featuredCourse.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-white/90">{highlight}</span>
                    </div>
                  ))}
                </div> */}

                {/* Course Info */}
                <div className="flex items-end sm:items-center justify-between mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm font-outfit">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredCourse.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      <span>{featuredCourse.projects}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-end sm:items-center gap-1 sm:gap-2 font-outfit">
                    <span className="text-2xl font-bold">
                      {featuredCourse.currentPrice}
                    </span>
                    <span className="text-white/60 line-through text-xs sm:text-sm">
                      {featuredCourse.originalPrice}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/courses/${createSlug(featuredCourse.title)}`}
                    className="w-full bg-white text-purple-600 py-3 px-6 rounded-full font-bold font-outfit text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaGraduationCap className="w-4 h-4" />
                    Enroll Now
                  </Link>
                  {/* <button className="w-full border-2 border-white text-white py-3 px-6 rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Courses - Right Side (Desktop) / Bottom (Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-outfit text-gray-900 mb-2">
                Other Popular Courses
              </h3>
              <p className="text-gray-600">Explore more specialized programs</p>
            </div>

            <div className="relative overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-custom",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                className="other-courses-swiper"
              >
                {otherCourses.map((course, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={course.bannerImage || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Category & Rating */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-[#7a56d6]">
                            {course.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                            <Star className="text-yellow-400 w-3 h-3" />
                            <span className="text-xs font-medium">
                              {course.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold font-outfit text-gray-900 line-clamp-1">
                            {course.title}
                          </h4>
                          <div className="text-[#7a56d6] flex-shrink-0">
                            {course.icon}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                          {course.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {course.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-full text-xs bg-[#7a56d6]/10 text-[#7a56d6]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-between sm:justify-start gap-2 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Code className="w-3 h-3" />
                              <span>{course.projects}</span>
                            </div>
                          </div>
                          <Link
                            to={`/courses/${createSlug(course.title)}`}
                            className="inline-flex items-center bg-brand text-white px-4 py-2.5 sm:py-1.5 rounded-full font-medium w-full sm:w-auto justify-center font-outfit border border-brand hover:bg-white hover:text-brand text-sm"
                          >
                            Enroll Now
                            <FaArrowRight className="ml-1 w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom Navigation Buttons */}
              {/* <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-brand hover:bg-brand/80 rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 ">
                <FaChevronLeft className="w-5 h-5 text-white" />
              </div>
              <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-brand hover:bg-brand/80 rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 ">
                <FaChevronRight className="w-5 h-5 text-white" />
              </div> */}

              {/* Custom Pagination */}
              <div className="swiper-pagination-custom mt-6 text-center"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <PrimaryBtn className="w-full sm:w-fit">View All Courses</PrimaryBtn>
        </motion.div>
      </div>

      <style jsx>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #d1d5db;
          opacity: 1;
          margin: 0 3px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #7a56d6;
          transform: scale(1.3);
        }

        .other-courses-swiper {
          padding: 20px 0;
          overflow: visible;
        }

        .swiper-slide {
          height: auto;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

const LearningJourney = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const journeySteps = [
    {
      step: 1,
      title: "Join Community",
      description: "Connect with 500+ learners and get instant support",
      icon: <FaUsers className="w-6 h-6" />,
      features: [
        "Discord Access",
        "WhatsApp Groups",
        "Peer Learning",
        "24/7 Support",
      ],
      color: "from-blue-500 to-cyan-500",
      position: { top: "6%", left: "15%" },
      positionMobile: { top: "8%", left: "10%" },
    },
    {
      step: 2,
      title: "Learn & Practice",
      description: "Hands-on projects with expert mentorship",
      icon: <FaCode className="w-6 h-6" />,
      features: [
        "Live Sessions",
        "1-on-1 Guidance",
        "Real Projects",
        "Code Reviews",
      ],
      color: "from-green-500 to-emerald-500",
      position: { top: "25%", left: "40%" },
      positionMobile: { top: "25%", left: "38%" },
    },
    {
      step: 3,
      title: "Build Portfolio",
      description: "Create industry-ready projects that impress",
      icon: <FaBriefcase className="w-6 h-6" />,
      features: [
        "GitHub Portfolio",
        "Live Deployments",
        "Professional Projects",
        "Industry Standards",
      ],
      color: "from-purple-500 to-pink-500",
      position: { top: "45%", left: "25%" },
      positionMobile: { top: "45%", left: "25%" },
    },
    {
      step: 4,
      title: "Get Certified",
      description: "Earn industry-recognized certificates",
      icon: <FaCertificate className="w-6 h-6" />,
      features: [
        "Completion Certificate",
        "LinkedIn Badge",
        "Skill Verification",
        "Industry Recognition",
      ],
      color: "from-orange-500 to-red-500",
      position: { top: "65%", left: "35%" },
      positionMobile: { top: "65%", left: "35%" },
    },
    {
      step: 5,
      title: "Land Your Internship",
      description: "Start your successful tech career",
      icon: <FaRocket className="w-6 h-6" />,
      features: [
        "Job Placement",
        "Interview Prep",
        "Career Support",
        "Salary Growth",
      ],
      color: "from-indigo-500 to-purple-600",
      position: { top: "85%", left: "39%" },
      positionMobile: { top: "80%", left: "32%" },
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-white to-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-outfit text-gray-900 mb-6"
          >
            Why Choose <span className="text-[#7a56d6]">Excellup?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=" md:text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Your proven path from beginner to industry-ready professional. Join
            thousands who've transformed their careers with our step-by-step
            approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-12 items-center">
          {/* Left Side - Journey Path */}
          <div className="order-2 md:order-1">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-full h-full">
                <img
                  src="/assets/images/4.webp"
                  alt=""
                  className="w-full md:w-[28rem] h-full object-cover drop-shadow-lg"
                />
              </div>
              <div className="text-center sm::text-left">
                <h3 className="text-2xl md:text-3xl font-medium font-outfit text-gray-900 mb-4">
                  Launch Your Career With Excellup
                </h3>
                <p className="text-gray-600 font-inter text-sm">
                  Join our comprehensive training program and kickstart your
                  career in tech. Get hands-on experience, mentorship, and job
                  placement support.
                </p>
              </div>
              <div className="mt-8 flex items-start w-full">
                <PrimaryBtn className="w-full md:w-fit">
                  Get Internship
                </PrimaryBtn>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Animation Space */}
          <div className="relative h-[600px] order-1 lg:order-1">
            {/* SVG Path Background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 600"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7a56d6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient
                  id="animatedPathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="100%" stopColor="#7a56d6" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="0%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Background path */}
              <path
                d="M 60 60 Q 200 80 180 150 Q 160 220 100 180 Q 40 140 120 270 Q 200 400 220 330 Q 240 260 140 420 Q 40 580 140 540"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="8 4"
              />

              {/* Animated fill path */}
              <motion.path
                d="M 60 60 Q 200 80 180 150 Q 160 220 100 180 Q 40 140 120 270 Q 200 400 220 330 Q 240 260 140 420 Q 40 580 140 540"
                stroke="url(#animatedPathGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  opacity: { duration: 0.5 },
                }}
                viewport={{ once: true, margin: "-100px" }}
              />
            </svg>

            {/* Journey Steps */}
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  top:
                    window.innerWidth < 768
                      ? step.positionMobile.top
                      : step.position.top,
                  left:
                    window.innerWidth < 768
                      ? step.positionMobile.left
                      : step.position.left,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={{ scale: 1.1 }}
              >
                {/* Step Circle */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg relative z-10`}
                >
                  {step.icon}
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow-md">
                    {step.step}
                  </div> */}
                </div>

                {/* Tooltip Card */}
                {true && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className={`absolute top-0 ${
                      step.step === 4 ? "right-1" : "left-1"
                    }  transform -translate-x-1/2 bg-white rounded-full shadow-xl p-4 min-w-48 md:min-w-60 z-20 border border-gray-100 flex items-center justify-between gap-2`}
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>

                    <h3 className="font-bold text-sm md:text-lg font-outfit text-gray-900 text-nowrap">
                      {step.title}
                    </h3>
                    <div
                      className={`text-brand bg-gradient-to-r ${step.color} bg-clip-text`}
                    >
                      {step.icon}
                    </div>
                    {/* <p className="text-gray-600 text-sm mb-3 font-inter">
                      {step.description}
                    </p> */}

                    {/* <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-700"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div> */}
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Floating Elements */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-[#7a56d6]/20 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400/20 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
