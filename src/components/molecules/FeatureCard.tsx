import type {FeatureCard} from '../../config/types';
import { Button } from '../atoms/Button';

const FeatureCard = ({image, title, description}: FeatureCard) => {
    return (
      <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p> {description}</p>
      <Button variant="blue">
        More Info
      </Button>
    </div>
  );
};

export default FeatureCard;