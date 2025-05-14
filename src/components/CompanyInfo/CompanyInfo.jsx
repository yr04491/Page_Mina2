import React, { forwardRef } from 'react';
import './CompanyInfo.css';

const CompanyInfo = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="company-info" className="section company-info-section">
      <div className="container">
        <h2>会社概要</h2>
        <div className="section-content">
          <table className="company-info-table">
            <tbody>
              <tr><th>会社名</th><td>株式会社ミナカノ</td></tr>
              <tr><th>設立</th><td>2024年1月1日</td></tr>
              <tr><th>所在地</th><td>福井県福井市大手3丁目</td></tr>
              <tr><th>代表者</th><td>田濃 一翔</td></tr>
              <tr><th>資本金</th><td>300万円</td></tr>
              <tr><th>事業内容</th><td>教育サービス、AIプロダクト開発</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
});

export default CompanyInfo;