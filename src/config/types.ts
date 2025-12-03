export interface ButtonProps {
  children: React.ReactNode;
  variant: 'blue' | 'red' | 'light' | 'white';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export interface LogoProps {
  variant: 'black' | 'white'| 'whiteplus';
}

export interface IconProps {
  variant: 'facebook' | 'twitter'| 'hamburguer'| 'close';
}

export interface NavBarProps {
  type: 'header' | 'footer';
  logoVariant: 'white' | 'black';
}
export interface FeatureCard {
    id: string;
    title: string;
    description: string;
    image: string; 
}

export interface Browser {
    name: string;
    version: string;
    image: string;
}

export interface FAQ {
    title: string;
    description: string;
}

export interface MenuItem {
    label: string;
    href: string;
}

export interface MobileMenuProps {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
}