// src/components/Member/Character.jsx
import React, { forwardRef } from 'react';
import './Character.css';

const Character = forwardRef((props, ref) => {
  const { isActive } = props;
  
  return (
    <div 
      ref={ref} 
      id="character" 
      className={`character-section sub-section ${isActive ? 'active' : ''}`}
    >
      <h3>Our Characters</h3>
      <div className="character-content">
        <p>当社のキャラクターたちは、子どもたちの学びをサポートするために生まれました。親しみやすいデザインと個性豊かな特徴で、学習体験をより楽しく、より効果的にします。</p>
        
        {/* キャラクターグリッド */}
        <div className="character-grid">
          <div className="character-card">
            <div className="character-image">
              <img src="https://placehold.jp/200x200.png" alt="ミナちゃん" />
            </div>
            <div className="character-info">
              <h4>ミナちゃん</h4>
              <p className="character-description">好奇心旺盛で明るい性格の女の子。未知の学びに対して常に前向きです。</p>
            </div>
          </div>
          
          <div className="character-card">
            <div className="character-image">
              <img src="https://placehold.jp/200x200.png" alt="カノくん" />
            </div>
            <div className="character-info">
              <h4>カノくん</h4>
              <p className="character-description">論理的思考が得意な男の子。冷静に物事を分析し、問題解決に役立ちます。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Character;