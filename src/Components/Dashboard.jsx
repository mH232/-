import { useEffect, useState } from "react";
import { db } from "../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import HeaderUser from "./Headers/HeaderUser";
import { FiSearch } from "react-icons/fi";
import Request from "./Request";
// For fetching the logged in user in order for displaying the relevant data (requests)
import { auth } from "../Config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const filterOptions = [
  { label: "الكل", value: "الكل" },
  { label: "مُعتمد", value: "معتمد" },
  { label: "مرفوض", value: "مرفوض" },
  { label: "قيد المراجعة", value: "قيد المراجعة" },
];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setRequests] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getRequestsList = async () => {
      try {
        const data = await getDocs(collection(db, "request"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRequests(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getRequestsList();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user:", currentUser);
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);
  const filteredRequests = requests.filter((item) => {
    const matchesFilter =
      activeFilter === "الكل" || item.status === activeFilter;
    const matchesSearch =
      item.requestNo.includes(searchQuery) ||
      item.purpose.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <HeaderUser />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-[#EFEFEF] text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-80 flex">
            <input
              type="text"
              placeholder="رقم البلاغ أو اسمه"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#EFEFEF] text-gray-700 placeholder-gray-400 pl-4 pr-10 py-2.5 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#3B82F6]/50 transition-all text-right"
            />
            <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((item) => (
            <Request
              id={item.id}
              purpose={item.purpose}
              requestNo={item.requestNo}
              data={item.date}
              status={item.status}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
