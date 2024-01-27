import { LINKS } from "@/consts";
import { Button, buttonVariants } from "../ui/button";

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-x-10 md:flex">
      <a
        className={buttonVariants({ variant: "ghost" })}
        href="/blog"
        data-astro-prefetch
      >
        Blog
      </a>
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
