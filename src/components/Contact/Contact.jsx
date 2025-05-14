import React, { forwardRef } from 'react';
import './Contact.css';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact</h2>
        <div className="section-content">
          <p>お問い合わせに関するコンテンツがここに入ります。</p>
        </div>
      </div>
    </section>
  );
});

export default Contact;