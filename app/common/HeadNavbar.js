"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BiSolidUser, BiHeart } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="" className="nav-logo">
            Ak Jilani
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                href="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" onClick={handleClick}>
                <FiSearch activeClassName="active" className="nav-links" />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/accout/login" onClick={handleClick}>
                <BiSolidUser className="nav-links" activeClassName="active" />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" onClick={handleClick}>
                <BiHeart activeClassName="active" className="nav-links" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href=""
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <CiShoppingCart
                  activeClassName="active"
                  className="nav-links"
                />
              </Link>
            </li>
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
