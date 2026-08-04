function ProgressBar({
  currentStep = 1,
  steps = ["البيانات الأولية", "التفاصيل", "مراجعة"],
}) {
  return (
    <div className="w-full flex items-center justify-center px-6 py-6">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const active = currentStep === stepNumber;
        const completed = currentStep > stepNumber;

        return (
          <div key={step} className="flex items-center">
            <div className="flex items-center gap-3">
              <div
                className={`
                  w-12 h-12 rounded-full
                  flex-center
                  text-lg
                  border
                  transition-all
                  ${
                    active
                      ? "border-main text-main"
                      : completed
                      ? "bg-main border-main text-white"
                      : "border-gray-400 text-gray-500"
                  }
                `}
              >
                {stepNumber}
              </div>

              <span
                className={`text-2xl ${
                  active
                    ? "text-main"
                    : completed
                    ? "text-main"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`
                  w-36 h-0.5 mx-6
                  ${completed ? "bg-main" : "bg-gray-300"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
