export interface ButtonProps {
  children: React.ReactNode;
  variant: 'blue' | 'red' | 'light' | 'red2';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface LogoProps {
  variant: 'black' | 'white';
}