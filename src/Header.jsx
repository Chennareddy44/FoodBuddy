import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27IuFnOSegUNusrDJA3xJFDJ9haLasFSnvw&s"
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
