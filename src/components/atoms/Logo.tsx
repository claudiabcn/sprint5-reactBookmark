import type { LogoProps } from "../../config/types";

export const Logo = ({ variant }: LogoProps) => {
  const logoMap = {
    black: "../assets/images/logo-bookmark-black.svg",
    white: "../assets/images/logo-bookmark-white.svg",
  };

  return <img src={logoMap[variant]} alt="Bookmark Logo" className="logo" />;
};
