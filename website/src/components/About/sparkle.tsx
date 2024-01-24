import { cn } from "@/lib/utils";
import { SparkleIcon } from "lucide-react";

interface SparkleProps {
  className?: string;
}

const Sparkle = ({ className }: SparkleProps) => {
  return (
    <SparkleIcon
      fill="white"
      className={cn("w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8", className)}
    />
  );
};

export default Sparkle;
