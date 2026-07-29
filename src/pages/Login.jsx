import Header from "../Components/Header";
import { Auth } from "../Config/Auth";
function Login() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#EEF5FF] to-[#B4D4FF]">
        <Auth />
      </div>
    </>
  );
}

export default Login;
