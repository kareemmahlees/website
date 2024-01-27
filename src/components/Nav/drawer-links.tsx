import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LINKS } from "@/consts";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";

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
                onClick={() => {
                  setIsDrawerOpen(false);
                  setTimeout(() => {
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ block: "center" });
                  }, 500);
                }}
              >
                {title}
              </Button>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerLinks;
