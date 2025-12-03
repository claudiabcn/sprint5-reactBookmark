import type { IconProps } from "../../config/types";

export const Icon = ({ variant }: IconProps) => {
  const logoMap = {
    facebook: "/images/icon-facebook.svg",
    twitter: "/images/icon-twitter.svg",
    hamburguer: "/images/icon-hamburger.svg",
    close: "/images/icon-close.svg",
  };

  return <img src={logoMap[variant]} alt="Icons" className="icon" />;

  
};
