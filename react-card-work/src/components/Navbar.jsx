import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">MyStore</h2>

      
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❌" : "🍔"}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
