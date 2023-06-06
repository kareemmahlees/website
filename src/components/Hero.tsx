"use client";
import Image from "next/image";
import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import useDownloader from "react-use-downloader";
import Link from "next/link";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const { download } = useDownloader();
  return (
    <header
      id="home"
      // className="overflow-hidden relative h-2/3 text-white mt-28 lg:mt-52 lg:flex lg:items-start lg:justify-between lg:gap-7"
      className="overflow-hidden relative h-2/3 lg:h-screen text-white mt-28 lg:flex lg:items-center lg:-mt-4 lg:justify-between lg:gap-7"
    >
      <Image
        className="hidden lg:block"
        alt="img"
        src={"/saturn_mobile.svg"}
        width={350}
        height={220}
      />
      <Image
        className="absolute left-40 bottom- hidden lg:block"
        alt="img"
        src={"/random_vector.svg"}
        width={120}
        height={120}
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
            <MenuButton className="bg-white text-black  px-5 py-3 rounded-lg">
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
        <div className="flex flex-col items-center mt-10 group hover:cursor-pointer lg:mb-6">
          <a href={"#about"}>
            <Image alt="mouse" src={"/mouse.svg"} width={40} height={40} />
            <Image
              className="group-hover:translate-y-5 transition"
              alt="down arrow"
              src={"/down_arrow.svg"}
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div className="mt-20 flex flex-col -space-y-36 md:flex-row md:justify-between lg:hidden">
        <Image alt="img" src={"/saturn_mobile.svg"} width={280} height={150} />
        <Image
          className="self-end"
          alt="img"
          src={"/astronaut_mobile.svg"}
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
    </header>
  );
};

export default Hero;
