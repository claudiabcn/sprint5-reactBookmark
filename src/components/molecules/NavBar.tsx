import type { NavBarProps } from '../../config/types';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export const NavBar = ({ type, logoVariant }: NavBarProps) => {
  if (type === 'header') {
    return (
      <nav className="navbar-header">
        <Logo variant={logoVariant} />
        
        <ul className="navbar-menu">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <Button variant="red">Login</Button>
      </nav>
    );
  }
  
  return (
    <nav className="navbar-footer">
      <Logo variant={logoVariant} />
      
      <ul className="footer-menu">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="social-icons">
        <Icon variant="facebook" />
        <Icon variant="twitter" />
      </div>
    </nav>
  );
};