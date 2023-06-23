import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { user, userLogIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("User login successful !!!");
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Encountered an error !!!", error.message);
        console.log(error.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleLogIn}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            email="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            password="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="">
          {success && (
            <p className="text-green-500 font-bold">
              <i>{success}</i>{" "}
            </p>
          )}

          {error && (
            <p className="text-red-500 font-bold">
              <i>{error}</i>{" "}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center mt-2 w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
