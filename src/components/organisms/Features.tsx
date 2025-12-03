import { useState } from "react";
import { features } from "../../config/appData";
import { Button } from '../atoms/Button';

export const Features = () => {
  const [activeTab, setActiveTab] = useState('bookmarking');

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section className="features" id="features">
      <header className="features-header">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your
          favourite websites. Your bookmarks sync between your devices so you
          can access them on the go.
        </p>
      </header>

      <div className="features-tabs">
        {features.map(feature => (
          <button
            key={feature.id}
            onClick={() => setActiveTab(feature.id)}
            className={`tab ${activeTab === feature.id ? 'active' : ''}`}
          >
            {feature.id === 'bookmarking' && 'Simple Bookmarking'}
            {feature.id === 'searching' && 'Speedy Searching'}
            {feature.id === 'sharing' && 'Easy Sharing'}
          </button>
        ))}
      </div>

      <div className="features-content">
        {activeFeature && (
          <article className="tab-panel active">
            <div className="feature-box">

              <img src={activeFeature.image} alt={activeFeature.title} />
            </div>
            <div className="text">
              <h3>{activeFeature.title}</h3>
              <p>{activeFeature.description}</p>
              <Button variant="blue">More Info</Button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Features;