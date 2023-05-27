import Navbar from "./components/Navbar";
import Hero from "./screens/Hero";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contacts from "./screens/Contact";
import Footer from "./screens/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectArchive from "./screens/ProjectArchive";

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <div className="bg-bgLight dark:bg-bgDark">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contacts />
            <Footer />
          </div>
        }
      />
      <Route path="project-archive" element={<ProjectArchive />} />
    </Routes>
  );
}

export default App;
