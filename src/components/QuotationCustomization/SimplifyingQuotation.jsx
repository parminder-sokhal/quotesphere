import React from "react";

const SimplifyingQuotation = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Images */}
      <img
        src="/images/bg1.png"
        alt="Background 1"
        className="absolute top-0 right-0 w-230 h-auto"
      />
      <img
        src="/images/bg2.png"
        alt="Background 2"
        className="absolute top-0 right-0 w-25 h-auto lg:block hidden"
      />
      <img
        src="/images/dots.png"
        alt="Background 2"
        className="absolute top-0 left-0 w-40 h-auto z-0 "
      />

      {/* Main Content Container */}
      <div className="container  mx-auto px-4 lg:px-30 py-10 lg:py-25 relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between  text-center lg:text-left">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 space-y-6 flex flex-col items-center lg:items-start justify-end my-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
            Simplifying
            <span className="text-[#0C056D]"> Quotation </span>
            Management
          </h1>
          <img
            src="/images/Simplifyingvetor.png"
            alt="Background 2"
            className="w-1/2"
          />

          <button className="bg-[#0C056D] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl transition duration-300">
            Generate
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3  relative flex justify-center items-center">
          {/* Small heading on top-right of the image for lg only */}

          {/* Main Image */}
          <img
            src="/images/quotationmanagement.png"
            alt="Creative Illustration"
            className="w-full max-w-xs sm:max-w-md lg:max-w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SimplifyingQuotation;
