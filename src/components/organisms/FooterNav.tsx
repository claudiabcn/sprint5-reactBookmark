import { Logo } from '../atoms/Logo';
import { Icon } from '../atoms/Icon';

export const FooterNav = () => {
  return (
    
    <nav className="footer-nav">
      <Logo variant="white" />
      
      <ul className="nav-menu">
        <li><a href="#features">FEATURES</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      
      <div className="social-icons">
        <Icon variant="facebook" />
        <Icon variant="twitter" />
      </div>
    </nav>
    
  );
};