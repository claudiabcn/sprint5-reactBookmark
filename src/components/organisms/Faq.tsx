import { FAQ } from "../../config/appData";

export const Questions= () => {
return (
        <section id='questions' className="faq">
            <div className="faq-header">
                <h2 className="section-header-h2">Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd
                like answered please feel free to email us.</p>
            </div>
                <div className="faq">
                {faq.map((faq) => (
                    <div key={faq.name} className="faq">
                        <h3> {faq.title}</h3>
                        <p> {faq.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Questions;