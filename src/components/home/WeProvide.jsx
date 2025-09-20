import React from "react";

const services = [
  {
    id: 1,
    title: "Instant Quote Generation",
    description:
      "Get real-time, accurate quotations in just a few clicks. No delays, no confusion — just fast, reliable results tailored to your needs.",
    image: "/images/Vector.png",
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
    <main className="container mx-auto px-4 sm:px-6 lg:px-30 py-10 lg:py-20">
      {/* Top Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          We provide the best
          <span className="text-blue-800"> Services</span>
        </h2>
        <p className="text-black max-w-md mx-auto text-base sm:text-lg">
          Accurate quotes at your fingertips. Simplifying your search for the
          best deal.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white border border-gray-200 shadow-lg rounded-2xl py-10 px-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Tag Container */}
            <div
              className={`absolute top-0 left-0 px-6 py-4 rounded-tl-xl rounded-br-xl ${service.bgColor}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="mt-12">
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
