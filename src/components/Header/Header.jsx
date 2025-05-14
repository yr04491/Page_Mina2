import React, { forwardRef } from 'react';
import './Header.css';

const Header = forwardRef(({ scrollToSection }, ref) => {
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = React.useState(false);

  // ウィンドウサイズの変更を監視
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setNavOpen(false);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // スクロールの監視
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // ナビゲーションリンクをクリックしたときの処理
  const handleNavClick = (section) => {
    setNavOpen(false);
    setAboutOpen(false);
    scrollToSection(section);
  };

  // ドロップダウンメニュー内のリンクをクリックしたときの処理
  const handleDropdownClick = (section) => {
    setAboutOpen(false);
    if (isMobile) setNavOpen(false);
    requestAnimationFrame(() => {
      scrollToSection(section);
    });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={ref}>
      <div className="navbar-container">
        {/* ロゴ */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Fukui
        </div>
        
        {/* モバイル用ハンバーガーアイコン */}
        <div 
          className={`hamburger ${navOpen ? 'open' : ''}`} 
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* ナビゲーションメニュー */}
        <nav className={`nav-menu ${navOpen ? 'open' : ''}`}>
          <ul>
            <li className="nav-item nav-about">
              <div 
                className="nav-link-with-dropdown"
                onMouseEnter={() => !isMobile && setAboutOpen(true)}
                onMouseLeave={() => !isMobile && setAboutOpen(false)}
              >
                <a 
                  href="#" 
                  className={aboutOpen ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutOpen(!aboutOpen);
                  }}
                >
                  About <span className="dropdown-arrow">▼</span>
                </a>
                {aboutOpen && (
                  <div className="dropdown-menu">
                    <a href="#" onClick={() => handleDropdownClick('mission')}>Mission</a>
                    <a href="#" onClick={() => handleDropdownClick('vision')}>Vision</a>
                    <a href="#" onClick={() => handleDropdownClick('about-company')}>会社紹介</a>
                    <a href="#" onClick={() => handleDropdownClick('company-info')}>会社概要</a>
                    <a href="#" onClick={() => handleDropdownClick('officers')}>会社役員</a>
                    <a href="#" onClick={() => handleDropdownClick('history')}>沿革</a>
                  </div>
                )}
              </div>
            </li>
            <li><a href="#services" onClick={() => handleNavClick('services')}>Services</a></li>
            <li><a href="#news" onClick={() => handleNavClick('news')}>News</a></li>
            <li><a href="#recruit" onClick={() => handleNavClick('recruit')}>Recruit</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;