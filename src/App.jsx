import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
// Pages & Routes;
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import NotFound from "./pages/NotFound";
// New Request Components
import FirstStep from "./Components/NewRequest/FirstStep";
import SecondStep from "./Components/NewRequest/SecondStep";
import ThirdStep from "./Components/NewRequest/ThirdStep";
import FinalStep from "./Components/NewRequest/FinalStep";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/details/:id" element={<Details />} />
        <Route path="/newRequest/firstStep" element={<FirstStep />} />
        <Route path="/newRequest/secondStep" element={<SecondStep />} />
        <Route path="/newRequest/thirdStep" element={<ThirdStep />} />
        <Route path="/newRequest/finalStep" element={<FinalStep />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
