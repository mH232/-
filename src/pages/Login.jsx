import Header from "../Components/Headers/Header";
import { Auth } from "../Config/Auth";
import LandingPageImg from "../assets/LandingPage.png";

function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-[#EEF5FF] to-[#B4D4FF] ">
      <Header />
      <main className=" flex-center p-6 lg:p-12">
        <div className="w-full max-w-5xl flex-center lg:justify-between gap-12">
          <div className="w-full lg:w-1/2 flex-center">
            <Auth />
          </div>
          <div className="img w-full lg:w-1/2 items-center justify-center min-h-75 hidden lg:flex">
            <img src={LandingPageImg} alt="Landing page image" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
