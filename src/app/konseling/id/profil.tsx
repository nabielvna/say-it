import Link from "next/link";

// Static data for demonstration (replace with API/database fetch in a real app)
const counselors = [
  {
    id: 1,
    name: "Vina",
    image: "https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg",
    bio: "Experienced counselor with 5 years of expertise.",
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
    bio: "Passionate about mental health and well-being.",
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
    bio: "Dedicated to helping clients achieve their goals.",
    packages: [
      { duration: "1 Hari", price: "Rp19.000" },
      { duration: "1 Minggu", price: "Rp105.000" },
      { duration: "1 Bulan", price: "Rp360.000" },
    ],
  },
];

const CounselorProfilePage = ({ params }: { params: { id: string } }) => {
  // Find the counselor by ID
  const counselor = counselors.find((c) => c.id === parseInt(params.id));

  // Handle case where counselor is not found
  if (!counselor) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Counselor Not Found</h1>
        <Link href="/konseling">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">
            Back to Counselors
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{counselor.name}'s Profile</h1>
      <img src={counselor.image} alt={counselor.name} className="w-32 h-32 rounded-full mb-4" />
      <p className="text-gray-600 mb-4">{counselor.bio}</p>
      <h2 className="text-xl font-semibold mb-2">Packages</h2>
      <ul className="list-disc list-inside mb-4">
        {counselor.packages.map((pkg, index) => (
          <li key={index}>
            {pkg.duration}: {pkg.price}
          </li>
        ))}
      </ul>
      <Link href="/konseling">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">
          Back to Counselors
        </button>
      </Link>
    </div>
  );
};

export default CounselorProfilePage;