import React from "react";
import { motion } from "framer-motion";

// Replace with your actual team images or URLs
const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Founder & Lead Instructor",
    bio: "Amit has 10+ years of experience in software development and has mentored over 500 students.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Neha Verma",
    role: "Full Stack Instructor",
    bio: "Expert in MERN stack and passionate about teaching modern web development.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Ravi Singh",
    role: "Data Structures Mentor",
    bio: "Loves algorithms and helps students crack coding interviews with DSA mastery.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Priya Chauhan",
    role: "Frontend Mentor",
    bio: "Focuses on UI/UX and React.js, guiding students to build elegant interfaces.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Kunal Yadav",
    role: "Backend Specialist",
    bio: "Specializes in Node.js and databases, helps students build secure and scalable apps.",
    img: "https://via.placeholder.com/150",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white from-black via-[#1a0033] to-black text-white px-4 py-10 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* About Excellup Section (Text on left, Logo on right) */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold mb-4 text-[#7a56d6]"
            >
              About Excellup Coding Coaching
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-lg text-black leading-relaxed max-w-xl mx-auto"
            >
              <strong>Excellup Coding Coaching</strong> is a premier institute focused on developing job-ready coding skills.
              With real-world training, project-based learning, and expert mentorship, we help students transform their potential into professional success.
              Whether you're starting from scratch or enhancing your skills, we provide the platform to thrive in the tech world.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <motion.img
                src="src\assets\Images\Excellup_logo_-removebg-preview.png"
              alt="Excellup Logo"
              className="rounded-3xl  w-full max-w-md md:max-w-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </section>

        {/* Community Image Section with Hover and Animation */}
        <section className="mb-16">
  <div className="flex justify-center items-center py-20">
    <motion.img
      src="https://images.unsplash.com/photo-1734519654307-ceb306e4073a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjBsb29rJTIwYWxsJTIwbWVtYmUlMjBmYWNlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" // Replace with your community image
      alt="Excellup Coding Community"
      className="rounded-xl shadow-2xl w-full max-w-4xl object-cover cursor-pointer"
      animate={{ y: [0, -15, 0] }} // 👈 automatic up and down
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }} // 👈 Hover scale effect
    />
  </div>
       </section>

       {/* /* Follow Us Section */} 
 <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="w-full mt-24 flex flex-col items-center justify-center gap-12 px-4"
>
  <h2 className="text-[#7a56d6] text-3xl md:text-4xl font-extrabold text-center">
    Follow Us on Social Media
  </h2>

  {/* New Icon Design: Circular Glow Cards */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
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
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl flex items-center justify-center transition-all hover:shadow-[0_0_20px_#7a56d6] group"
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
          className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:rotate-12"
        />
        <span className="absolute -bottom-8 text-sm font-semibold text-[#7a56d6] opacity-0 group-hover:opacity-100 transition duration-300">
          {icon.name}
        </span>
      </motion.a>
    ))}
  </div>
</motion.div>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-16 mt-16 text-center text-[#7a56d6]">Meet Our Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center transition-all hover:shadow-yellow-500/30 hover:ring-2 hover:ring-yellow-400"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-[#7a56d6] text-black"
                />
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="text-[#7a56d6] text-lg">{member.role}</p>
                <p className="text-sm text-black mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
