import React from "react";
import { Link } from "react-router-dom";
// Note that this component is completely AI generated (Gemini)
function NotFound() {
  return (
    <div className="main-section flex-center flex-col min-h-screen px-4 text-center">
      {/* Graphic Illustration */}
      <div className="mb-6">
        <svg
          width="140"
          height="160"
          viewBox="0 0 140 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {/* Paper Background with Shadow */}
          <path
            d="M20 15C20 9.47715 24.4772 5 30 5H95L120 30V135L110 125L100 135L90 125L80 135L70 125L60 135L50 125L40 135L30 125L20 135V15Z"
            fill="#E2E8F0"
            opacity="0.5"
          />
          {/* Main Paper Outline */}
          <path
            d="M15 10C15 4.47715 19.4772 0 25 0H90L115 25V140L105 130L95 140L85 130L75 140L65 130L55 140L45 130L35 140L25 130L15 140V10Z"
            fill="white"
            stroke="var(--color-main)"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Folded Corner */}
          <path
            d="M90 0V25H115"
            fill="none"
            stroke="var(--color-main)"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* "Dead" Face Details - Left Eye (X) */}
          <path
            d="M40 45L54 59M54 45L40 59"
            stroke="var(--color-main)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* "Dead" Face Details - Right Eye (X) */}
          <path
            d="M76 45L90 59M90 45L76 59"
            stroke="var(--color-main)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Mouth Line */}
          <path
            d="M45 80H85"
            stroke="var(--color-main)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Tongue Out */}
          <path
            d="M70 80C70 88.2843 63.2843 95 55 95C46.7157 95 40 88.2843 40 80"
            fill="var(--color-secondary)"
            stroke="var(--color-main)"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-main tracking-wider mb-2 uppercase">
        404 ERROR
      </h1>

      {/* Subtitle Message */}
      <p className="text-slate-500 text-lg md:text-xl font-medium mb-8">
        الصفحة غير موجودة
      </p>

      {/* Action Button */}
      <Link
        to="/dashboard"
        className="bg-secondary hover:bg-main text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}

export default NotFound;
