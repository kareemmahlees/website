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
import Link from "next/link";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const scrolToTop = () => {};

  return (
    <nav className="fixed top-0 bg-black z-50 w-full text-white px-6 py-4 md:px-9 md:py-6 lg:px-12 lg:py-7 flex items-center justify-between ">
      <p
        className="font-bold text-xl hover:cursor-pointer"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        kareem.dev
      </p>
      <ul className=" items-center gap-20 md:flex hidden">
        <p
          className="hover:border-b-2 hover:border-white hover:cursor-pointer"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Home
        </p>
        <a href={"#about"} className="hover:border-b-2 hover:border-white">
          About
        </a>
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
              <p
                className="w-full pb-4 text-center hover:cursor-pointer"
                onClick={() => {
                  onClose();
                  window.scrollTo({ top: 0 });
                }}
              >
                Home
              </p>
              <a
                href="#about"
                className="w-full py-4 text-center"
                onClick={onClose}
              >
                About
              </a>
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
