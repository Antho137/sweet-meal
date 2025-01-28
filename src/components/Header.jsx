import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-orange-400 w-full fixed top-0 z-10 p-4 md:px-10 lg:px-28 xl:px-48">
      <div className="flex flex justify-between items-center">
        <div className="text-white font-medium text-2xl md:text-3xl pb-1">
          Sweet Meal
        </div>
        <div className="md:hidden">
          <button className="text-white pt-1" onClick={handleMenu}>
            {!isMenuOpen ? (
              <FaBars className="fas fa-bars text-white text-2xl" />
            ) : (
              <FaTimes className="fas fa-times text-white text-2xl" />
            )}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-white"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-white"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className="flex justify-around md:hidden bg-white mt-3 py-2">
          <li className="py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-orange-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-orange-600"
              }
            >
              Menu
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-orange-600"
              }
            >
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-orange-600"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-600 text-white px-3 pt-0.5 pb-1.5 rounded"
                  : "text-orange-600"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
