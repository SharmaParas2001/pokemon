import React from "react";
import { Link } from "react-router-dom";
import PikachuImage from "../assets/pikachu.png"; // Ensure the image path is correct
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero_content">
        <div className="text_container">
          <h1 className="head">Welcome to the <span className="highlight">Pokémon World!</span></h1>
          <p className="para">Explore the world of Pokémon and discover your favorite characters.</p>
          <Link to="/pokimon">
            <button className="btn">Explore Now</button>
          </Link>
        </div>
        <div className="pikachu">
          <img src={PikachuImage} alt="Pikachu" className="pic" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
