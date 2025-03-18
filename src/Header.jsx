import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27IuFnOSegUNusrDJA3xJFDJ9haLasFSnvw&s"
    ></img>
  </Link>
);

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/AboutUs">
            <li>About Us</li>
          </Link>
          <Link to="/ContactUs">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
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
