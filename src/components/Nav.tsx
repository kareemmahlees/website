"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <nav className="text-white px-6 py-4 md:px-9 md:py-6 lg:px-12 lg:py-7 flex items-center justify-between  ">
      <p className="font-bold text-xl">kareem.dev</p>
      <ul className=" items-center gap-20 md:flex hidden">
        <li>Home</li>
        <li>Tech</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <IconButton
        className="md:hidden"
        onClick={onOpen}
        aria-label="nav options"
        icon={<HamburgerIcon color={"white"} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <ul className="flex flex-col mt-10 font-semibold divide-y-2 ">
              <li className="w-full pb-4 text-center">Home</li>
              <li className="w-full py-4 text-center">Tech</li>
              <li className="w-full py-4 text-center">Projects</li>
              <li className="w-full py-4 text-center">Contact</li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Nav;
