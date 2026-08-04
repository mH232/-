import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderUser from "../Headers/HeaderUser";
import ProgressBar from "./ProgressBar";
import { useRequest } from "../RequestContext";

function FirstStep() {
  const navigate = useNavigate();

  const { formData, setFormData } = useRequest();

  const [errors, setErrors] = useState({
    suggestion: "",
    department: "",
  });

  const validate = () => {
    const newErrors = {};

    // Arabic + English letters + spaces only
    const textRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;

    if (!formData.suggestion.trim()) {
      newErrors.suggestion = "يرجى إدخال نوع الطلب";
    } else if (!textRegex.test(formData.suggestion.trim())) {
      newErrors.suggestion = "يسمح بالحروف فقط";
    }

    if (!formData.department.trim()) {
      newErrors.department = "يرجى إدخال الإدارة";
    } else if (!textRegex.test(formData.department.trim())) {
      newErrors.department = "يسمح بالحروف فقط";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate("/newRequest/secondStep");
    }
  };

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
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 focus:outline-none ${
                  errors.suggestion ? "border-red-500" : "border-transparent"
                }`}
                value={formData.suggestion}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    suggestion: e.target.value,
                  });

                  if (errors.suggestion) {
                    setErrors((prev) => ({
                      ...prev,
                      suggestion: "",
                    }));
                  }
                }}
              />

              {errors.suggestion && (
                <p className="text-red-500 text-sm mt-2">{errors.suggestion}</p>
              )}
            </div>

            {/* Suggestions */}
            <div>
              <label className="block text-xl mb-4">اقتراحات</label>

              <div className="flex justify-start gap-4 flex-wrap">
                {["إنارة", "طرقات", "حدائق"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="px-7 py-2 rounded-xl bg-slate-100 text-main hover:bg-main hover:text-white transition"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        suggestion: item,
                      });

                      setErrors((prev) => ({
                        ...prev,
                        suggestion: "",
                      }));
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
                className={`w-full bg-slate-100 border rounded-lg px-4 py-3 focus:outline-none ${
                  errors.department ? "border-red-500" : "border-transparent"
                }`}
                value={formData.department}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    department: e.target.value,
                  });

                  if (errors.department) {
                    setErrors((prev) => ({
                      ...prev,
                      department: "",
                    }));
                  }
                }}
              />

              {errors.department && (
                <p className="text-red-500 text-sm mt-2">{errors.department}</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button className="bg-secondary/30 text-white px-8 py-3 rounded-2xl">
            → السابق
          </button>

          <button
            className="bg-secondary text-white px-8 py-3 rounded-2xl hover:opacity-90 transition hover:cursor-pointer"
            onClick={handleNext}
          >
            التالي ←
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
