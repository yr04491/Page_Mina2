import React, { forwardRef, useState, useEffect } from 'react';
import './Header.css';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';

const Header = forwardRef(({ scrollToSection }, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeNav, setActiveNav] = useState(null);

  // ウィンドウサイズの変更を監視
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setNavOpen(false);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // スクロールの監視
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // ナビゲーションの状態を管理する関数
  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const handleNavClick = (section) => {
    setActiveNav(section);
    closeNav();
    scrollToSection(section);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={ref}>
      <div className="navbar-container">
        {/* ロゴ */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Minakano
        </div>
        
        {/* モバイル用ハンバーガーアイコン */}
        <HamburgerMenu isOpen={navOpen} toggleOpen={toggleNavOpen} />
        
        {/* ナビゲーションメニュー */}
        <Navigation 
          isOpen={navOpen}
          isMobile={isMobile}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          handleNavClick={handleNavClick}
        />
      </div>
    </header>
  );
});

export default Header;