import { useNavigate } from "react-router-dom";
const Request = (props) => {
  const navigate = useNavigate();
  console.log(props.id);
  return (
    <div
      key={props.id}
      onClick={() => navigate(`/dashboard/details/${props.id}`)}
      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 transition-all hover:shadow-md hover:cursor-pointer"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500 font-medium">طلب رقم</span>
        <span className="text-secondary font-semibold">{props.requestNo}</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500 font-medium">غرض الطلب</span>
        <span className="text-secondary font-semibold">{props.purpose}</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500 font-medium">تاريخ تقديم</span>
        <span className="text-secondary font-semibold">{props.date}</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500 font-medium">حالة الطلب</span>
        <span className="text-secondary font-semibold">{props.status}</span>
      </div>
    </div>
  );
};

export default Request;
