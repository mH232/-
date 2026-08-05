import { useState } from "react";
import { ChevronDown, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Components
import ProgressBar from "./ProgressBar";
import HeaderUser from "../Headers/HeaderUser";
import { useRequest } from "../RequestContext";

function SecondStep() {
  const navigate = useNavigate();
  const { formData, setFormData } = useRequest();
  const [errors, setErrors] = useState({
    budget: "",
    priority: "",
    attachment: "",
  });
  const validate = () => {
    const newErrors = {};

    if (!formData.budget.trim()) {
      newErrors.budget = "يرجى إدخال المبلغ المطلوب";
    } else if (Number(formData.budget) <= 0) {
      newErrors.budget = "يجب أن يكون المبلغ أكبر من صفر";
    }

    if (!formData.priority) {
      newErrors.priority = "يرجى اختيار أولوية الطلب";
    }
    // This is only if I want the attachment to be required
    // if (!attachment) {
    //   newErrors.attachment = "يرجى رفع ملف";
    // }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate("/newRequest/thirdStep");
    }
  };

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
                min="1000"
                placeholder="مبلغ الميزانية المطلوب"
                value={formData.budget}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    budget: e.target.value,
                  });

                  if (errors.budget) {
                    setErrors((prev) => ({
                      ...prev,
                      budget: "",
                    }));
                  }
                }}
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 outline-none ${
                  errors.budget ? "border-red-500" : "border-transparent"
                }`}
              />

              {errors.budget && (
                <p className="text-red-500 text-sm mt-2">{errors.budget}</p>
              )}
            </div>

            {/* Priority */}
            <div>
              <label className="block text-xl mb-3">الأولوية</label>

              <div className="relative">
                <select
                  value={formData.priority}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      priority: e.target.value,
                    });

                    if (errors.priority) {
                      setErrors((prev) => ({
                        ...prev,
                        priority: "",
                      }));
                    }
                  }}
                  className={`w-50 appearance-none bg-slate-100 rounded-full px-6 py-4 pr-12 outline-none ${
                    errors.priority ? "border border-red-500" : ""
                  }`}
                >
                  <option value="" disabled>
                    أولوية الطلب
                  </option>

                  <option value="عالية">عالية</option>
                  <option value="متوسطة">متوسطة</option>
                  <option value="منخفضة">منخفضة</option>
                </select>

                <ChevronDown
                  size={22}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-main pointer-events-none"
                />
              </div>

              {errors.priority && (
                <p className="text-red-500 text-sm mt-2">{errors.priority}</p>
              )}
            </div>

            {/* Upload */}
            <div className="flex justify-center mt-6">
              <label
                htmlFor="attachment"
                className="w-[70%] h-36 border-2 border-dashed border-blue-300 rounded-sm flex flex-col justify-center items-center cursor-pointer hover:bg-slate-50 transition"
              >
                <Upload size={38} className="text-main mb-3" />

                <span className="text-main text-lg">{formData.attachment}</span>

                <input
                  id="attachment"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      attachment: e.target.value,
                    });

                    if (errors.attachment) {
                      setErrors((prev) => ({
                        ...prev,
                        attachment: "",
                      }));
                    }
                  }}
                />
              </label>
            </div>

            {errors.attachment && (
              <div className="flex justify-center">
                <p className="text-red-500 text-sm mt-2">{errors.attachment}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="bg-secondary text-white px-8 py-3 rounded-2xl transition hover:opacity-90"
            onClick={() => navigate("/newRequest/firstStep")}
          >
            → السابق
          </button>

          <button
            className="bg-secondary text-white px-8 py-3 rounded-2xl transition hover:opacity-90 hover:cursor-pointer"
            onClick={handleNext}
          >
            التالي ←
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
