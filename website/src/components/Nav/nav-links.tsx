import { Button } from "../ui/button";

const NavLinks = () => {
  return (
    <ul className="items-center gap-x-10 md:flex hidden">
      <Button variant={"ghost"} onClick={() => window.scrollTo({ top: 0 })}>
        Home
      </Button>
      <Button variant={"ghost"}>About</Button>
      <Button variant={"ghost"}>Tech</Button>
      <Button variant={"ghost"}>Projects</Button>
      <Button variant={"ghost"}>Contact</Button>
    </ul>
  );
};

export default NavLinks;
