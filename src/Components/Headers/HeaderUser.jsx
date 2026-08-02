import { Link } from "react-router-dom";
import { navLinksUser } from "../../Constents/Index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function HeaderUser() {
  useGSAP(() => {
    gsap.to(".navbar", {
      backgroundColor: "#00000020",
      backdropFilter: "blur(10px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "header", // Trigger based on the parent <header> wrapper
        start: "top top", // Starts when the top of header hits the top of viewport
        end: "+=100", // Animate over 100px of scrolling (adjust as needed)
        scrub: true, // Smoothly ties animation progress to scroll position
      },
    });
  });

  return (
    <header className="sticky top-4 z-50">
      <main className="navbar mx-auto w-[90%] max-w-7xl rounded-2xl border border-white/6">
        <div className="flex items-center justify-between px-6 py-4 ">
          <div className="logo text-4xl font-bold text-main">عَدْل</div>

          <nav className="flex gap-8 text-secondary text-2xl">
            {navLinksUser.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </nav>
          <Link
            to={"/login"}
            className="login-button cursor-pointer bg-secondary text-white w-35 h-13.75 rounded-[10px] flex-center text-xl"
          >
            تسجيل الدخول
          </Link>
        </div>
      </main>
    </header>
  );
}

export default HeaderUser;
