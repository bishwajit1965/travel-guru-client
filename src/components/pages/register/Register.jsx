import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("User creation successful !!!");
      })
      .catch((error) => {
        console.log(error.message);
        setError("Encountered an Error !!!");
      });
    setSuccess("");
    setError("");
    form.reset();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-8">Sign up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
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
        <div className="flex justify-center w-full mt-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
