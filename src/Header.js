import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="header">
      <h2>Practice</h2>
      <nav id="navbar">
        <div className="header__content">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
