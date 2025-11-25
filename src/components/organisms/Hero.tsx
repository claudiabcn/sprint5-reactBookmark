import { Button } from "../atoms/Button";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
        <Button variant="blue">Get it on Chrome</Button>
        <Button variant="light">Get it on Firefox</Button>
        </div>

        <div className="hero-image">
         
        </div>

      </div>
    </section>
  );
};