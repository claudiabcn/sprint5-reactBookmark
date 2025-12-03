import type { ButtonProps } from '../../config/types';

export const Button = ({ 
  children, 
  variant, 
  onClick,
  type = 'button'
}: ButtonProps) => {
  return (
    <button 
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};