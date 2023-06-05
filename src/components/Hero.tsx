"use client";
import Image from "next/image";
import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useDownloader from "react-use-downloader";
import Meteor from "./Meteor";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  // const cvPdfFormat =
  //   "https://docs.google.com/document/u/0/export?format=pdf&id=1js7jkFavUT6LgHqmUikKH0Fucz5Akjcbi0yNuR3XAno";
  // const cvDocxFormat =
  //   "https://docs.google.com/document/u/0/export?format=docx&id=1js7jkFavUT6LgHqmUikKH0Fucz5Akjcbi0yNuR3XAno";
  // const filenamePDF = "Kareem Ebrahim CV.pdf";
  // const filenameDocx = "Kareem Ebrahim CV.docx";
  const { download } = useDownloader();
  return (
    <header className="relative h-2/3 text-white mt-10 lg:flex lg:items-start lg:justify-between lg:gap-7">
      <Image
        className="hidden lg:block"
        alt="img"
        src={"/img1.svg"}
        width={350}
        height={220}
      />
      <Image
        className="absolute left-40 bottom-28 hidden lg:block"
        alt="img"
        src={"/img4.svg"}
        width={150}
        height={150}
      />
      <div className="flex items-center flex-col">
        <div className="font-[SugarpunchDemo] space-y-5 flex flex-col items-center ">
          <h3 className="text-2xl lg:text-3xl">hi , i&apos;m</h3>
          <h1 className="text-7xl tracking-wider lg:text-8xl">Kareem</h1>
          <h1 className="text-7xl tracking-wider lg:text-8xl">Ebrahim</h1>
        </div>
        <div className="flex flex-col items-center space-y-10">
          <p className="font-semibold mt-7 text-xl capitalize text-center">
            backend developer
          </p>

          <Menu>
            <MenuButton className="bg-white text-black font-semibold px-5 py-3 rounded-lg">
              Download CV
            </MenuButton>
            <MenuList className="text-black">
              <MenuItem
                className="uppercase hover:bg-slate-200 rounded-md"
                onClick={() => {
                  download(
                    process.env.NEXT_PUBLIC_CV_PDF_FORMAT_DOWNLOAD_URL,
                    process.env.NEXT_PUBLIC_CV_PDF_FILENAME
                  );
                }}
              >
                pdf{" "}
                <span className="text-sm opacity-50 lowercase ml-3">
                  {"(.pdf)"}
                </span>
              </MenuItem>
              <MenuItem
                className="uppercase hover:bg-slate-200 rounded-md"
                onClick={() =>
                  download(
                    process.env.NEXT_PUBLIC_CV_DOCX_FORMAT_DOWNLOAD_URL,
                    process.env.NEXT_PUBLIC_CV_DOCX_FILENAME
                  )
                }
              >
                docx
                <span className="text-sm opacity-50 lowercase ml-3">
                  {"(.docx)"}
                </span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="mt-20 flex flex-col -space-y-36 md:flex-row md:justify-between lg:hidden">
        <Image
          className=""
          alt="img"
          src={"/img1.svg"}
          width={280}
          height={150}
        />
        <Image
          className="self-end"
          alt="img"
          src={"/img3.svg"}
          width={230}
          height={310}
        />
      </div>
      <Image
        alt="img"
        src={"/img2.svg"}
        width={380}
        height={460}
        className="hidden lg:block"
      />

      {/* <Meteor className="absolute top-0 right-2/3 -rotate-45" delay={0.5} /> */}
    </header>
  );
};

export default Hero;
