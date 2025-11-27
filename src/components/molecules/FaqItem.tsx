import type { FAQ } from '../../config/types';

export const FaqItem = ({ title, description }: FAQ) => {
  return (
    <div className="faq-item">
      <button className="faq-question">{title}</button>
      <div className="faq-answer">
        <p>{description}</p>
      </div>
    </div>
  );
};