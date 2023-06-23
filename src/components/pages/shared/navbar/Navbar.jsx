import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../../../../providers/AuthProvider";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("User has been logged out!!!");
      })
      .catch((error) => {});
  };
  const location = useLocation();
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "News",
      path: "/news",
    },
    {
      id: 3,
      name: "Destination",
      path: "/destination",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];
  const navigationRoutes = [
    {
      id: 1,
      name: "Login",
      path: "/login",
    },
    {
      id: 2,
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <nav className="md:flex md:justify-between md:items-start md:px-28 z-50 relative">
      <div
        className={
          location.pathname === "/" || location.pathname === "/destination"
            ? "home-links link-color"
            : ""
        }
      >
        {routes.map((route) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            key={route.id}
            to={route.path}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
      <div className={location.pathname === "/" ? "home-links" : ""}>
        {navigationRoutes.map((route) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            key={route.id}
            to={route.path}
          >
            {route.name}
          </NavLink>
        ))}

        <Link onClick={handleLogout}>
          <button>Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
