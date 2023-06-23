import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Booking = () => {
  const bookingData = useLoaderData();
  const { name, image, description } = bookingData;

  return (
    <div className="md:mx-32 md:my-16 grid grid-cols-6 gap-16 justify-between items-center booking-container">
      <div className="relative col-span-4 h-96">
        <div className="md:absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-6xl font-bold">{name}</h1>
          <p className="mt-4">{description}</p>
        </div>

        <img
          src={image}
          alt=""
          className="object-cover w-full h-96 rounded-md mx-auto shadow-lg"
        />
        <Link to="/">
          <button className="bg-amber-600 absolute bottom-5 rounded-sm px-4 py-1 left-5 text-white font-bold inline-flex items-start">
            <FaArrowLeft className="w-4 h-4 mr-1 mt-1" /> Go Home
          </button>
        </Link>
      </div>
      <div className="col-span-2">
        <div className="md:flex md:justify-center md:items-center w-full">
          <form className="bg-white p-5 rounded-lg shadow-lg w-full">
            <div className="mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="origin"
              >
                Origin
              </label>
              <input
                className="border border-gray-400 p-1 w-full rounded-md"
                type="text"
                name="origin"
                id="origin"
                placeholder="Enter origin"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="destination"
              >
                Destination
              </label>
              <input
                className="border border-gray-400 p-1 w-full rounded-md"
                type="text"
                name="destination"
                id="destination"
                placeholder="Enter destination"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="from-date"
              >
                From Date
              </label>
              <input
                className="border border-gray-400 p-1 w-full rounded-md"
                type="date"
                name="from-date"
                id="from-date"
                placeholder="Enter from date"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="to-date"
              >
                To Date
              </label>
              <input
                className="border border-gray-400 p-1 w-full rounded-md"
                type="date"
                name="to-date"
                id="to-date"
                placeholder="Enter to date"
              />
            </div>
            <div className="flex justify-center w-full mt-4">
              <Link to="/news" className="w-full">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
                  Start Booking
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
