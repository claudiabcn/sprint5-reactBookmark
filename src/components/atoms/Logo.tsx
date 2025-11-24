import type { LogoProps } from '../../config/types';

export const Logo = ({ variant }: LogoProps) => {
  const src = variant === 'black' 
    ? '../assets/images/logo-bookmark-black.svg' 
    : '../assets/images/logo-bookmark-white.svg';

  return (
    <img 
      src={src} 
      alt="Bookmark Logo" 
      className="logo" 
    />
  );
};