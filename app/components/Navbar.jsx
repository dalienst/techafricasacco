"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar sticky-top bg-white border-bottom">
      <div className="container-fluid">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Tech Africa SACCO
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Portal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
