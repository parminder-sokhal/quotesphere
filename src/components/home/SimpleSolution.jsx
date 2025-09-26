import React from "react";

const steps = [
  {
    title: "Enter Client Details",
    description:
      "Add basic information like client name, company, contact details, and project title to personalize the quote.",
  },
  {
    title: "Add Services or Products",
    description:
      "Choose from predefined items or enter your own. Include quantity, price, and description for each item.",
  },
  {
    title: "Customize Your Quote",
    description:
      "Adjust layout, currency, tax rates, terms & conditions, or add a company logo for a professional and branded look.",
  },
  {
    title: "Generate & Share",
    description:
      "Instantly create a downloadable PDF or share the quote via email or link — ready for client approval.",
  },
];

const SimpleSolution = () => {
  return (
    <div className="bg-[#FFF6D9] overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[120px] py-12 lg:py-20 relative z-10">
        {/* Decorative Background Image */}
        <img
          src="/images/quotationsolutions.png"
          alt="Decor Bottom Right"
          className="absolute bottom-0 right-0 w-[28rem] sm:w-[35rem] md:w-[40rem] lg:w-[45rem] object-contain pointer-events-none z-0 "
        />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center pb-90 lg:pb-0">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Simple <span className="text-[#27247B]">Solution</span>
            </h2>
            <p className="text-lg md:text-xl text-black mb-10 max-w-2xl">
              We understand that no businesses are alike. That’s why we take the
              time to understand.
            </p>

            {/* Steps */}
            <div className="w-full max-w-2xl relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative  mb-10 last:mb-0 items-start "
                >
                  {/* Connecting line */}
                  {index !== steps.length - 1 && (
                    <span className="absolute left-6 top-5 -bottom-10 w-1 bg-[#27247B] lg:block hidden"></span>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Number circle */}
                    <div className="min-w-[38px] min-h-[38px] md:min-w-[54px] md:min-h-[54px] rounded-full bg-[#27247B] flex items-center justify-center text-white font-bold text-lg md:text-xl z-10">
                      {index + 1}
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <h3 className="flex text-lg md:text-xl font-bold text-black mb-1">
                        {step.title}
                      </h3>
                      <p className="flex text-start text-sm md:text-base text-black">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSolution;
