import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full text-main px-8 py-10 font-sans">
      <div className="w-[90%] flex flex-row-reverse justify-between items-start mb-12">
        <div className="text-4xl font-bold tracking-wide">عَدْل</div>

        <div className="flex flex-col items-start gap-2 text-right">
          <h3 className="text-base font-semibold">للبلاغ عن مشكلات تقنية</h3>
          <a
            href="mailto:adel_support@gmail.com"
            className="flex items-center gap-2 text-sm underline hover:opacity-80 transition-opacity"
          >
            <FaEnvelope className="w-4 h-4 text-main" />
            <span>adel_support@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col items-start gap-2 text-right">
          <h3 className="text-base font-semibold">مواقع التواصل الاجتماعي</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://linkedin/adel.com"
              className="flex items-center gap-2 text-sm underline hover:opacity-80 transition-opacity"
            >
              <FaLinkedin className="w-4 h-4 text-main" />
              <span>https://linkedin/adel.com</span>
            </a>

            <a
              href="https://instagram/adel.com"
              className="flex items-center gap-2 text-sm underline hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="w-4 h-4 text-main" />
              <span>https://instagram/adel.com</span>
            </a>

            <a
              href="https://x/adel.com"
              className="flex items-center gap-2 text-sm underline hover:opacity-80 transition-opacity"
            >
              <FaXTwitter className="w-4 h-4 text-main" />
              <span>https://x/adel.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-right text-sm font-medium pt-4">
        <p>جميع الحقوق محفوظة @ عَدْل</p>
      </div>
    </footer>
  );
}

export default Footer;
