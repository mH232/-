import HeaderUser from "./Headers/HeaderUser";
import { useParams } from "react-router-dom";
import { db } from "../Config/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-main font-medium">{label}</span>
    <span className="text-gray-700">{value ?? "-"}</span>
  </div>
);

function Details() {
  const { id } = useParams();

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRequest() {
      try {
        console.log("Route id:", id);

        const docRef = doc(db, "request", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = {
            id: docSnap.id,
            ...docSnap.data(),
          };

          console.log("Fetched document:", data);

          setRequest(data);
        } else {
          console.log("No document found");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getRequest();
    }
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!request) {
    return <div className="p-10 text-center">Request not found.</div>;
  }

  return (
    <div className="main-section h-[120vh]">
      <HeaderUser />

      <main className="max-w-6xl mx-auto py-10 px-6">
        <div className="bg-white rounded-3xl shadow-lg p-12">
          {/* First half */}
          <div className="grid grid-cols-3 gap-16">
            <section>
              <h2>معلومات الطلب</h2>

              <DetailRow label="رقم الطلب" value={request.requestNo} />

              <DetailRow label="الحالة" value={request.status} />

              <DetailRow
                label="آخر تحديث"
                value={
                  request.Date
                    ? request.Date.toDate().toLocaleDateString("ar-SA")
                    : "-"
                }
              />
            </section>

            <section>
              <h2>تفاصيل الميزانية</h2>

              <DetailRow label="غرض الميزانية" value={request.purpose} />

              <DetailRow
                label="الميزانية المطلوبة"
                value={request.requestedBudget}
              />
            </section>

            <section>
              <h2>المرفقات</h2>

              <div className="text-secondary underline flex flex-col">
                {request.attachments?.length ? (
                  request.attachments.map((file, index) => (
                    <a key={index} href="#">
                      {file.name}
                    </a>
                  ))
                ) : (
                  <span>لا توجد مرفقات</span>
                )}
              </div>
            </section>
          </div>

          {/* Second half */}
          <div className="grid grid-cols-3 gap-16 mt-16">
            <section>
              <h2>معلومات الجهة مقدمة الطلب</h2>

              <DetailRow label="البلدية" value={request.municipalityId} />

              <DetailRow label="الإدارة" value="الإدارة العامة" />

              <DetailRow label="مقدم الطلب" value={request.person} />

              <DetailRow label="الأولوية" value={request.priority} />
            </section>

            <section>
              <h2>مبررات الطلب</h2>

              <p className="leading-9 text-right text-gray-700">
                {request.reason || "-"}
              </p>
            </section>

            <section>
              <h2>ملاحظات</h2>

              <p className="text-right text-gray-700">{request.notes || "-"}</p>
            </section>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <h2 className="text-secondary text-3xl text-center font-semibold mb-10">
              سجل انتقال الطلب
            </h2>

            <div className="flex justify-between items-center relative max-w-3xl mx-auto">
              <div className="absolute w-full h-1 bg-secondary top-4" />

              {["مرسل", "قيد مراجعة المحلل", "قيد مراجعة الإدارة", "معتمد"].map(
                (step, index) => (
                  <div
                    key={step}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex-center ${
                        index < 3
                          ? "bg-secondary text-white"
                          : "bg-white border text-gray-400"
                      }`}
                    >
                      ✓
                    </div>

                    <span className="mt-4 text-sm text-main">{step}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Details;
