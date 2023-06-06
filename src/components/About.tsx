"use client";
import { FC, useState, useRef, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";

interface AboutProps {}
const About: FC<AboutProps> = ({}) => {
  const { ref: hireMeRef, inView: hireMeIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutIsVisible } = useInView();

  return (
    <section
      id="about"
      className="flex text-center flex-col items-center mt-24 text-white space-y-7 md:mx-auto mx-5 "
    >
      <div className="flex text-center flex-col items-center space-y-9 lg:-mt-40">
        <h2
          ref={aboutRef}
          className="font-bold lg:text-4xl md:text-3xl text-2xl underline underline-offset-8"
        >
          <RoughNotation type="highlight" color="purple" show={aboutIsVisible}>
            About
          </RoughNotation>
        </h2>
        <div className="text-center lg:w-2/3 md:w-3/4 text-xl tracking-wide space-y-4">
          <p>
            A passionate, hard-working, efficient developer well knowledgeable
            of cutting-edge, industry-standard technologies.
          </p>
          <p>
            Able to work in cross-functional teams, large scale applications and
            deliver performant backend services.
          </p>
        </div>
        <p className="font-semibold text-lg" ref={hireMeRef}>
          I&apos;m currently looking for a new role,{" "}
          <RoughNotation
            type="circle"
            show={hireMeIsVisible}
            color="yellow"
            padding={7}
          >
            <a id="a1" href="mailto:kareemmahlees@gmail.com">
              Hire me?
            </a>
          </RoughNotation>
        </p>
      </div>
    </section>
  );
};

export default About;
