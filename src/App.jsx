// import gsap from "gsap";
// import { ScrollTrigger, SplitText } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger, SplitText);
// Pages & Routes
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
