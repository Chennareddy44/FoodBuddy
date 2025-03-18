import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <>
      <h1>{status}</h1>
      <h2>{statusText}</h2>
      <p>Go back to where you came from you little clown....(in conor voice)</p>
      <Link to={"/"}>
        <button className="search-button">Go To Home</button>
      </Link>
      <img
        className="aboutus"
        alt="what! logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tjmPddM5pM7Bb98FVHw5G9Ug5HG3He8OgpSffXtJe1xPaMDqNYew6zS9rVp29jZg088&usqp=CAU"
      ></img>
    </>
  );
};

export default ErrorPage;
