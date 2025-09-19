import React from "react";

const WeCreate = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Images */}
      <img
        src="/images/bg1.png"
        alt="Background 1"
        className="absolute top-0 right-0 w-auto h-full z-0 opacity-60"
      />
      <img
        src="/images/bg2.png"
        alt="Background 2"
        className="absolute top-0 right-0 w-auto h-full z-0 opacity-80"
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 lg:px-30 py-15 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight w-2/3">
            We Create 
            <span className="text-[#0C056D]"> Solutions </span>
             for your business
          </h1>
          <p className="text-black font-semibold sm:text-lg w-4/5">
            We combine expertise, speed, and innovation to deliver tailored
            solutions. Our user-friendly platform, responsive support, and
            commitment to quality ensure reliable, efficient, and satisfying
            results —every time.
          </p>
          <button className="bg-[#0C056D] text-white px-10 py-4 rounded-xl  transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative">
          {/* Small heading on top-right of the image */}
          <div className="absolute top-8 right-0  px-3 py-1 rounded text-3xl sm:hidden lg:block font-semibold text-black ">
            Want to generate<br/>
            <span className="text-[#0C056D] font-semibold justify-center flex "> Quotation?</span>
          </div>

          {/* Main Image */}
          <img
            src="/images/quotationarrow.png"
            alt="Creative Illustration"
            className="w-28 h-auto absolute top-20 right-40  "
          />
          <img
            src="/images/quotationbanner.png"
            alt="Creative Illustration"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default WeCreate;
