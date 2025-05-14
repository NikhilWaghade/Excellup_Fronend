import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
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
              <span className="text-black">excellup.hub@gmail.com</span>
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
              className="w-full p-3 rounded-lg bg-white/20 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#7a56d6] mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#7a56d6] mb-1">Message</label>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-white/20 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
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
  );
}
