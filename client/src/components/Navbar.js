import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'; // Import your CSS file for styling
import Logo from "./logo.png"
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('fr'); // Default language: French

  const handleLanguageChange = (language) => {
    // Implement language change logic here
    setSelectedLanguage(language);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { text: 'Home', link: '/' },
    { text: 'Services', link: '/services' },
    { text: 'Reservation', link: '/reservation' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <div className="navbar-root">
      <div className="navbar-appbar">
        <div className="navbar-toolbar">
        <div className="navbar-title">
          <img src={Logo} style={{height:"80px"}} />
          </div>
         
          {/* <div className="navbar-search">
            <div className="navbar-search-input-container">
              <div className="navbar-search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search..."
                className="navbar-search-input"
                aria-label="search"
              />
            </div>
          </div> */}
          <div style={{ display: "flex", alignItems: "center" }}>
                {/* Desktop Menu */}
                <ul
                  style={{
                    listStyleType: "none",
                    margin: 30,
                    padding: 0,
                    display: "flex",
                  }}
                >
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "الرئيسية"
                          : selectedLanguage === "fr"
                          ? "ACCUEIL"
                          : "HOME"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/location" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "من نحن؟"
                          : selectedLanguage === "fr"
                          ? "Location"
                          : "ABOUT US"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/services" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "الخدمات"
                          : selectedLanguage === "fr"
                          ? "SERVICES"
                          : "SERVICES"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/honoraire" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "الرسوم"
                          : selectedLanguage === "fr"
                          ? "RESERVATION"
                          : "FEES"}
                      </span>
                    </Link>
                  </li>
                 
                  
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/contact" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "اتصل"
                          : selectedLanguage === "fr"
                          ? "CONTACT"
                          : "CONTACT"}
                      </span>
                    </Link>
                  </li>
                </ul>

                {/* Language Selector */}
                <div style={{ marginLeft: "10px" }}>
                  <select
                    id="language"
                    style={{
                      marginLeft: "5px",
                      border: "none",
                      backgroundColor: "#e6cba1",
                    }}
                    value={selectedLanguage}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                  >
                    <option value="fr">Français</option>
                    <option value="ar">عربى</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
          
        </div>
      </div>
      {drawerOpen && (
        <div className="navbar-drawer">
          {drawerItems.map((item, index) => (
            <div
              className="navbar-drawer-item"
              key={index}
              onClick={() => {
                toggleDrawer();
                // Handle navigation to item.link
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
