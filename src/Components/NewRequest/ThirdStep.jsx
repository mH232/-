import HeaderUser from "../Headers/HeaderUser";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
function ThirdStep() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50">
      <HeaderUser />
      <div className="main-section px-14 py-10">
        <h2 className="mb-8">مرحباً، بلدية الخبر</h2>

        <div className="bg-white rounded-3xl shadow-sm p-8">
          <ProgressBar currentStep={3} />

          <div className="mt-8 flex justify-center">
            <div className="w-[85%] border border-blue-300 rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-y-14">
                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    نوع الطلب
                  </h3>

                  <p className="text-main text-2xl">إنارة</p>
                </div>

                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    الإدارة
                  </h3>

                  <p className="text-main text-2xl">بلدية الخبر</p>
                </div>

                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    المبلغ المطلوب
                  </h3>

                  <p className="text-main text-2xl">٥٠٠٠٠</p>
                </div>

                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    الأولوية
                  </h3>

                  <p className="text-main text-2xl">متوسط</p>
                </div>
              </div>

              {/* Attachment Preview */}

              <div
                className="
                mt-14
                border-2
                border-dashed
                border-blue-400
                h-32
                flex
                flex-col
                justify-center
                items-center
              "
              >
                {/* Replace with your uploaded file preview */}
                <div className="text-5xl text-main">⤴</div>

                <span className="text-main underline text-lg">
                  المتطلبات.pdf
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-8">
          <button
            className="
            bg-secondary
            text-white
            px-8
            py-3
            rounded-2xl
            hover:opacity-90
            transition
          "
            onClick={() => {
              navigate("/newRequest/secondStep");
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
            hover:opacity-90
            transition
          "
            onClick={() => {
              navigate("/newRequest/finalStep");
            }}
          >
            إنهاء
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdStep;
