"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Definisikan tipe data paket konseling
interface CounselingPackage {
  duration: string;
  price: string;
}

// Definisikan tipe data untuk seorang konselor
interface Counselor {
  id: number;
  name: string;
  image: string;
  packages: CounselingPackage[];
}

// Komponen `CounselorCard` dengan tipe props yang sudah diperbaiki
const CounselorCard: React.FC<{ counselor: Counselor }> = ({ counselor }) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-all duration-200 hover:shadow-xl">
      {/* Gambar Profil Konselor */}
      <img src={counselor.image} alt={counselor.name} className="w-32 h-32 rounded-full object-cover mb-3" />

      {/* Nama Konselor yang bisa diklik untuk melihat profil */}
      <h2
        className="text-lg font-bold text-blue-600 cursor-pointer hover:underline"
        onClick={() => router.push(`/konseling/${counselor.id}`)}
      >
        {counselor.name}
      </h2>

      {/* Daftar Paket Konseling */}
      <div className="mt-3 w-full">
        <h3 className="text-sm font-semibold mb-2">Paket Konseling:</h3>
        <ul className="w-full text-sm">
          {counselor.packages.map((pkg: CounselingPackage, index: number) => (
            <li key={index} className="flex justify-between border-b py-1">
              <span>{pkg.duration}</span>
              <span className="font-semibold">{pkg.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tombol Pesan Sekarang */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition-all duration-200 hover:bg-blue-600 active:scale-95"
        onClick={() => alert(`Anda memilih ${counselor.name}`)}
      >
        Pesan Sekarang
      </button>
    </div>
  );
};

export default CounselorCard;
