import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ isOpen, isMobile, activeNav, setActiveNav, handleNavClick, expandedMenus, toggleMenu }) => {
  // マウスオーバー時の処理（デスクトップ用）
  const handleMouseEnter = (navItem) => {
    if (!isMobile) {
      if (navItem === 'about') {
        toggleMenu('about');
      }
      setActiveNav(navItem);
    }
  };

  // マウスアウト時の処理（デスクトップ用）
  const handleMouseLeave = (navItem) => {
    if (!isMobile) {
      if (navItem === 'about') {
        toggleMenu('about');
      }
      setActiveNav(null);
    }
  };

  // Aboutドロップダウンの切り替え
  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    toggleMenu('about');
  };

  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li 
          className="nav-item nav-about"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={() => handleMouseLeave('about')}
        >
          <div className="nav-link-with-dropdown">
            <a 
              href="#" 
              className={expandedMenus.about || activeNav === 'about' ? 'active' : ''}
              onClick={toggleAboutDropdown}
            >
              About <span className="dropdown-arrow">▼</span>
            </a>
            {expandedMenus.about && (
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('mission'); }}>Mission</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('vision'); }}>Vision</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about-company'); }}>会社紹介</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('company-info'); }}>会社概要</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('officers'); }}>会社役員</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('history'); }}>沿革</a>
              </div>
            )}
          </div>
        </li>
        <li 
          className="nav-item nav-services"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={() => handleMouseLeave('services')}
        >
          <a 
            href="#services" 
            className={activeNav === 'services' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
          >
            Services
          </a>
        </li>
        <li 
          className="nav-item nav-news"
          onMouseEnter={() => handleMouseEnter('news')}
          onMouseLeave={() => handleMouseLeave('news')}
        >
          <a 
            href="#news" 
            className={activeNav === 'news' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('news');
            }}
          >
            News
          </a>
        </li>
        <li 
          className="nav-item nav-recruit"
          onMouseEnter={() => handleMouseEnter('recruit')}
          onMouseLeave={() => handleMouseLeave('recruit')}
        >
          <a 
            href="#recruit" 
            className={activeNav === 'recruit' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('recruit');
            }}
          >
            Recruit
          </a>
        </li>
        <li 
          className="nav-item nav-contact"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={() => handleMouseLeave('contact')}
        >
          <a 
            href="#contact" 
            className={activeNav === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;