import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto w-[90%] max-w-7xl rounded-2xl border border-white/20 bg-white/20 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 ">
          {/* <div className="login-button cursor-pointer bg-secondary text-white w-35 h-13.75 rounded-[10px] flex justify-center items-center text-xl"></div> */}
          <Link
            to={"/login"}
            className="login-button cursor-pointer bg-secondary text-white w-35 h-13.75 rounded-[10px] flex justify-center items-center text-xl"
          >
            تسجيل الدخول
          </Link>
          <nav>
            <ul className="flex gap-8 text-secondary text-xl">
              <li className="cursor-pointer">تواصل معنا</li>
              <li className="cursor-pointer">الخدمات</li>
              <li className="cursor-pointer">من نحن</li>
            </ul>
          </nav>

          <div className="logo text-4xl font-bold text-main">عَدْل</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
