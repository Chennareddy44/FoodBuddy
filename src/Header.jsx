import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <Link to="/">
    <img
      className="rounded-full w-16 m-2 border-4 border-white shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27IuFnOSegUNusrDJA3xJFDJ9haLasFSnvw&s"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between items-center px-6 py-2 bg-gradient-to-r from-red-500 to-red-800 shadow-xl">
      <Title />

      <div className="flex gap-3">
        <button className="px-3 py-1 font-bold text-white bg-gray-800 rounded-md shadow-md transition-all duration-300 hover:bg-gray-900 active:scale-95 cursor-pointer">
          {isOnline ? "✅ Online" : "🔴 Offline"}
        </button>

        {[
          { path: "/", label: "Home" },
          { path: "/About", label: "About" },
          { path: "/Contact", label: "Contact" },
          { path: "/Instamart", label: "Instamart" },
          { path: "/Cart", label: "Cart 🛒" },
        ].map(({ path, label }) => (
          <Link key={path} to={path}>
            <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-900 active:scale-95 cursor-pointer">
              {label}
            </button>
          </Link>
        ))}

        <button
          onClick={() => setLoggedIn(!isLoggedIn)}
          className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-md shadow-md transition-all duration-300 hover:bg-yellow-600 active:scale-95 cursor-pointer"
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
