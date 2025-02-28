import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser, FaSeedling, FaTrophy, FaCalendarCheck, FaBook, FaMoon, FaSun, FaChartLine
} from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  // Mock Data
  const user = {
    name: "Yashasvi Gupta ",
    bio: "Passionate gardener & plant enthusiast 🌱",
    avatar: "https://source.unsplash.com/100x100/?portrait-woman",
    achievements: ["Plant Lover", "Watering Guru", "Garden Master"],
    gardenStats: { owned: 12, watered: 8, growing: 4 },
    upcomingTasks: ["Water Snake Plant", "Fertilize Aloe Vera", "Repot Monstera"],
    savedGuides: ["How to Propagate Succulents", "Best Soil for Houseplants", "Winter Plant Care"],
    weeklyInsights: [3, 5, 2, 7, 8, 4, 6], // Mock activity data
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className="container">
      {/* Profile Card */}
      <header className="profile-card">
        <img src={user.avatar} alt="User" className="profile-avatar" />
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* Achievements */}
      <section className="achievements">
        <h2>🏆 Gardening Achievements</h2>
        <div className="achievement-badges">
          {user.achievements.map((badge, index) => (
            <span key={index} className="badge">{badge}</span>
          ))}
        </div>
      </section>

      {/* Garden Stats */}
      <section className="garden-stats">
        <h2>📊 My Garden Stats</h2>
        <div className="stats-grid">
          <div className="stat-card"><FaSeedling /> <p>Plants Owned: {user.gardenStats.owned}</p></div>
          <div className="stat-card"><FaCalendarCheck /> <p>Watered: {user.gardenStats.watered}</p></div>
          <div className="stat-card"><FaTrophy /> <p>Growing: {user.gardenStats.growing}</p></div>
        </div>
      </section>

      {/* Upcoming Tasks */}
      <section className="tasks">
        <h2>📅 Upcoming Tasks</h2>
        <ul>
          {user.upcomingTasks.map((task, index) => (
            <li key={index}><FaCalendarCheck /> {task}</li>
          ))}
        </ul>
      </section>

      {/* Saved Guides */}
      <section className="saved-guides">
        <h2>📖 Saved Guides</h2>
        <ul>
          {user.savedGuides.map((guide, index) => (
            <li key={index}><FaBook /> {guide}</li>
          ))}
        </ul>
      </section>

      {/* Weekly Insights */}
      <section className="weekly-insights">
        <h2>📈 Weekly Gardening Insights</h2>
        <div className="chart">
          {user.weeklyInsights.map((activity, index) => (
            <div key={index} className="bar" style={{ height: `${activity * 10}px` }}>
              {activity}
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item"><FaUser /> Profile</Link>
        <Link to="/guide" className="nav-item"><FaBook /> Guide</Link>
        <Link to="/calendar" className="nav-item"><FaCalendarCheck /> Calendar</Link>
        <Link to="/stats" className="nav-item"><FaChartLine /> Stats</Link>
      </nav>
    </div>
  );
}

export default Profile;
