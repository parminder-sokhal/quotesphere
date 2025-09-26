import React from "react";
import Quotation from "../home/quotations"; // Adjust the path if needed

const QuotationextendPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Your Customized Quotation</h1>

      {/* Show read-only quotation with data from Redux */}
      <Quotation readOnly={true} />

      {/* You can also show modal or more components here */}
      <div className="mt-10">
        {/* Additional modals or customization UI */}
        <p className="text-center text-gray-600">More customization options coming soon...</p>
      </div>
    </div>
  );
};

export default QuotationextendPage;
