import { Outlet } from "react-router";

const About = () => {
  return (
    <>
      <img
        className="aboutus"
        alt="image of truth"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsP-1NLi2-rsR2lYaqhtcqMY1269UklbI5w&s"
      />
      <Outlet />
    </>
  );
};

export default About;
