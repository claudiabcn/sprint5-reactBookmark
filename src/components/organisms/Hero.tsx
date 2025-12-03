import { Button } from "../atoms/Button";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-buttons">
            <Button variant="blue">Get it on Chrome</Button>
            <Button variant="light">Get it on Firefox</Button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/illustration-hero.svg"
            alt="Hero image"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};
