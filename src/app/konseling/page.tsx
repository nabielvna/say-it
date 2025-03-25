import React from "react";
import CounselorCard from "@/components/CounselorCard";

const counselors = [
  {
    id: 1,
    name: "Vina",
    image: "https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg",
    packages: [
      { duration: "1 Hari", price: "Rp19.000" },
      { duration: "1 Minggu", price: "Rp105.000" },
      { duration: "1 Bulan", price: "Rp360.000" },
    ],
  },
  {
    id: 2,
    name: "Rizky",
    image: "https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg",
    packages: [
      { duration: "1 Hari", price: "Rp19.000" },
      { duration: "1 Minggu", price: "Rp105.000" },
      { duration: "1 Bulan", price: "Rp360.000" },
    ],
  },
  {
    id: 3,
    name: "Rafli",
    image: "https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg",
    packages: [
      { duration: "1 Hari", price: "Rp19.000" },
      { duration: "1 Minggu", price: "Rp105.000" },
      { duration: "1 Bulan", price: "Rp360.000" },
    ],
  },
];

const KonselingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pilih Konselor Anda</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {counselors.map((counselor) => (
          <CounselorCard key={counselor.id} counselor={counselor} />
        ))}
      </div>
    </div>
  );
};

export default KonselingPage;
