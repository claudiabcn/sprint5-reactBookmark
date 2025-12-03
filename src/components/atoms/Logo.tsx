import type { LogoProps } from "../../config/types";

export const Logo = ({ variant }: LogoProps) => {
  const logoMap = {
    black: "/images/logo-bookmark-black.svg",
    white: "/images/logo-bookmark-white.svg",
    whiteplus:"/images/logo-bookmark-all-white.svg"
  };

  return (  <a href="/" aria-label="Ir a inicio">
    <img src={logoMap[variant]} alt="Bookmark Logo" className="logo" />
  </a>
);
};
