export interface ButtonProps {
  children: React.ReactNode;
  variant: 'blue' | 'red' | 'light' | 'red2';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface LogoProps {
  variant: 'black' | 'white';
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