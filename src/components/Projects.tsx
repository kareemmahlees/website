"use client";
import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";
import { Tooltip } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { SocialIcon } from "./ui/Icon";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], weight: "400" });

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const { ref: projectsRef, inView: projectsInView } = useInView();
  return (
    <section className="text-white mt-[300px] flex items-center justify-center ">
      <div className="space-y-36 flex flex-col items-center justify-center">
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
          flexDirection="reversed"
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
          A lightweight caching system that supports key-value storage and ttls.
          <br />
          It is capable of boosting the number of request to 12 folds and
          reducing request delay to 92%.
          <br />
          Built with pure Python, implementing TDD and 100% code coverage{" "}
        </ProjectCard>
        <ProjectCard
          imgSrc="/project_test_img.svg"
          projectName="tKick"
          flexDirection="normal"
          techIcons={[
            {
              toolTip: "Typescript",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
            },
            {
              toolTip: "Nodejs",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
            },

            {
              toolTip: "Redis",
              src: "https://img.icons8.com/color/96/redis.png",
            },

            {
              toolTip: "Docker",
              src: "https://img.icons8.com/fluency/48/docker.png",
            },
            {
              toolTip: "Git",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
            },
          ]}
          socialIcons={[
            {
              link: "https://github.com/kareemmahlees/tkick",
              alt: "github project link",
              src: "https://img.icons8.com/glyph-neue/128/EBEBEB/github.png",
            },
          ]}
        >
          A background job system built in pure nodejs and typescript that
          supports job queuing and job scheduling with configurable number of
          workers.
          <br />
          Built with best practices and applying SOLID principles with extensive
          use of Typescript type system
        </ProjectCard>
        <ProjectCard
          flexDirection="reversed"
          imgSrc="/project_test_img.svg"
          projectName="express-k8s"
          techIcons={[
            {
              toolTip: "Typescript",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
            },
            {
              toolTip: "Nodejs",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
            },
            {
              toolTip: "ExpressJs",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
            },
            {
              toolTip: "Docker",
              src: "https://img.icons8.com/fluency/48/docker.png",
            },
            {
              toolTip: "Kubernetes",
              src: "https://img.icons8.com/color/144/kubernetes.png",
            },
            {
              toolTip: "Git",
              src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
            },
          ]}
          socialIcons={[
            {
              link: "https://github.com/kareemmahlees/tkick",
              alt: "github project link",
              src: "https://img.icons8.com/glyph-neue/128/EBEBEB/github.png",
            },
          ]}
        >
          A fully featured application featuring Express API, Authentication
          with JWT, Validation with Zod, Testing with Vitest, Dockerized image
          and deployed with k8s.
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
  flexDirection: "normal" | "reversed";
}

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  techIcons,
  socialIcons,
  projectName,
  flexDirection,
}) => {
  const classes = clsx(
    flexDirection === "reversed" &&
      "scroll-my-40 lg:scroll-my-60 mx-7 relative flex flex-col items-center bg-[#170f28] rounded-lg md:flex-row-reverse overflow-hidden max-w-screen-lg",
    flexDirection === "normal" &&
      "scroll-my-40 lg:scroll-my-60 mx-7 relative flex flex-col items-center bg-[#170f28] rounded-lg md:flex-row overflow-hidden max-w-screen-lg"
  );
  return (
    <article id="projects" className={classes}>
      <div className="relative h-44 w-full bg-white flex items-center justify-center overflow-hidden rounded-xl bg-[url(/polygon.svg)] bg-contain md:min-h-[300px] md:min-w-[450px] md:w-2/3">
        <h3 className="text-gray-500 font-bold capitalize text-4xl">
          {projectName}
        </h3>
      </div>
      <div className="rounded-xl relative -top-5  pt-10 space-y-5 px-4 py-4  md:-top-0 ">
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
