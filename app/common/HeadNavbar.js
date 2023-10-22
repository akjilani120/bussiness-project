"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BiSolidUser, BiHeart } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import "./navbarStyle.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const navItems = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/product",
      title: "Products",
    },

    {
      path: "/about",
      title: "About",
    },
    {
      path: "",
      title: "contact",
    },
    {
      path: "/accout/login",
      title: <BiSolidUser activeClassName="active" className="navbar-icons" />,
    },
    {
      path: "/product",
      title: <FiSearch activeClassName="active" className="navbar-icons" />,
    },
    {
      path: "",
      title: <BiHeart activeClassName="active" className="navbar-icons" />,
    },
    {
      path: "",
      title: (
        <CiShoppingCart activeClassName="active" className="navbar-icons" />
      ),
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="" className="nav-logo">
            Ak Jilani
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems?.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  href={item?.path}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <i>
                <RxCross1 />
              </i>
            ) : (
              <i>
                <FaBars />
              </i>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
