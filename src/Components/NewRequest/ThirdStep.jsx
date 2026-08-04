import HeaderUser from "../Headers/HeaderUser";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../RequestContext";

function ThirdStep() {
  const navigate = useNavigate();
  const { formData } = useRequest();

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
                  <p className="text-main text-2xl">
                    {formData.suggestion || "-"}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    الإدارة
                  </h3>
                  <p className="text-main text-2xl">
                    {formData.department || "-"}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    المبلغ المطلوب
                  </h3>
                  <p className="text-main text-2xl">{formData.budget || "-"}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-main text-3xl font-medium mb-8">
                    الأولوية
                  </h3>
                  <p className="text-main text-2xl">
                    {formData.priority || "-"}
                  </p>
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
                <div className="text-5xl text-main">⤴</div>
                {formData.attachment ? (
                  <span className="text-main underline text-lg">
                    {formData.attachment.name}
                  </span>
                ) : (
                  <span className="text-gray-500 text-lg">
                    لم يتم رفع أي ملف
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            className="bg-secondary text-white px-8 py-3 rounded-2xl hover:opacity-90 transition"
            onClick={() => navigate("/newRequest/secondStep")}
          >
            → السابق
          </button>
          <button
            className="bg-secondary text-white px-8 py-3 rounded-2xl hover:opacity-90 transition"
            onClick={() => navigate("/newRequest/finalStep")}
          >
            إنهاء
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdStep;
