// src/components/Member/Staff.jsx
import React, { forwardRef, useState } from 'react';
import './Staff.css';
import RYO from '../../assets/images/RYO.png';
import RYO_2 from '../../assets/images/COO.png';

const Staff = forwardRef((props, ref) => {
  const { isActive } = props;
  
  // 各スタッフ画像のホバー状態を管理
  const [hoveredStaff, setHoveredStaff] = useState(null);
  
  // スタッフデータ
  const staffMembers = [
    {
      id: 1,
      name: '山田 太郎',
      position: 'エンジニア',
      description: 'AIと教育の融合に取り組んでいます。',
      image: RYO,
      hoverImage: RYO_2
    },
    {
      id: 2,
      name: '佐藤 花子',
      position: '教育コンサルタント',
      description: '教育現場での経験を活かし、学習システムの設計に携わっています。',
      image: 'https://placehold.jp/150x150.png',
      hoverImage: 'https://placehold.jp/3d4070/ffffff/150x150.png'
    }
  ];
  
  return (
    <div 
      ref={ref} 
      id="staff" 
      className={`staff-section sub-section ${isActive ? 'active' : ''}`}
    >
      <h3>Our Staff</h3>
      <div className="staff-content">
        <p>当社のスタッフは、さまざまな専門知識と経験を持つプロフェッショナルで構成されています。教育とテクノロジーへの情熱を共有し、子どもたちの可能性を最大限に引き出すために日々努力しています。</p>
        
        <div className="staff-grid">
          {staffMembers.map(staff => (
            <div className="staff-card" key={staff.id}>
              <div 
                className="staff-photo"
                onMouseEnter={() => setHoveredStaff(staff.id)}
                onMouseLeave={() => setHoveredStaff(null)}
              >
                <img 
                  src={hoveredStaff === staff.id ? staff.hoverImage : staff.image}
                  alt={staff.name} 
                  className="staff-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.jp/150x150.png";
                  }}
                />
              </div>
              <div className="staff-info">
                <h4>{staff.name}</h4>
                <p className="staff-position">{staff.position}</p>
                <p className="staff-description">{staff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Staff;