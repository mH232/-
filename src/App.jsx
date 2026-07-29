import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
// Pages & Routes
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { Services } from "./Components/Services";

function App() {
  return (
    // bg-linear-to-br from-[#EEF5FF] to-[#B4D4FF]
    <div className="h-[5000px] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
