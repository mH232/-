import { useState } from "react";
import ContactImg from "../assets/Contact.png";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Arabic + English letters + spaces
    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "يرجى إدخال الاسم الأول";
    } else if (!nameRegex.test(formData.firstName.trim())) {
      newErrors.firstName = "يسمح بالحروف فقط";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "يرجى إدخال الاسم الأخير";
    } else if (!nameRegex.test(formData.lastName.trim())) {
      newErrors.lastName = "يسمح بالحروف فقط";
    }

    if (!formData.email.trim()) {
      newErrors.email = "يرجى إدخال البريد الإلكتروني";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }

    if (!formData.message.trim()) {
      newErrors.message = "يرجى كتابة الرسالة";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "يجب أن تحتوي الرسالة على 10 أحرف على الأقل";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log(formData);

    // Send to API / Firebase here
  };

  return (
    <div id="contact" className="main-section flex-center gap-32">
      <div className="contact-form rounded-2xl bg-white/70 border border-gray-300 backdrop-blur-md text-slate-800 p-10">
        <div className="flex gap-8">
          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="firstName" className="text-2xl">
              الاسم الأول
            </label>

            <input
              id="firstName"
              type="text"
              placeholder="الاسم الأول"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                });

                setErrors((prev) => ({
                  ...prev,
                  firstName: "",
                }));
              }}
              className={`w-60 h-7 rounded-xl ${
                errors.firstName ? "border border-red-500" : ""
              }`}
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="lastName" className="text-2xl">
              الاسم الأخير
            </label>

            <input
              id="lastName"
              type="text"
              placeholder="الاسم الأخير"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  lastName: e.target.value,
                });

                setErrors((prev) => ({
                  ...prev,
                  lastName: "",
                }));
              }}
              className={`w-60 h-7 rounded-xl ${
                errors.lastName ? "border border-red-500" : ""
              }`}
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="email" className="text-2xl">
            البريد الإلكتروني
          </label>

          <input
            id="email"
            type="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });

              setErrors((prev) => ({
                ...prev,
                email: "",
              }));
            }}
            className={errors.email ? "border border-red-500" : ""}
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="message" className="text-2xl">
            الرسالة
          </label>

          <textarea
            id="message"
            rows="8"
            placeholder="أخبرنا ما يدور في ذهنك؟"
            value={formData.message}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });

              setErrors((prev) => ({
                ...prev,
                message: "",
              }));
            }}
            className={errors.message ? "border border-red-500" : ""}
          />

          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 bg-secondary text-white px-8 py-3 rounded-xl hover:opacity-90 transition"
        >
          إرسال
        </button>
      </div>

      <div className="img w-100 h-100 hidden lg:block">
        <img src={ContactImg} alt="contact image" />
      </div>
    </div>
  );
}

export default Contact;
