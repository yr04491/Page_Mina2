import React, { useRef } from 'react';
import './CompanyPage.css';

// コンポーネントのインポート
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Vision from '../components/Vision/Vision';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import CompanyInfo from '../components/CompanyInfo/CompanyInfo';
import Officers from '../components/Officers/Officers';
import History from '../components/History/History';
import Services from '../components/Services/Services';
import News from '../components/News/News';
import Recruit from '../components/Recruit/Recruit';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const CompanyPage = () => {
  // セクションへの参照
  const headerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const companyInfoRef = useRef(null);
  const officersRef = useRef(null);
  const historyRef = useRef(null);
  const servicesRef = useRef(null);
  const newsRef = useRef(null);
  const recruitRef = useRef(null);
  const contactRef = useRef(null);

  /**
   * 指定されたセクションへスクロールする関数
   * @param {string} section - スクロール先のセクション名
   */
  const scrollToSection = (section) => {
    // セクション名と対応するrefのマッピング
    const refs = {
      mission: missionRef,
      vision: visionRef,
      'about-company': aboutCompanyRef,
      'company-info': companyInfoRef,
      officers: officersRef,
      history: historyRef,
      services: servicesRef,
      news: newsRef,
      recruit: recruitRef,
      contact: contactRef
    };
    
    // 指定されたセクションに対応するrefを取得
    const ref = refs[section];
    
    // refが存在し、DOM要素を参照している場合のみ処理を実行
    if (ref && ref.current) {
      // ヘッダー要素を取得
      const header = headerRef.current;
      
      // ヘッダーの高さを取得
      const headerHeight = header ? header.offsetHeight : 0;
      
      // ターゲット要素までの垂直距離を取得
      const targetPosition = ref.current.getBoundingClientRect().top;
      
      // スクロールすべき距離を計算
      const offset = targetPosition + window.pageYOffset - headerHeight - 20;
      
      // スムーズにスクロール
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="company-page">
      <Header ref={headerRef} scrollToSection={scrollToSection} />
      <Hero />
      <Mission ref={missionRef} />
      <Vision ref={visionRef} />
      <AboutCompany ref={aboutCompanyRef} />
      <CompanyInfo ref={companyInfoRef} />
      <Officers ref={officersRef} />
      <History ref={historyRef} />
      <Services ref={servicesRef} />
      <News ref={newsRef} />
      <Recruit ref={recruitRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default CompanyPage;