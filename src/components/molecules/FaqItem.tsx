
import { useState } from 'react';
import type { FAQ } from '../../config/types';

export const FaqItem = ({ title, description }: FAQ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{title}</span>
        <img 
          src="/images/icon-arrow.svg" 
          alt="arrow"
          className={`faq-arrow ${isOpen ? 'open' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};