import React, { forwardRef } from 'react';
import './Services.css';

const Services = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="services" className="section services-section">
      <div className="container">
        <h2>Services</h2>
        <div className="section-content">
          <p>サービスに関するコンテンツがここに入ります。</p>
        </div>
      </div>
    </section>
  );
});

export default Services;