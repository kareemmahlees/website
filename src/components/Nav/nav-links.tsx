import { LINKS } from "@/consts";
import { Button } from "../ui/button";

const NavLinks = () => {
  return (
    <ul className="items-center gap-x-10 md:flex hidden">
      {LINKS.map(({ title, id }, idx) => {
        return (
          <Button
            key={idx}
            variant={"ghost"}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ block: "center" })
            }
          >
            {title}
          </Button>
        );
      })}
    </ul>
  );
};

export default NavLinks;
