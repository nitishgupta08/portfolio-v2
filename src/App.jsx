import Navbar from "./components/Navbar";
import Hero from "./screens/Hero";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contacts from "./screens/Contact";
import Footer from "./screens/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectArchive from "./screens/ProjectArchive";
import ReactGA from "react-ga";
import { useEffect } from "react";

ReactGA.initialize(import.meta.env.VITE_TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    ReactGA.pageview(location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-bgDark">
      <Routes>
        <Route
          path=""
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route path="project-archive" element={<ProjectArchive />} />
      </Routes>
    </div>
  );
}

export default App;
