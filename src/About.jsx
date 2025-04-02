import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

      <img
        className="w-40 max-w-xs md:max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        alt="Andrew Tate - Cooking is for Poor People"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsP-1NLi2-rsR2lYaqhtcqMY1269UklbI5w&s"
      />

      <div className="mt-4 w-full max-w-3xl text-center text-lg text-gray-700">
        <p className="font-semibold">
          "Cooking is for poor people" –{" "}
          <span className="italic">Andrew Tate</span>
        </p>
        <p className="mt-2">
          That's why we made this app—so you never have to cook again. Real Gs
          <strong> order food</strong>, they don’t waste time in the kitchen.
          💪🔥😂
        </p>
      </div>

      <div className="mt-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default About;
