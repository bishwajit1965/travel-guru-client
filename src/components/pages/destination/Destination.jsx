import React from "react";
import { FaArrowRight } from "react-icons/fa";
import coverImage from "../../../assets/images/banner.jpg";

const Destination = () => {
  return (
    <div className="md:absolute w-full top-0">
      <div className="md:px-24">
        <div className="md:relative hidden md:block bg-cover bg-center h-screen">
          <img
            src={coverImage}
            alt="cover-image"
            className="object-cover img-fluid h-screen w-full"
          />
          {/* Overlay */}
          <div className="md:absolute inset-0 bg-gray-900 opacity-80"></div>

          {/* Heading and Description */}
          <div className="md:absolute z-10 flex flex-col justify-center items-center h-full top-0 left-0 px-8">
            <div className="grid md:grid-cols-6 md:justify-between md:items-center md:gap-6">
              <div className=" md:col-span-2">
                <h1 className="text-5xl font-bold text-white leading-relaxed">
                  Welcome to
                  <br />
                  <span className="text-amber-400"> Travel Guru</span>
                </h1>
                <p className="text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vel sagittis mauris. Morbi ac arcu quis nisl venenatis
                  efficitur eget in lacus.
                </p>
                <button className="bg-amber-500 px-3 rounded-sm py-1 text-white mt-5 inline-flex items-center justify-between">
                  Booking <FaArrowRight className="w-4 h-4 ml-1 mt-1" />
                </button>
              </div>
              <div className="md:col-span-4 text-white grid grid-cols-3 gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
