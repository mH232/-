import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);
function Hero() {
  useGSAP(() => {
    const split = SplitText.create(".txt", {
      type: "words",
    });
    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  });

  return (
    <div
      id="about"
      className="h-screen flex-center bg-linear-to-br from-[#EEF5FF] to-[#B4D4FF]"
    >
      <div className="mx-auto w-[90%] max-w-7xl flex items-center justify-center lg:justify-between">
        <p className="txt text-5xl leading-16 text-main">
          رؤية شاملة لمؤشرات الأداء
          <br />
          لدعم قرارات مالية أكثر كفاءة
        </p>
        <img
          src="../../src/assets/LandingPage.png"
          alt="Landing Page Image"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}

export default Hero;
