import React from "react";
import { FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="text-white bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: 'url("/images/footer.png")' }}
    >
      <div className=" container mx-auto px-6 sm:px-8 md:px-10 lg:px-30 pt-90 py-10">
        {/* Heading */}
        <div className="">
          <h2 className="text-5xl sm:text-6xl font-bold mb-15 text-center">
            Ready to generate?
          </h2>

          {/* Four Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 mb-10 justify-between items-start">
            {/* Section 1: Logo + Description */}
            <div>
              <div className="flex flex-row items-center gap-4">
                <img src="/logo/flogo.svg" alt="Logo" className="mb-4 w-12" />
                <img
                  src="/logo/quotesphere.png"
                  alt="Logo"
                  className="mb-4 w-46"
                />
              </div>
              <p className="text-md text-white ">
                QuoteSphere offers a fast, reliable, and professional way to
                generate custom quotations. With smart templates, easy sharing,
                and real-time editing, it simplifies your workflow—making quote
                creation efficient, accurate, and impressively client-ready
                every time.
              </p>
            </div>

            {/* Section 2: Important Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Important Links</h4>
              <ul className="space-y-2 text-xl items-start justify-center underline flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3: Other Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Other Products</h4>
              <ul className="space-y-2 items-start text-xl underline flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:underline">
                    TechTimes.ai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    TechTimes.co.in
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ToolBuzz.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 4: Newsletter */}
            <div>
              <h4 className="text-2xl font-semibold mb-2">
                Never miss an update
              </h4>
              <p className="text-sm  mb-4">
                Join our newsletter for fresh insights, feature releases, and
                special offers — just once a week.
              </p>
              <h5 className="text-md font-medium mb-2">
                Subscribe to Newsletter
              </h5>
              <div className="flex items-center border border-white rounded-xl px-3 py-2 mt-4">
                <FiMail size={22} className="text-white mr-2" />
                <input
                  type="email"
                  placeholder="Shoot an Email"
                  className="bg-transparent outline-none text-sm w-full placeholder-white"
                />
                <button className="ml-2 text-white hover:text-gray-300">
                  <FiSend size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white pt-6 flex flex-col md:flex-row justify-between text-sm text-white ">
            <span className="text-xl">© {new Date().getFullYear()} All rights reserved.</span>
            <div className="flex text-xl text-white flex-wrap gap-4 mt-2 md:mt-0 underline">
              <a href="#" className="hover:underline ">
                Disclaimer
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
