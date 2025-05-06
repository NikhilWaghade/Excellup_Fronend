import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Gallary from './Pages/Gallary';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CourseDetail from './Components/CourseComponents/CourseDetail';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <main >
    {/* <Navbar/> */}
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={< Courses />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />

          {/* courses detail  */}
          <Route path="/courses/:slug" element={<CourseDetail />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
