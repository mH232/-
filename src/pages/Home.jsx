import Header from "../Components/Headers/Header";
import Hero from "../Components/Hero";
import { Services } from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div className="bg-linear-to-br from-[#EEF5FF] to-[#B4D4FF]">
      <Header />
      {/* <Header /> */}
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
