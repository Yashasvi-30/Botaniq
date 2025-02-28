import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch, FaLeaf, FaCalendarCheck, FaBookOpen, FaUser,
  FaCommentDots, FaSun, FaMoon, FaCloudSun, FaTint, FaSeedling, FaWater, FaTree, FaCheckCircle
} from "react-icons/fa";
import "./Home.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [weather, setWeather] = useState(null);
  const [quote, setQuote] = useState("A garden is a delight to the eye and a solace for the soul.");
  const [plantsOwned, setPlantsOwned] = useState(6);
  const [wateredPlants, setWateredPlants] = useState(3);
  const [growthStage, setGrowthStage] = useState(4);

  const myGarden = [
    { name: "Aloe Vera", status: "Healthy", img: "https://source.unsplash.com/100x100/?aloe-vera" },
    { name: "Monstera", status: "Needs Water", img: "https://source.unsplash.com/100x100/?monstera" },
    { name: "Basil", status: "Thriving", img: "https://source.unsplash.com/100x100/?basil" },
    { name: "Snake Plant", status: "Growing", img: "https://source.unsplash.com/100x100/?snake-plant" },
    { name: "Cactus", status: "Drought Tolerant", img: "https://source.unsplash.com/100x100/?cactus" },
    { name: "Lavender", status: "Needs Pruning", img: "https://source.unsplash.com/100x100/?lavender" }
  ];

  // 🌙 Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Botaniq 🌿</h1>
          <p>Your intelligent garden assistant</p>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search plants, guides..." />
          </div>
        </div>
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* Weather Widget */}
      <div className="weather-widget">
        <FaCloudSun className="weather-icon" />
        <p>Cloudy - 23°C</p>
      </div>

      {/* Garden Statistics */}
      <section className="stats-section">
        <h2>Your Garden Stats</h2>
        <div className="stats">
          <div className="stat-card">
            <FaTree className="stat-icon" />
            <p>Plants Owned</p>
            <h3>{plantsOwned}</h3>
          </div>
          <div className="stat-card">
            <FaTint className="stat-icon" />
            <p>Watered Plants</p>
            <h3>{wateredPlants}</h3>
          </div>
          <div className="stat-card">
            <FaSeedling className="stat-icon" />
            <p>Growing Plants</p>
            <h3>{growthStage}</h3>
          </div>
        </div>
      </section>

      {/* My Garden */}
      <section className="my-garden">
        <h2>🌱 My Garden</h2>
        <div className="garden-grid">
          {myGarden.map((plant, index) => (
            <div className="garden-item" key={index}>
              <img src={plant.img} alt={plant.name} />
              <div>
                <p className="plant-name">{plant.name}</p>
                <p className="plant-status">{plant.status} <FaCheckCircle /></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item"><FaLeaf /> Home</Link>
        <Link to="/schedule" className="nav-item"><FaCalendarCheck /> Schedule</Link>
        <Link to="/guide" className="nav-item"><FaBookOpen /> Guide</Link>
        <Link to="/profile" className="nav-item"><FaUser /> Profile</Link>
      </nav>

      {/* Chat Button */}
      <button className="chat-btn">
        <FaCommentDots />
      </button>
    </div>
  );
}

export default Home;
