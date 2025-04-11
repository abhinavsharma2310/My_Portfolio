import React from "react";
// import cert1 from "../assets/certificates/cert1.png";
// import cert2 from "../assets/certificates/cert2.png";
// import cert3 from "../assets/certificates/cert3.png";

const certificates = [
  {
    name: "Full Stack Development",
    // image: cert1,
    link: "https://example.com/cert1",
  },
  {
    name: "Data Structures & Algorithms",
    // image: cert2,
    link: "https://example.com/cert2",
  },
  {
    name: "UI/UX Design",
    // image: cert3,
    link: "https://example.com/cert3",
  },
];

const CertificateCard = ({ name, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border-4 border-transparent bg-white shadow-md transition-transform hover:scale-105"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur opacity-75 group-hover:animate-spin-slow"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center rounded-2xl bg-white p-4">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-xl mb-2" />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </a>
  );
};

const CertificateSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div> */}
    </section>
  );
};

export default CertificateSection;
