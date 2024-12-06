import React, { useState } from "react";
import "./App.css";
import getProbability from './findingProbability.js'

const App = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const randomResult = getProbability(code1, code2);
      setResult(randomResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Code Similarity Checker</h1>
        <nav className="header-menu">
          <a href="#home" className="menu-item">
            Home
          </a>
          <a href="#about" className="menu-item">
            About
          </a>
          <a href="#contact" className="menu-item">
            Contact
          </a>
        </nav>
      </header>
      <div className="container">
        <div className="chat-box">
          <div className="input-window">
            <textarea
              placeholder="Enter Code Block 1..."
              value={code1}
              onChange={(e) => setCode1(e.target.value)}
            ></textarea>
            <textarea
              placeholder="Enter Code Block 2..."
              value={code2}
              onChange={(e) => setCode2(e.target.value)}
            ></textarea>
          </div>
          <button
            className="send-button"
            onClick={handleSubmit}
            disabled={loading || !code1 || !code2}
          >
            {loading ? "Loading..." : "Compare Code"}
          </button>
        </div>
        <div className="result-box">
          <div className="result-title">Cheating Probability</div>
          {result !== null ? (
            <div className="result-value">{result}%</div>
          ) : (
            <div className="result-value">N/A</div>
          )}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 CodeChecker Inc.</p>
      </footer>
    </div>
  );
};

export default App;
