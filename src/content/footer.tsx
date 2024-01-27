import { SiGithub, SiLinkedin, SiMedium } from "@icons-pack/react-simple-icons";

const BlogFooter = () => {
  return (
    <div className="mt-20 flex flex-col items-center space-y-7">
      <a
        className="text-xl font-bold no-underline"
        href="/"
        data-astro-prefetch
      >
        kareem.dev
      </a>
      <div className="flex items-center gap-5">
        <a href={"https://github.com/kareemmahlees"} target="_blank">
          <SiGithub />
        </a>
        <a href={"https://www.linkedin.com/in/kareem-ebrahim"} target="_blank">
          <SiLinkedin />
        </a>
        <a href={"https://medium.com/@kareemmahlees"} target="_blank">
          <SiMedium />
        </a>
      </div>
      <p className="text-sm text-muted-foreground prose-a:text-muted-foreground">
        Powered by{" "}
        <a href="https://astro.build/" target="_blank">
          Astro
        </a>{" "}
        and{" "}
        <a href="https://vercel.com" target="_blank">
          {" "}
          Vercel
        </a>
      </p>
    </div>
  );
};

export default BlogFooter;
