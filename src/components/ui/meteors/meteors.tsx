"use client";
import { FC, useEffect, useState } from "react";
import "./meteors.scss";

interface meteorsProps {}

const Meteors: FC<meteorsProps> = ({}) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);

  function tick() {
    const num = Math.floor(Math.random() * 8) + 1;
    setClassName(`meteor meteor-${num}`);
  }

  return <div className={className} key={className}></div>;
};

export default Meteors;
