import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiAwsorganizations,
  SiDocker,
  SiGit,
  SiKubernetes,
  SiPostman,
  SiTauri,
  type IconType,
} from "@icons-pack/react-simple-icons";

const otherTech: { name: string; Icon: IconType }[] = [
  { name: "Tauri", Icon: SiTauri },
  { name: "Docker", Icon: SiDocker },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
  },
  {
    name: "AWS",
    Icon: SiAwsorganizations,
  },
  {
    name: "Postman",
    Icon: SiPostman,
  },
  {
    name: "Git",
    Icon: SiGit,
  },
];

const OtherTech = () => {
  return (
    <div className="grid grid-cols-5 gap-8 md:grid-cols-6 md:gap-10 lg:auto-cols-auto lg:grid-flow-col">
      <TooltipProvider>
        {otherTech.map(({ Icon, name }, idx) => {
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

export default OtherTech;
