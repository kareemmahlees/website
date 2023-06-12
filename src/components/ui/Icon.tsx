import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface SocialIconProps {
  link: string;
  alt: string;
  src: string;
}

export const SocialIcon: FC<SocialIconProps> = ({ alt, link, src }) => {
  return (
    <Link className="relative w-7 h-7" href={link} target="_blank">
      <Image alt={alt} src={src} fill />
    </Link>
  );
};
