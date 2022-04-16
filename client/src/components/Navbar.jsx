import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "1000",
            color: "white",
          }}
        >
          {" "}
          Crypto
          <span
            style={{
              color: "#4D77FF",
            }}
          >
            Pay
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
