import { ChevronDown, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Components
import ProgressBar from "./ProgressBar";
import HeaderUser from "../Headers/HeaderUser";
function SecondStep() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50">
      <HeaderUser />
      <div className="main-section px-14 py-10">
        <h2 className="mb-8">مرحباً، بلدية الخبر</h2>

        <div className="bg-white rounded-3xl shadow-sm p-8">
          <ProgressBar currentStep={2} />

          <div className="mt-10 space-y-8">
            {/* Budget */}
            <div>
              <label className="block text-xl mb-3">المبلغ المطلوب</label>
              <input
                type="number"
                placeholder="مبلغ الميزانية المطلوب"
                className="w-full bg-slate-100 border-0 outline-none"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block text-xl mb-3">الأولوية</label>

              <div className="relative">
                <select
                  defaultValue=""
                  className="
                  w-50
                  appearance-none
                  bg-slate-100
                  rounded-full
                  px-6
                  py-4
                  pr-12
                  border-0
                  outline-none
                  text-gray-500
                "
                >
                  <option value="" disabled>
                    أولوية الطلب
                  </option>

                  <option>عالية</option>
                  <option>متوسطة</option>
                  <option>منخفضة</option>
                </select>

                <ChevronDown
                  size={22}
                  className="
                  absolute
                  left-6
                  top-1/2
                  -translate-y-1/2
                  text-main
                  pointer-events-none
                "
                />
              </div>
            </div>

            {/* Upload */}
            <div className="flex justify-center mt-6">
              <label
                htmlFor="attachment"
                className="
                w-[70%]
                h-36
                border-2
                border-dashed
                border-blue-300
                rounded-sm
                flex
                flex-col
                justify-center
                items-center
                cursor-pointer
                hover:bg-slate-50
                transition
              "
              >
                <Upload size={38} className="text-main mb-3" />

                <span className="text-main text-lg">اضغط لتمسح الملفات</span>

                <input id="attachment" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="
            bg-secondary
            text-white
            px-8
            py-3
            rounded-2xl
            transition
            hover:opacity-90
          "
            onClick={() => {
              navigate("/newRequest/firstStep");
            }}
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
            transition
            hover:opacity-90
          "
            onClick={() => {
              navigate("/newRequest/thirdStep");
            }}
          >
            التالي ←
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
