import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-500 text-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img
              className="w-16 h-16 rounded-full"
              alt="FoodBuddy Logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27IuFnOSegUNusrDJA3xJFDJ9haLasFSnvw&s"
            />
            <h2 className="text-4xl font-bold text-black">FoodBuddy</h2>
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/"
              className="text-black font-semibold text-lg hover:text-white cursor-pointer transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-black font-semibold text-lg hover:text-white cursor-pointer transition duration-300"
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="text-black font-semibold text-lg hover:text-white cursor-pointer transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/Instamart"
              className="text-black font-semibold text-lg hover:text-white cursor-pointer transition duration-300"
            >
              Instamart
            </Link>
            <Link
              to="/Cart"
              className="text-black font-semibold text-lg hover:text-white cursor-pointer transition duration-300"
            >
              Cart 🛒
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-black">
          <p>&copy; 2025 FoodBuddy™. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
