import { useState } from "react";
import HeaderUser from "../Headers/HeaderUser";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

function FirstStep() {
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState("");
  const [department, setDepartment] = useState("");
  return (
    <div className="bg-slate-50">
      <HeaderUser />
      <div className="main-section px-14 py-10">
        <h2 className="mb-8">مرحباً، بلدية الخبر</h2>
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <ProgressBar currentStep={1} />

          <div className="mt-10 space-y-8">
            {/* Request Type */}
            <div>
              <label className="block text-xl mb-3">نوع الطلب</label>
              <input
                type="text"
                placeholder="نوع الطلب"
                className="w-full bg-slate-100 border-0 focus:outline-none"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
            </div>
            {/* Suggestions */}
            <div>
              <label className="block text-xl mb-4">اقتراحات</label>
              <div className="flex justify-start gap-4 flex-wrap">
                {["إنارة", "طرقات", "حدائق"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="
                    px-7
                    py-2
                    rounded-xl
                    bg-slate-100
                    text-main
                    hover:bg-main
                    hover:text-white
                    transition
                  "
                    onClick={() => {
                      setSuggestion(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* Department */}
            <div>
              <label className="block text-xl mb-3">الإدارة</label>
              <input
                type="text"
                placeholder="الإدارة"
                className="w-full bg-slate-100 border-0 focus:outline-none"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="
            bg-secondary/30
            text-white
            px-8
            py-3
            rounded-2xl
          "
          >
            → السابق
          </button>

          <button
            className="
            bg-secondary
            text-white
            px-8
            py-3
            rounded-2xl
            hover:opacity-90
            transition
            hover:cursor-pointer
          "
            onClick={() => {
              suggestion && department && navigate("/newRequest/secondStep");
            }}
          >
            التالي ←
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
