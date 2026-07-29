import ContactImg from "../assets/Contact.png";
function Contact() {
  return (
    <div id="contact" className="main-section flex-center gap-32">
      <div className="contact-form rounded-2xl bg-white/70 border border-gray-300 backdrop-blur-md text-slate-800 p-10">
        <div className="flex gap-8 ">
          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="firstName" className="text-2xl">
              الاسم الأول
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="الاسم الأول"
              className=" w-60 h-7 rounded-xl"
            />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="lastName" className="text-2xl">
              الاسم الأخير
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="الاسم الأخير"
              className=" w-60 h-7 rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="email" className="text-2xl">
            البريد الإلكتروني
          </label>
          <input id="email" type="email" placeholder="البريد الإلكتروني" />
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="message" className="text-2xl">
            الرسالة
          </label>
          <textarea
            id="message"
            rows="8"
            placeholder="أخبرنا ما يدور في ذهنك؟"
          />
        </div>
      </div>
      <div className="img w-100 h-100 ">
        <img src={ContactImg} alt="" />
      </div>
    </div>
  );
}

export default Contact;
