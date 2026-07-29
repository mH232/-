import Header from "../Components/Header";
import Hero from "../Components/Hero";
import { Services } from "../Components/Services";
import Contact from "../Components/Contact";

function Home() {
  return (
    <div className="h-[5000px] bg-linear-to-br from-[#EEF5FF] to-[#B4D4FF]">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
