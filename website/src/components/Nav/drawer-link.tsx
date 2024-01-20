import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const DrawerLinks = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger className="md:hidden">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Where would you like to go?</DrawerTitle>
        </DrawerHeader>
        <ul className="flex flex-col gap-5">
          <Button
            variant={"ghost"}
            // onClick={() => {
            //   setIsDrawerOpen(false);
            //   setTimeout(() => {
            //     window.scrollTo({ top: 0 });
            //   }, 500);
            // }}
          >
            Home
          </Button>
          <Button variant={"ghost"}>About</Button>
          <Button variant={"ghost"}>Tech</Button>
          <Button variant={"ghost"}>Projects</Button>
          <Button variant={"ghost"}>Contact</Button>
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerLinks;
