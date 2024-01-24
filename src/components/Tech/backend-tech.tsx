import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiExpress,
  SiFastapi,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiRust,
  SiTypescript,
  type IconType,
} from "@icons-pack/react-simple-icons";

const backendTech: { name: string; Icon: IconType }[] = [
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    name: "Golang",
    Icon: SiGo,
  },
  {
    name: "Rust",
    Icon: SiRust,
  },
  {
    name: "Nodejs",
    Icon: SiNodedotjs,
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  { name: "MySQL", Icon: SiMysql },
  {
    name: "MongoDB",
    Icon: SiMongodb,
  },
  { name: "Redis", Icon: SiRedis },
  {
    name: "FastAPI",
    Icon: SiFastapi,
  },
  {
    name: "ExpressJs",
    Icon: SiExpress,
  },
  {
    name: "NestJs",
    Icon: SiNestjs,
  },
];

const BackendTech = () => {
  return (
    <div className="grid grid-cols-5 gap-8 md:grid-cols-6 md:gap-10 lg:grid-cols-8 lg:gap-12">
      <TooltipProvider>
        {backendTech.map(({ Icon, name }, idx) => {
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

export default BackendTech;
