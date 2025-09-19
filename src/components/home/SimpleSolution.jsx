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
    <div className="bg-[#FFF6D9] overflow-hidden">
      <div className="container relative mx-auto px-6 md:px-10 lg:px-[120px] pt-15 py-15">
        {/* Background Images Inside Container */}
        {/* <img
          src="/images/center-image.png"
          alt="Decor Center"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-32 md:w-40 h-32 md:h-40 object-contain pointer-events-none"
        /> */}
        <img
          src="/images/quotationsimplesolution.png"
          alt="Decor Bottom Right"
          className="absolute bottom-0 right-0 w-[38rem] md:w-[45rem] object-contain pointer-events-none"
        />

        {/* Content Section */}
        <div className="flex flex-col lg:gap-10 gap-40">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Simple <span className="text-[#27247B]">Solution</span>
            </h2>
            <p className="text-lg md:text-xl text-black mb-10 w-full lg:w-2/3">
              We understand that no businesses are alike. That’s why we take the
              time to understand.
            </p>

            {/* Steps */}
            <div className="relative ">
              {steps.map((step, index) => (
                <div  
                  key={index}
                  className="mb-10 flex items-start gap-6 relative"
                >
                  {/* Circle with number */}
                  <div className="min-w-[38px] min-h-[38px] md:min-w-[54px] md:min-h-[54px] rounded-full bg-[#27247B] flex items-center justify-center text-white font-bold text-lg md:text-xl z-10">
                    {index + 1}
                  </div>

                  {/* Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[16px] md:left-[25px] top-[45px] md:top-[50px] h-15 md:h-20 w-1 bg-[#27247B] z-0"></div>
                  )}

                  {/* Text */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">
                      {step.title}
                    </h3>
                    <p className="text-md md:text-xl text-black">
                      {step.description}
                    </p>
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
