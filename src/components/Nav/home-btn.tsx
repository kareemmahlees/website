import { Button } from "../ui/button";

const NavMenuBtn = () => {
  return (
    <Button
      className="font-bold text-xl hover:bg-transparent"
      variant={"ghost"}
      size={"sm"}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      kareem.dev
    </Button>
  );
};

export default NavMenuBtn;
