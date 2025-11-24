import type { IconProps } from '../../config/types';

export const Icon = ({ variant }: IconProps) => {
  const logoMap = {
    facebook: '../assets/images/icon-facebook.svg',
    twitter: '../assets/images/icon-twitter.svg'
  };

  return (
    <img 
      src={logoMap[variant]} 
      alt="RRSS Icons" 
      className="icon" 
    />
  );
};