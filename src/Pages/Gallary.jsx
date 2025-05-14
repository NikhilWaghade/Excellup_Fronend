import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?w=600&auto=format&fit=crop&q=60",
    caption: "Classroom at Coding Bootcamp – New York",
  },
  {
    url: "https://images.unsplash.com/photo-1558023607-c8b91ed42cab?w=600&auto=format&fit=crop&q=60",
    caption: "Students collaborating – London",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661638457252-fa8944066a8f?w=600&auto=format&fit=crop&q=60",
    caption: "Final project review – Berlin",
  },
  {
    url: "https://images.unsplash.com/photo-1519232730744-7b331cd1c462?w=600&auto=format&fit=crop&q=60",
    caption: "Code Sprint – San Francisco",
  },
  {
    url: "https://images.unsplash.com/photo-1591062182630-2cae7655ed1b?w=600&auto=format&fit=crop&q=60",
    caption: "Lab session – Bangalore",
  },
  {
    url: "https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?w=600&auto=format&fit=crop&q=60",
    caption: "Tech Talk – Singapore",
  },
  {
    url: "https://images.unsplash.com/photo-1709377598544-0c28bbe437bc?w=600&auto=format&fit=crop&q=60",
    caption: "Workshop with mentors – Toronto",
  },
  {
    url: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=600&auto=format&fit=crop&q=60",
    caption: "Project Showcase – Tokyo",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white from-black via-[#1a0033] to-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#7a56d6] mb-10">Gallery</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white/10"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCurrentIndex(null)}
            >
              <motion.img
                key={images[currentIndex].url}
                src={images[currentIndex].url}
                alt="Enlarged"
                className="max-w-full max-h-[75vh] rounded-xl shadow-2xl mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-lg font-medium text-center">
                {images[currentIndex].caption}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
