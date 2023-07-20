import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-80  pb-9">
      <div className="flex items-center justify-between">
        <div className="space-y-8 flex flex-col items-start px-7 md:px-9 lg:px-16">
          <h3 className="font-[SugarpunchDemo] text-5xl md:text-6xl md:leading-[85px] text-white leading-[70px] break-normal tracking-wider">
            Want to have an awesome
            <br /> project done ?
          </h3>
          <a
            className="bg-white text-black px-3 py-2 rounded-lg"
            href={"mailto:kareemmahlees@gmail.com"}
          >
            Contact
          </a>
        </div>
        <Image
          src={"/saturn_footer.svg"}
          width={228}
          height={228}
          alt="saturn"
          className="hidden md:block"
        />
      </div>

      <div className="flex flex-col items-center mt-20 space-y-7">
        <h4 className="text-white font-bold text-xl">kareem.dev</h4>
        <div className="flex items-center gap-5">
          <Link href={"https://github.com/kareemmahlees"} target="_blank">
            <Image
              alt="github icon"
              src={"https://img.icons8.com/glyph-neue/128/EBEBEB/github.png"}
              width={35}
              height={35}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/kareem-ebrahim"}
            target="_blank"
          >
            <Image
              alt="linkedin icon"
              src={"https://img.icons8.com/ios-filled/100/EBEBEB/linkedin.png"}
              width={35}
              height={35}
            />
          </Link>
          <Link href={"https://medium.com/@kareemmahlees"} target="_blank">
            <Image
              alt="medium icon"
              src={
                "https://img.icons8.com/ios-filled/100/EBEBEB/medium-logo.png"
              }
              width={35}
              height={35}
            />
          </Link>
        </div>
        <p className="text-gray-500 text-sm">
          Powered by{" "}
          <a href="https://nextjs.org/" target="_blank" className="underline">
            Nextjs
          </a>{" "}
          and{" "}
          <a href="https://vercel.com" target="_blank" className="underline">
            Vercel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
