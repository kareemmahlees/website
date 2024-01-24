import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiAstro,
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  type IconType,
} from "@icons-pack/react-simple-icons";

const frontendTech: { name: string; Icon: IconType }[] = [
  {
    name: "React",
    Icon: SiReact,
  },
  {
    name: "NextJs",
    Icon: SiNextdotjs,
  },
  {
    name: "Astro",
    Icon: SiAstro,
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    name: "ChakraUI",
    Icon: SiChakraui,
  },
  {
    name: "Vite",
    Icon: SiVite,
  },
];

const FrontendTech = () => {
  return (
    <div className="grid grid-cols-5 gap-8 md:grid-cols-6 md:gap-10 lg:auto-cols-auto lg:grid-flow-col">
      <TooltipProvider>
        {frontendTech.map(({ Icon, name }, idx) => {
          return (
            <Tooltip key={idx}>
              <TooltipTrigger className="hover:cursor-default">
                {<Icon className="h-9 w-9 md:h-11 md:w-11 lg:h-12 lg:w-12" />}
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
};

export default FrontendTech;
