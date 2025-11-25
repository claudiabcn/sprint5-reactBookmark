import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';

export const HeaderNav = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Logo variant="black"/>
      </div>
      
      <div className="nav">
        <ul className="nav-menu">
          <li><a href="#features">FEATURES</a></li>
          <li><a href="#pricing">PRICING</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <Button variant="red">LOGIN</Button>
      </div>
    </nav>
  );
};