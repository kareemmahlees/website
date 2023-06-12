"use client";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";
import { Tooltip } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { SocialIcon } from "./ui/Icon";
import { JsxElement } from "typescript";

const inter = Inter({ subsets: ["latin"], weight: "400" });

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const { ref: projectsRef, inView: projectsInView } = useInView();
  return (
    <section className="text-white mt-[300px] flex items-center justify-center">
      <div className="space-y-24">
        <h2
          ref={projectsRef}
          className="font-bold lg:text-4xl md:text-3xl text-2xl underline underline-offset-8 text-center"
        >
          <RoughNotation type="highlight" show={projectsInView} color="green">
            Projects
          </RoughNotation>
        </h2>
        <ProjectCard
          imgSrc="/project_test_img.svg"
          projectName="cachezilla"
          techIcons={[
            {
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
              toolTip: "Python",
            },
            {
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
              toolTip: "Git",
            },
            {
              src: "https://python-poetry.org/images/logo-origami.svg",
              toolTip: "Poetry",
              width: 22,
              height: 22,
            },
          ]}
          socialIcons={[
            {
              link: "https://github.com/kareemmahlees/cachezilla",
              alt: "github project link",
              src: "https://img.icons8.com/glyph-neue/128/EBEBEB/github.png",
            },
            {
              link: "https://medium.com/@kareemmahlees/understand-and-build-a-caching-system-from-scratch-f931fb07f62a",
              alt: "medium project link",
              src: "https://img.icons8.com/ios-filled/100/EBEBEB/medium-logo.png",
            },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          praesentium quaerat voluptatibus excepturi fugit sit atque, hic illum
          inventore tempore voluptate cupiditate doloribus libero ex assumenda
          asperiores facere? Veritatis, consequatur?
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;

interface ProjectCardProps {
  children: React.ReactNode;
  imgSrc: string;
  projectName: string;
  techIcons: {
    src: string;
    width?: number;
    height?: number;
    toolTip: string;
  }[];
  socialIcons: { link: string; alt: string; src: string }[];
}

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  techIcons,
  socialIcons,
  projectName,
}) => {
  return (
    <article
      id="projects"
      className="scroll-my-40 lg:scroll-my-60 mx-7 relative flex flex-col items-center bg-[#170f28] rounded-lg"
    >
      <div className="relative h-44 w-full bg-white flex items-center justify-center overflow-hidden rounded-xl bg-[url(/polygon.svg)] bg-contain">
        <h3 className="text-gray-500 font-bold capitalize text-4xl">
          {projectName}
        </h3>
      </div>
      <div className="rounded-xl relative -top-4 backdrop-blur-xl pt-10 space-y-5 px-4">
        <p className="text-center text-[#eef1ff]">{children}</p>
        <div className="flex items-center gap-4 justify-center">
          {techIcons.map((icon, index) => (
            <Tooltip key={index} label={icon.toolTip}>
              <Image
                key={index}
                alt="tech icon"
                src={icon.src}
                width={icon.width || 27}
                height={icon.height || 27}
              />
            </Tooltip>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          {socialIcons.map((icon, index) => (
            <SocialIcon
              alt={icon.alt}
              key={index}
              src={icon.src}
              link={icon.link}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
