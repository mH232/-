// This is just a helper js file
// Its main concern is to generate/delete instances of request collection in the firebase

import { db } from "./Firebase.js";
import { writeBatch, getDocs, doc, collection } from "firebase/firestore";

const municipalities = [
  { id: "dammam", name: "بلدية الدمام" },
  { id: "khobar", name: "بلدية الخبر" },
  { id: "qatif", name: "بلدية القطيف" },
  { id: "jubail", name: "بلدية الجبيل" },
  { id: "ras-tanura", name: "بلدية رأس تنورة" },
  { id: "abqaiq", name: "بلدية بقيق" },
  { id: "khafji", name: "بلدية الخفجي" },
  { id: "nairiyah", name: "بلدية النعيرية" },
];

const statuses = ["قيد المراجعة", "معتمد", "مرفوض"];

const purposes = [
  "إنشاء شبكة إنارة",
  "صيانة أعمدة الإنارة",
  "استبدال أعمدة الإنارة",
  "تطوير الحدائق",
  "صيانة الحدائق",
  "مشروع تشجير",
  "إعادة سفلتة الطرق",
  "صيانة الطرق",
  "إنشاء أرصفة",
  "تحسين البنية التحتية",
  "تطوير المرافق العامة",
  "مشاريع تجميل المدينة",
  "تحسين السلامة المرورية",
  "إنشاء مرافق خدمية",
  "أعمال تصريف مياه الأمطار",
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomBudget() {
  return Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000;
}
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
async function createRequests() {
  const batch = writeBatch(db);
  const requestsRef = collection(db, "request");
  for (let i = 1; i <= 100; i++) {
    const newDoc = doc(requestsRef);

    batch.set(newDoc, {
      Date: randomDate(new Date("2025-01-01"), new Date()),
      municipalityId: randomItem(municipalities).id,
      purpose: randomItem(purposes),
      requestNo: `req${String(i).padStart(3, "0")}`,
      requestedBudget: randomBudget(),
      status: randomItem(statuses),
    });
  }

  await batch.commit();
  console.log("100 requests created!");
}

async function deleteRequests() {
  const requestsRef = collection(db, "request");
  const snapshot = await getDocs(requestsRef);

  const batch = writeBatch(db);

  snapshot.forEach((document) => {
    batch.delete(document.ref);
  });

  await batch.commit();

  console.log(`${snapshot.size} requests deleted!`);
}
// deleteRequests();
createRequests();
