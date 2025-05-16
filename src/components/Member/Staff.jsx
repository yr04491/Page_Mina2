// src/components/Member/Staff.jsx
import React, { forwardRef } from 'react';
import './Staff.css';

const Staff = forwardRef((props, ref) => {
  const { isActive } = props;
  
  return (
    <div 
      ref={ref} 
      id="staff" 
      className={`staff-section sub-section ${isActive ? 'active' : ''}`}
    >
      <h3>Our Staff</h3>
      <div className="staff-content">
        <p>当社のスタッフは、さまざまな専門知識と経験を持つプロフェッショナルで構成されています。教育とテクノロジーへの情熱を共有し、子どもたちの可能性を最大限に引き出すために日々努力しています。</p>
        
        {/* ここにスタッフ情報を追加することができます */}
        <div className="staff-grid">
          <div className="staff-card">
            <div className="staff-photo">
              <img src="https://placehold.jp/150x150.png" alt="Staff Member" />
            </div>
            <div className="staff-info">
              <h4>山田 太郎</h4>
              <p className="staff-position">エンジニア</p>
              <p className="staff-description">AIと教育の融合に取り組んでいます。</p>
            </div>
          </div>
          
          <div className="staff-card">
            <div className="staff-photo">
              <img src="https://placehold.jp/150x150.png" alt="Staff Member" />
            </div>
            <div className="staff-info">
              <h4>佐藤 花子</h4>
              <p className="staff-position">教育コンサルタント</p>
              <p className="staff-description">教育現場での経験を活かし、学習システムの設計に携わっています。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Staff;