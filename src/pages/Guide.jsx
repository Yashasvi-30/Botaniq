import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch, FaBookOpen, FaCalendarAlt, FaVideo, FaSeedling, FaQuestionCircle
} from "react-icons/fa";
import "./Guide.css";

function Guide() {
  const [searchTerm, setSearchTerm] = useState("");
  const [faqOpen, setFaqOpen] = useState({});

  // Plant Guide Data
  const plants = [
    { name: "Aloe Vera", benefits: "Air-purifying, easy to maintain.", img: "https://source.unsplash.com/100x100/?aloe-vera" },
    { name: "Snake Plant", benefits: "Thrives in low light, absorbs toxins.", img: "https://source.unsplash.com/100x100/?snake-plant" },
    { name: "Lavender", benefits: "Repels insects, used for aromatherapy.", img: "https://source.unsplash.com/100x100/?lavender" },
  ];

  // FAQ Data
  const faqData = [
    { question: "How often should I water my plants?", answer: "Most indoor plants need watering every 7-10 days." },
    { question: "What are the best plants for beginners?", answer: "Snake Plant, Aloe Vera, and Pothos are easy to maintain." },
    { question: "How much sunlight do plants need?", answer: "Most houseplants thrive in indirect light, while succulents need direct sun." },
  ];

  // Toggle FAQ
  const toggleFaq = (index) => {
    setFaqOpen({ ...faqOpen, [index]: !faqOpen[index] });
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1>🌱 Ultimate Plant Guide</h1>
        <p>Your go-to guide for healthy plants</p>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search for a plant or guide..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Plant Guide Section */}
      <section className="plant-guide">
        <h2>🌿 Explore Plants</h2>
        <div className="plant-grid">
          {plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase())).map((plant, index) => (
            <div key={index} className="plant-card">
              <img src={plant.img} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.benefits}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="seasonal-tips">
        <h2>📅 Seasonal Gardening Tips</h2>
        <ul>
          <li>🌸 Spring: Start fertilizing and planting flowers.</li>
          <li>☀️ Summer: Water deeply to prevent dehydration.</li>
          <li>🍂 Fall: Trim dead leaves and prepare for winter.</li>
          <li>❄️ Winter: Reduce watering and keep plants indoors.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>📖 Gardening FAQ</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <FaQuestionCircle /> {faq.question}
            </div>
            {faqOpen[index] && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </section>

      {/* Video Tutorials */}
      <section className="video-tutorials">
        <h2>🎥 Watch Gardening Tips</h2>
        <div className="video-grid">
          <iframe width="300" height="200" src="https://www.youtube.com/embed/3WAOxKOmR90" title="Gardening Tips"></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/k5W8x8b4xLg" title="Beginner Gardening"></iframe>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item"><FaBookOpen /> Home</Link>
        <Link to="/guide" className="nav-item"><FaSeedling /> Guide</Link>
        <Link to="/calendar" className="nav-item"><FaCalendarAlt /> Calendar</Link>
        <Link to="/videos" className="nav-item"><FaVideo /> Videos</Link>
      </nav>
    </div>
  );
}

export default Guide;
