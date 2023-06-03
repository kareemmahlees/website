import Image from "next/image";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className="relative h-2/3 text-white items-center mt-10">
      <div className="font-[SugarpunchDemo] space-y-5 flex flex-col items-center ">
        <h3 className="text-2xl">hi , i&apos;m</h3>
        <h1 className="text-7xl tracking-wider">Kareem</h1>
        <h1 className="text-7xl tracking-wider">Ebrahim</h1>
      </div>
      <div className="flex flex-col items-center space-y-10">
        <p className="font-semibold mt-7 text-xl capitalize text-center">
          backend developer
        </p>
        <button className="bg-white text-black font-semibold px-5 py-3 rounded-lg">
          Download CV
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <Image
            className="absolute left-20 bottom-3 -rotate-12 z-10 origin-center"
            alt="saturn"
            src={"/saturn.png"}
            width={160}
            height={140}
          />
          <Image
            className="absolute left-0 -bottom-28 z-10 origin-center"
            alt="rocket"
            src={"/rocket.png"}
            width={70}
            height={140}
          />
          <Image
            className="relative float-left mt-40"
            alt="vector 1"
            src={"/Vector 1.svg"}
            width={280}
            height={150}
          />
        </div>
        <div className="relative self-end">
          <Image
            className="absolute right-0 z-10 bottom-26 origin-center md:bottom-10"
            alt="astronut"
            src={"/astronauta_dark.png"}
            width={240}
            height={240}
          />
          <Image
            className="relative right-0 bottom-24 float-right md:bottom-0"
            alt="vector 3"
            src={"/Vector 3.svg"}
            width={200}
            height={70}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
