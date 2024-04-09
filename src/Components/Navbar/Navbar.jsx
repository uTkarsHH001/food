import React from "react";
import "./nav.css";
export default function Navbar() {
  return (
    <>
      <nav>
        <img className="new" src="logo.png" alt="" />
        <input type="checkbox" id="click" />
        <label htmlFor="click" id="checkbtn">
          <i className="fa-solid fa-bars-staggered"></i>
        </label>
        <div className="container">
          <div className="list">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>

              <li>
                <a href="" className="logo">
                  <img src="logo.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
