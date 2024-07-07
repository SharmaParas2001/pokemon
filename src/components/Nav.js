import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Pokémon App</h1>
        <ul className="nav_links">
          <li>
            <Link to="/" className="nav_link">Home</Link>
          </li>
          <li>
            <Link to="/pokimon" className="nav_link">Pokédex</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
