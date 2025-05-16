import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleOpen }) => {
  return (
    <div 
      className={`hamburger ${isOpen ? 'open' : ''}`} 
      onClick={toggleOpen}
      aria-label="メニュー"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleOpen();
        }
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;