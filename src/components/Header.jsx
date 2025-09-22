import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm ">
      <div className="container mx-auto lg:px-32 p-5 lg:py-6  flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/logo/logo.png" alt="Logo" className="h-15 w-auto " />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center lg:text-2xl font-semibold gap-2">
          <Link to="/" className="text-black hover:text-[#27247B]">
            Home
          </Link>
          <Link to="/blog" className="text-black hover:text-[#27247B]">
            Blog
          </Link>
          <Link to="/aboutus" className="text-black hover:text-[#27247B]">
            About Us
          </Link>
          <Link to="/contactus" className="text-black hover:text-[#27247B]">
            Contact Us
          </Link>
          <Link
            to="/signup"
            className="bg-[#27247B] text-white px-5 py-3 rounded-xl hover:bg-[#27247B]"
          >
            Sign Up
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Modal) */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-green-100 shadow-lg z-50 p-6 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-black text-lg hover:text-blue-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-black text-lg hover:text-blue-600"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/aboutus"
              className="text-black text-lg hover:text-blue-600"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contactus"
              className="text-black text-lg hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/signup"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
