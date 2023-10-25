import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="https://dreamsrent.dreamguystech.com/html/assets/img/404.png"
          className="w-2/3 mx-auto"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-color-black">
            Oops! Page not found!
          </h1>
          <Link to="/" className="loginbtn mx-auto mt-5">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
