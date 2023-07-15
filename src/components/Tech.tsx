"use client";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

const backendTech: { name: string; src: string }[] = [
  {
    name: "Python",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
  },
  {
    name: "Javascript",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
  {
    name: "Typescript",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  },
  {
    name: "Golang",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
  },
  {
    name: "Nodejs",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://img.icons8.com/color/96/postgreesql.png",
  },
  { name: "MySQL", src: "https://img.icons8.com/color/96/mysql-logo.png" },
  {
    name: "MongoDB",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
  },
  { name: "Redis", src: "https://img.icons8.com/color/96/redis.png" },
  {
    name: "FastAPI",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg",
  },
  {
    name: "ExpressJs",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
  },
  {
    name: "NestJs",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg",
  },
  { name: "Docker", src: "https://img.icons8.com/fluency/48/docker.png" },
  {
    name: "Kubernetes",
    src: "https://img.icons8.com/color/144/kubernetes.png",
  },
  {
    name: "AWS",
    src: "/aws.svg",
  },
  {
    name: "Postman",
    src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  },
  {
    name: "Git",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
  },
];

const frontendTech: { name: string; src: string }[] = [
  {
    name: "HTML",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
  },
  {
    name: "CSS",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  },
  {
    name: "NextJs",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  },
  {
    name: "ChakraUI",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/chakra-colored.svg",
  },
  {
    name: "Vite",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
  },
];

interface TechProps {}

const Tech: FC<TechProps> = ({}) => {
  const { ref: techRef, inView: techIsVisible } = useInView();
  const { ref: backendRef, inView: backendIsVisible } = useInView();
  const { ref: frontendRef, inView: frontendIsVisible } = useInView();
  return (
    <section
      id="tech"
      className="scroll-mt-48 text-white h-1/2 mt-80 flex items-center justify-center mx-10"
    >
      <div className="flex flex-col items-center justify-center gap-16">
        <h2
          className="font-bold lg:text-4xl md:text-3xl text-2xl underline underline-offset-8"
          ref={techRef}
        >
          <RoughNotation type="highlight" color="red" show={techIsVisible}>
            Tech
          </RoughNotation>
        </h2>
        <div className="relative w-48 h-10">
          <Image
            className="object-contain"
            alt="backend technologies tag"
            src={"/backend_tech_tag.svg"}
            fill
          />
        </div>
        <RoughNotation
          type="bracket"
          show={backendIsVisible}
          brackets={["left", "right"]}
          padding={20}
        >
          <div
            ref={backendRef}
            className="grid grid-cols-5 gap-8 md:grid-cols-6 lg:grid-cols-8 md:gap-10 lg:gap-12"
          >
            {backendTech.map((skill, index) => (
              <Tooltip key={index} label={skill.name} className="">
                <div className="w-[40px] h-[40px] relative md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]">
                  <Image
                    className="hover:scale-125 transition "
                    alt={skill.name}
                    src={skill.src}
                    fill
                    key={index}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </RoughNotation>
        <div className="relative w-48 h-10">
          <Image
            className="object-contain"
            alt="frontend technologies tag"
            src={"/frontend_tech_tag.svg"}
            fill
          />
        </div>
        <RoughNotation
          type="bracket"
          show={frontendIsVisible}
          brackets={["left", "right"]}
          padding={20}
        >
          <div
            ref={frontendRef}
            className="grid grid-cols-5 gap-8 md:grid-cols-6 lg:grid-cols-8 md:gap-10 lg:gap-12"
          >
            {frontendTech.map((skill, index) => (
              <Tooltip key={index} label={skill.name} className="">
                <div className="w-[40px] h-[40px] relative md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]">
                  <Image
                    className="hover:scale-125 transition "
                    alt={skill.name}
                    src={skill.src}
                    fill
                    key={index}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </RoughNotation>
      </div>
    </section>
  );
};

export default Tech;
