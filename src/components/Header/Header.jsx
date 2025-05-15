import React, { forwardRef } from 'react';
import './Header.css';

const Header = forwardRef(({ scrollToSection }, ref) => {
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState(null);

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

  // すべてのナビゲーションリンクのクリック処理を統一
  const handleNavClick = (section) => {
    setNavOpen(false);
    setAboutOpen(false);
    setActiveNav(section);
    scrollToSection(section);
  };

  // マウスオーバー時の処理
  const handleMouseEnter = (navItem) => {
    if (!isMobile) {
      if (navItem === 'about') {
        setAboutOpen(true);
      }
      setActiveNav(navItem);
    }
  };

  // マウスアウト時の処理
  const handleMouseLeave = (navItem) => {
    if (!isMobile) {
      if (navItem === 'about') {
        setAboutOpen(false);
      }
      setActiveNav(null);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={ref}>
      <div className="navbar-container">
        {/* ロゴ */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Minakano
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
            <li className="nav-item nav-about"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={() => handleMouseLeave('about')}>
              <div className="nav-link-with-dropdown">
                <a 
                  href="#" 
                  className={aboutOpen || activeNav === 'about' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutOpen(!aboutOpen);
                    setActiveNav('about');
                  }}
                >
                  About <span className="dropdown-arrow">▼</span>
                </a>
                {aboutOpen && (
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
            <li className="nav-item nav-services"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={() => handleMouseLeave('services')}>
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
            <li className="nav-item nav-news"
                onMouseEnter={() => handleMouseEnter('news')}
                onMouseLeave={() => handleMouseLeave('news')}>
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
            <li className="nav-item nav-recruit"
                onMouseEnter={() => handleMouseEnter('recruit')}
                onMouseLeave={() => handleMouseLeave('recruit')}>
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
            <li className="nav-item nav-contact"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={() => handleMouseLeave('contact')}>
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
      </div>
    </header>
  );
});

export default Header;