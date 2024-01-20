import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CV_DOCX_LINK, CV_PDF_LINK } from "@/consts";
import { Button } from "../ui/button";

const CVDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Download CV</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        <DropdownMenuItem className="uppercase" asChild>
          <a href={CV_PDF_LINK}>
            pdf
            <span className="text-sm opacity-50 lowercase ml-3">
              {"(.pdf)"}
            </span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="uppercase" asChild>
          <a href={CV_DOCX_LINK}>
            docx
            <span className="text-sm opacity-50 lowercase ml-3">
              {"(.docx)"}
            </span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CVDropdown;
