import React from "react";

const OurAgency = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-30 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our
            <span className="text-[#0C056D]"> Agency</span>
          </h1>
          <p className="text-black text-xl mb-6">
            At <strong> QuoteSphere </strong>, we simplify the way businesses
            handle quotations and billing. Our platform is designed to help
            professionals generate accurate, customized quotes and invoices in
            minutes — saving time, reducing errors, and improving client trust.
            <br /> We combine modern technology with a deep understanding of
            business needs to deliver fast, reliable, and professional quoting
            solutions. Whether you're a freelancer, small business, or growing
            enterprise, our tools adapt to your workflow and help you close
            deals with confidence.
            <br />
            <strong>Smart. Simple. Seamless.</strong> That’s how we power your
            business growth.
          </p>
          <button className="bg-[#0C056D] text-white px-10 py-4 rounded-xl hover:bg-blue-800 transition duration-300">
            Read More
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/quotationouragency.png"
            alt="Our Agency"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OurAgency;
