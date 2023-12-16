import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Freelance from "./pages/Freelance";
function App() {

  return (
    <>  
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/freelance" element={<Freelance />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
