import { Link } from "react-router-dom";
import { navLinks } from "../Constents/Index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Header() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "main",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000020",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <header className="sticky top-4 z-50">
      <main className="navbar mx-auto w-[90%] max-w-7xl rounded-2xl border border-white/6">
        <div className="flex items-center justify-between px-6 py-4 ">
          <div className="logo text-4xl font-bold text-main">عَدْل</div>

          <nav className="flex gap-8 text-secondary text-2xl">
            {navLinks.map((link) => (
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

export default Header;
