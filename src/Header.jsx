import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <Link to="/">
    <img
      className="rounded-full w-16 m-3"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27IuFnOSegUNusrDJA3xJFDJ9haLasFSnvw&s"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-red-300 shadow-2xl">
      <Title />
      <ul className="flex p-6">
        <li className="m-2 px-5  bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold">
          {isOnline ? "✅" : "🔴"}
        </li>
        <li className="m-2 px-5 bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2 px-5 bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold">
          <Link to="/About">About</Link>
        </li>
        <li className="m-2 px-5 bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="m-2 px-5 bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold">
          <Link to="/Cart">Cart</Link>
        </li>
        {isLoggedIn ? (
          <button
            onClick={() => setLoggedIn(false)}
            className="bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold"
          >
            Log In
          </button>
        ) : (
          <button
            onClick={() => setLoggedIn(true)}
            className="bg-red-400 rounded-xl p-1 text-black cursor-pointer font-bold"
          >
            Log Out
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
