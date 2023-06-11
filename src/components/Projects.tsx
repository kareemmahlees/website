"use client";
import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { RoughNotation } from "react-rough-notation";
import { Tooltip } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
              width: 25,
              height: 25,
            },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          praesentium quaerat voluptatibus excepturi fugit sit atque, hic illum
          inventore tempore voluptate cupiditate doloribus libero ex assumenda
          asperiores facere? Veritatis, consequatur?
        </ProjectCard>

        <ProjectCard
          imgSrc="/project_test_img.svg"
          projectName="Cachzilla"
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
              width: 25,
              height: 25,
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
}

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  imgSrc,
  techIcons,
  projectName,
}) => {
  return (
    <article
      id="projects"
      className="scroll-my-40 lg:scroll-my-60 mx-7 relative flex flex-col items-center bg-[#1f1435] rounded-lg"
    >
      <Image
        alt="project img"
        src={imgSrc}
        width={400}
        height={400}
        className="rounded-lg"
      />
      <div className="rounded-xl relative -top-5 backdrop-blur-xl pt-10 space-y-5 px-4">
        <p className="text-center ">{children}</p>
        <div className="flex items-center gap-4 justify-center">
          {techIcons.map((icon, index) => (
            <Tooltip key={index} label={icon.toolTip}>
              <Image
                key={index}
                alt="tech icon"
                src={icon.src}
                width={icon.width || 30}
                height={icon.height || 30}
              />
            </Tooltip>
          ))}
        </div>
        <div className="flex items-center w-full justify-center group hover:cursor-pointer">
          <Link
            href={`/projects/${projectName}`}
            className="font-semibold underline underline-offset-4"
          >
            read more
          </Link>
          <ArrowRight className="group-hover:translate-x-3 transition-all group-hover:opacity-100 opacity-0" />
        </div>
      </div>
    </article>
  );
};
