import ProgressBar from "./ProgressBar";
import DoneImg from "../../assets/done.jpeg";
import HeaderUser from "../Headers/HeaderUser";
function FinalStep() {
  return (
    <div className="bg-slate-50">
      <HeaderUser />
      <div className="main-section px-14 py-10">
        <h2 className="mb-8">مرحباً، بلدية الخبر</h2>
        <div className="bg-white rounded-3xl shadow-sm p-8 h-[75vh]">
          <ProgressBar currentStep={4} />

          <div className="flex justify-center items-center h-[85%]">
            <div className="w-130 h-105 flex-center">
              <img src="" alt="" />
              <img
                src={DoneImg}
                alt="done image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalStep;
