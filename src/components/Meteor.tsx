import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { animate, motion } from "framer-motion";

interface MeteorProps extends HTMLAttributes<HTMLDivElement> {
  delay: number;
}

const Meteor: FC<MeteorProps> = ({ className, delay }) => {
  return (
    <motion.div
      className={className}
      initial={{ x: 0, y: 0, rotate: -45, opacity: 0 }}
      animate={{
        x: 500,
        y: 500,
        opacity: [0, 1, 1, 0],
        scale: [0, 0.8, 0.8, 0],
      }}
      transition={{ duration: 0.8, delay: delay, repeat: Infinity }}
    >
      <Image alt="meteor" src={"/meteor.svg"} width={10} height={100} />
    </motion.div>
  );
};

export default Meteor;
