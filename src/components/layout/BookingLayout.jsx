import React from "react";
import { Outlet } from "react-router-dom";

const BookingLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BookingLayout;
