import React from "react";
import { Code, Video, Users, Settings, Globe2, Megaphone } from "lucide-react"; // Changed icons to match services
import { motion } from "framer-motion";

const services = [
  {
    label: "Website Development",
    description:
      "Build professional websites for local and global clients. Custom design, responsive layout, and modern tech stack.",
    icon: <Globe2 />,
  },
  {
    label: "Social Media Handle",
    description:
      "Manage Instagram pages, Facebook accounts, and boost your online presence with consistent branding.",
    icon: <Users />,
  },
  {
    label: "Video Editing",
    description:
      "Edit YouTube, Instagram, and wedding videos with smooth transitions, captions, and effects.",
    icon: <Video />,
  },
  {
    label: "Conduct Workshop",
    description:
      "Organize workshops on Web Development, AI, and IoT for schools, colleges, and coding clubs.",
    icon: <Settings />,
  },
  {
    label: "Industrial Level Project",
    description:
      "Learn how to build and manage industry-grade software projects with version control and deployment.",
    icon: <Code />,
  },
  {
    label: "Promote Your Shop / Institute",
    description:
      "Boost visibility of your local shop or institute with digital promotion and custom strategy.",
    icon: <Megaphone />,
  },
];

const ServicesPage = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white to-purple-100 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-lato mt-10">
            Explore Our <span className="text-[#7a56d6]">Core Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto">
            We help students and professionals build real-world skills with hands-on tech and business solutions.
          </p>
          <p className="text-sm text-gray-500 italic mt-2">
            Based in <strong>Balaghat, Madhya Pradesh</strong>
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/60 backdrop-blur-md shadow-xl rounded-3xl p-6 border border-gray-200 transition duration-300 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-[#7a56d6] text-white text-xl rounded-full mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
