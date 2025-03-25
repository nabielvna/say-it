import Link from "next/link";

const CounselorCard = ({ counselor }: { counselor: { id: number; name: string; image: string; bio: string } }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={counselor.image} alt={counselor.name} className="w-24 h-24 rounded-full mx-auto mb-2" />
      <h3 className="text-lg font-semibold">{counselor.name}</h3>
      <p className="text-sm text-gray-600">{counselor.bio}</p>
      <Link href={`/konseling/${counselor.id}`}>
        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">
          Lihat Profil
        </button>
      </Link>
    </div>
  );
};
