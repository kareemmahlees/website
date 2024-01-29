import { buttonVariants } from "../ui/button";

const FooterContactBtn = () => {
  return (
    // <SendEmailDialog>
    <a className={buttonVariants()} href="mailto:kareemmahlees@gmail.com">
      Contact
    </a>
    // </SendEmailDialog>
  );
};

export default FooterContactBtn;
