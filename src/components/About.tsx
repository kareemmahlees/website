"use client";
import { FC, HTMLAttributes } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

const About: FC<AboutProps> = ({}) => {
  const { ref: hireMeRef, inView: hireMeIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutIsVisible } = useInView();

  return (
    <section
      id="about"
      className="scroll-my-[500px] flex text-center flex-col items-center text-white space-y-7 md:mx-auto mx-5 relative"
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
        <p className="font-semibold text-lg hidden" ref={hireMeRef}>
          I&apos;m currently looking for a new role,{" "}
          <RoughNotation
            type="circle"
            show={hireMeIsVisible}
            color="yellow"
            padding={7}
          >
            <a
              id="a1"
              href="mailto:kareemmahlees@gmail.com"
              className="break-words"
            >
              Hire&nbsp;me?
            </a>
          </RoughNotation>
        </p>
      </div>
      <motion.div
        animate={{
          scale: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute left-0 -top-20 md:left-28 lg:left-72 lg:-top-60"
      >
        <Sparkle fill="white" size={45} />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute left-10 -top-9 md:left-36 lg:left-96 lg:-top-44"
      >
        <Sparkle fill="white" />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute right-96 -top-64 hidden lg:block"
      >
        <Sparkle fill="white" size={55} />
      </motion.div>
    </section>
  );
};

export default About;
