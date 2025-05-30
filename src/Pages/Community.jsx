import { motion } from "framer-motion";
import lalit from '../assets/Team Members/lalit.jpg';
import Nikhil from '../assets/Team Members/Nikhil.jpg';
import sanjog from '../assets/Team Members/sanjog.jpg';
import Shivam from '../assets/Team Members/Shivam.jpg';
import Sulabh from '../assets/Team Members/Sulabh.jpg';

const teamMembers = [
  {
    name: "Lalit  Choudhary",
    role: "Full Stack Instructor",
    image: lalit
  },
  {
    name: "Nikhil Waghade",
    role: "Full Stack Developer",
    image: Nikhil,
  },
  {
    name: "sanjog ",
    role: "Graphic Design Coach",
    image: sanjog
  },
  {
    name: "Shivam ",
    role: "Workshop Coordinator",
    image: Shivam
  },
  {
    name: "Sulabh Hathi ",
    role: "Workshop Coordinator",
    image: Sulabh
  },
   {
    name: "Lalit  Choudhary",
    role: "Full Stack Instructor",
    image: lalit
  },
    {
    name: "Sulabh Hathi ",
    role: "Workshop Coordinator",
    image: Sulabh
  },
   {
    name: "Lalit  Choudhary",
    role: "Full Stack Instructor",
    image: lalit
  },
];

const communityWork = [
  "Teaching Frontend & Backend Development",
  "Sharing Programming Tutorials Online",
  "Conducting Video Editing Sessions",
  "Running Graphic Design Bootcamps",
  "Organizing Coding & Tech Workshops",
];

const Community = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-t from-gray-100 via-gray-200 to-purple-50 text-gray-800 w-full ">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center px-4 sm:px-6 md:px-10 xl:px-20 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-brand mb-6 mt-">
          Welcome to Excellup Community
        </h2>
        <p className="max-w-5xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
          <span className="text-brand font-semibold">Excellup Coding Classes</span> is a thriving platform where we teach coding, video editing, graphic design, and help students build real-world skills through online tutorials and hands-on workshops. Our mentors are passionate professionals shaping tomorrow's creators and developers.
        </p>
      </motion.div>

      {/* Community Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 md:px-10 xl:px-20 mb-20"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
          What Our Community Does
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityWork.map((item, index) => (
            <motion.div
              key={index}
              className="bg-brand/10 text-brand border border-brand/20 p-6 rounded-2xl shadow hover:shadow-md text-center text-lg font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 md:px-10 xl:px-20"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
          Meet Oficial Team Member's
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-brand mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-700">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Community;
