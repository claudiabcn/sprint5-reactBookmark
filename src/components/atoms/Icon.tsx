import type { IconProps } from "../../config/types";

export const Icon = ({ variant }: IconProps) => {
  const logoMap = {
    facebook: "../assets/images/icon-facebook.svg",
    twitter: "../assets/images/icon-twitter.svg",
    hamburguer: "../assets/images/icon-hamburger.svg",
    close: "../assets/images/icon-close.svg",
  };

  return <img src={logoMap[variant]} alt="Icons" className="icon" />;

  
};
