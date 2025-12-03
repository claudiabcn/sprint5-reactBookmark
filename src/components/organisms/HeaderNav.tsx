import { useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import {MobileMenu} from '../molecules/MobileMenu';

export const HeaderNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "FEATURES", href: "#features" },
    { label: "PRICING", href: "#pricing" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Logo variant="black"/>
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      >
        <Icon variant="hamburguer" />
      </button>

      <div className="nav">
        <ul className="nav-menu">
          <li><a href="#features">FEATURES</a></li>
          <li><a href="#pricing">PRICING</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <Button variant="red">LOGIN</Button>
      </div>

      <MobileMenu
        items={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};