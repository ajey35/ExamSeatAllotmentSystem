import React, { useState } from "react";
//importing navlink
import { NavLink, useNavigate } from "react-router-dom";
import ClgName from './clgname';


function Navbar() {
  return (
    <>
      <ClgName />
      <nav className="flex bg-gray-200 max-h-24 w-full sm:justify-end">
        <ul className="p-2 flex align-middle">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/getSeat-Allotment(for_Student)"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
          >
            Student
          </NavLink>

          {/* Navigates to the login form for Allot the Seat */}
          <NavLink
            to="/Admin"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
          >
           Admin
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

