import { createBrowserRouter } from "react-router-dom";
import News from "../pages/news/News";
import Destination from "../pages/destination/Destination";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";

import BookingLayout from "../layout/BookingLayout";
import Booking from "../pages/booking/Booking";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/destinations"),
      },
      {
        path: "/news",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
      },
      {
        path: "/destination",
        element: (
          <PrivateRoute>
            <Destination />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/booking",
        element: <BookingLayout />,
        children: [
          {
            path: ":id",
            element: <Booking />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/destinations/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default router;
