import { faqs } from "../../config/appData";
import { FaqItem } from "../molecules/FaqAnswers"; 

export const Questions = () => {
  return (
    <section id="questions" className="faq">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd
          like answered please feel free to email us.
        </p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FaqItem 
            key={index} 
            title={faq.title} 
            description={faq.description} 
          />
        ))}
      </div>
    </section>
  );
};