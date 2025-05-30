import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./Pages/Courses";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseDetail from "./components/CourseComponents/CourseDetail";
import { DarkModeProvider } from "./context/DarkModeContext";
import MouseFollower from "./components/MouseFollower";
import { ReactLenis } from "lenis/react";
import ServicesPage from "./Pages/Services";
import Community from "./Pages/Community";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          {/* <MouseFollower /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />

            <Route path="/Services" element={<ServicesPage />} />
             <Route path="/community" element={<Community />} />
            
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/contact" element={<Contact />} />

            {/* courses detail  */}
            <Route path="/courses/:slug" element={<CourseDetail />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
