import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27IuFnOSegUNusrDJA3xJFDJ9haLasFSnvw&s"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>{isOnline ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          {isLoggedIn ? (
            <button
              onClick={() => setLoggedIn(false)}
              className="search-button"
            >
              Log In
            </button>
          ) : (
            <button onClick={() => setLoggedIn(true)} className="search-button">
              Log Out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
