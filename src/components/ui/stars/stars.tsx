import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import "./stars.scss";

interface startsProps extends HTMLAttributes<HTMLDivElement> {
  position?: "absolute" | "static";
}

const starts: FC<startsProps> = ({ position = "static" }) => {
  const classess = clsx(
    position === "absolute" && "star opacity-70 absolute",
    position === "static" && "star opacity-70 static"
  );
  return <div className={classess}></div>;
};

export default starts;
