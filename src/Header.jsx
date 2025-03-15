const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://i.ytimg.com/vi/QoP5SUrs23w/maxresdefault.jpg"
    ></img>
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
