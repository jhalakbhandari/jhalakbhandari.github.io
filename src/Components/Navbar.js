import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" w-auto  mx-auto">
      <div className=" shadow-md top-0 left-0 py-2  text-white bg-black">
        <ul className="flex justify-evenly px-10">
          <li>
            <Link to="/Glimpseweb/" exact className="no-underline text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="no-underline text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
