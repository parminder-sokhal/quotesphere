// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/home/homepage";
import QuotationCustomizationpage from "./pages/QuotationCustomization/QuotationCustompage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quotation-customization" element={<QuotationCustomizationpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
