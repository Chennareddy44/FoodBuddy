import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Error {status}
      </h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">
        {statusText}
      </h2>

      <p className="text-xl text-gray-600 mb-6">
        "Go back to where you came from, you little clown..." (In Conor McGregor
        voice)
      </p>

      <p className="font-bold text-xl text-gray-800 mb-8">
        "Looks like you took a **wrong turn, little bro**... Real Gs don’t get
        lost on websites. 💀" – <span className="italic">Andrew Tate</span>
      </p>

      <Link to={"/"}>
        <button className="bg-red-600 text-white text-lg py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-red-700 hover:scale-105 cursor-pointer">
          Go To Home
        </button>
      </Link>

      <img
        className="w-full max-w-md mt-10 rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
        alt="What! logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tjmPddM5pM7Bb98FVHw5G9Ug5HG3He8OgpSffXtJe1xPaMDqNYew6zS9rVp29jZg088&usqp=CAU"
      />
    </div>
  );
};

export default ErrorPage;
