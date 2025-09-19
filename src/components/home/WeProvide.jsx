import React from "react";

const services = [
  {
    id: 1,
    title: "Instant Quote Generation",
    description:
      "Get real-time, accurate quotations in just a few clicks. No delays, no confusion — just fast, reliable results tailored to your needs.",
    image: "/images/Vector.png", // Replace with your PNG image path
    bgColor: "bg-[#EFC414]",
  },
  {
    id: 2,
    title: "Customizable Templates",
    description:
      "Add your branding, adjust taxes, currency, and terms effortlessly. Every quote looks professional and matches your business style.",
    image: "/images/Vector1.png",
    bgColor: "bg-[#00FFEA]",
  },
  {
    id: 3,
    title: "Easy Sharing & Tracking",
    description:
      "Download, email, or share your quote link instantly. Keep track of when it's viewed or accepted with built-in tracking.",
    image: "/images/Vector2.png",
    bgColor: "bg-[#FB6036]",
  },
  {
    id: 4,
    title: "Secure & Professional",
    description:
      "Your data is encrypted and protected. Our platform ensures your quotes are not only precise but also safe and client-ready.",
    image: "/images/Vector3.png",
    bgColor: "bg-[#27247B]",
  },
];

const WeProvide = () => {
  return (
    <main className="container mx-auto px-4 lg:px-30 py-15 ">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          We provide the best
          <span className="text-blue-800"> Services</span>
        </h2>
        <p className="text-black max-w-sm mx-auto">
          Accurate quotes at your fingertips. Simplifying your search for the
          best deal.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white border border-gray-200 shadow-lg rounded-2xl py-12 px-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Tag Container */}
            <div
              className={`absolute top-0 left-0 px-10 py-6 rounded-tl-xl rounded-br-xl ${service.bgColor}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WeProvide;
