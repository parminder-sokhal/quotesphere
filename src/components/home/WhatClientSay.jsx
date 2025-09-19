import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { useSwipeCarousel } from "../../hook/useSwipeCarousel"; // your custom hook
import avatar1 from "/images/image1.png"; // adjust paths to your avatar images
import avatar2 from "/images/image2.png";
import avatar3 from "/images/image3.png";

const WhatClientSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: avatar1,
      description:
        "This agency completely transformed our online presence. The team was professional and attentive!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Smith",
      avatar: avatar2,
      description:
        "Great experience from start to finish. Highly recommended for any business!",
      rating: 4,
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: avatar3,
      description:
        "Creative, reliable, and effective. Exactly what we needed to grow!",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Smith",
      avatar: avatar2,
      description:
        "Great experience from start to finish. Highly recommended for any business!",
      rating: 4,
    },
    {
      id: 5,
      name: "Emma Wilson",
      avatar: avatar3,
      description:
        "Creative, reliable, and effective. Exactly what we needed to grow!",
      rating: 5,
    },
    // Add more if needed
  ];

  const totalSlides = testimonials.length;

  useEffect(() => {
    const updateSlidesPerScreen = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerScreen(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerScreen(2);
      } else {
        setSlidesPerScreen(1);
      }
    };

    updateSlidesPerScreen();
    window.addEventListener("resize", updateSlidesPerScreen);
    return () => window.removeEventListener("resize", updateSlidesPerScreen);
  }, []);

  const updateSlidePosition = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(totalSlides - slidesPerScreen);
    } else if (newIndex >= totalSlides) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    updateSlidePosition(currentIndex + slidesPerScreen);
  };

  const handlePrev = () => {
    updateSlidePosition(currentIndex - slidesPerScreen);
  };

  const handlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  return (
    <section className="container mx-auto mt-10 mb-20 px-4 sm:px-6 lg:px-30">
      <div className="text-center mb-10">
        <h2 className="text-5xl text-black font-bold">
          What
          <span className="text-[#0C056D]"> Clients </span>
          Say!
        </h2>
      </div>

      <div className="relative w-full">
        <div className="carousel overflow-hidden h-auto mx-10 py-10">
          <div
            className="carousel-body flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / slidesPerScreen
              }%)`,
            }}
            {...handlers}
          >
            {testimonials.map((client) => (
              <div
                key={client.id}
                className={`carousel-slide  flex-shrink-0 px-4 ${
                  slidesPerScreen === 3
                    ? "w-full md:w-1/2 lg:w-1/3"
                    : slidesPerScreen === 2
                    ? "w-full md:w-1/2"
                    : "w-full"
                }`}
              >
                <div className=" shadow-xl border border-gray-100 rounded-lg p-5 h-full flex flex-col justify-between">
                  {/* Top section: avatar + name */}
                  <div className="flex items-center mb-4">
                    <img
                      src={client.avatar}
                      alt={client.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <h3 className="text-lg font-semibold text-black">
                      {client.name}
                    </h3>
                  </div>

                  {/* Middle section: description */}
                  <p className="text-black text-xm flex-grow mb-4">
                    {client.description}
                  </p>

                  {/* Bottom section: stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <IoIosStar
                      size={24}
                        key={index}
                        className={`text-yellow-400 mr-1 ${
                          index < client.rating ? "opacity-100" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-blue-100 text-black p-2 rounded-full shadow-lg transition duration-200"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-blue-100 text-black p-2 rounded-full shadow-lg transition duration-200"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default WhatClientSay;
