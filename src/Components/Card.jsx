import { useEffect, useState } from "react";
import { db } from "../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";

function Card() {
  const [municipality, setMunicipality] = useState([]);

  useEffect(() => {
    const getMunicipalityList = async () => {
      try {
        const data = await getDocs(collection(db, "municipality"));

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setMunicipality(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getMunicipalityList();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {municipality.map((mun) => (
        <div key={mun.id} className="group w-72 h-72 perspective-[1000px]">
          <div className="relative h-full w-full rounded-2xl duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
            {/* Front side of the card, I may put pictures latter on if I find good ones */}
            <div className="absolute inset-0 rounded-2xl bg-white/70 border border-gray-300 backdrop-blur-md text-slate-800  flex items-center justify-center text-2xl font-bold backface-hidden">
              {mun.name}
            </div>
            {/* Back side */}
            <div className="absolute inset-0 rounded-2xl bg-[#1E3A8A] text-white flex flex-col items-center justify-center gap-4 transform-[rotateY(180deg)] backface-hidden">
              {/* These are just the basic info of municipality, just to test the firebase */}
              <h2 className="text-2xl font-bold">{mun.name}</h2>
              <p>عدد الأحياء: {mun.neighbors}</p>
              <p>إجمالي المشاريع: {mun.total_projects}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
