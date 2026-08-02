import { auth, googleProvider } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative w-full max-w-md bg-[#B4D4FF]/30 backdrop-blur-sm border-2 border-[#1E40AF]/40 rounded-2xl p-8 text-right font-sans shadow-md">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-main text-white px-8 py-2 rounded-xl text-base font-medium shadow-sm">
        تسجيل الدخول
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <div>
          <input
            type="email"
            placeholder="اسم المستخدم"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 text-gray-700 placeholder-gray-400 px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#1E40AF] transition-all shadow-sm text-right"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-50 text-gray-700 placeholder-gray-400 px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#1E40AF] transition-all shadow-sm text-right"
          />
        </div>

        <button
          onClick={signIn}
          className="w-full bg-secondary hover:bg-[#2563EB] text-white py-3 rounded-full font-medium shadow-md transition-all mt-2 cursor-pointer"
        >
          تسجيل الدخول
        </button>

        <button
          onClick={signInGoogle}
          className="w-full bg-slate-50 hover:bg-gray-50 text-gray-700 py-3 rounded-full font-medium shadow-sm border border-gray-200 flex items-center justify-center gap-3 transition-all cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          <span>تسجيل الدخول بواسطة Google</span>
        </button>
      </div>
    </div>
  );
};
