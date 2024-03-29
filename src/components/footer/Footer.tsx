import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import Link from "../ui/Link";
import EmailIcon from "../icons/EmailIcon";
export default function Footer() {
  return (
    <footer className="p-4 text-sm flex flex-row justify-between">
      <div className="flex flex-row gap-1 content-center transition duration-150 ease-in-out">
        <Link href="https://github.com/quyenxhuynh" external={true}>
          <GitHubIcon size={28} />
        </Link>
        <Link href="https://www.linkedin.com/in/quyenxhuynh/" external={true}>
          <LinkedInIcon size={28} />
        </Link>
        <Link href="https://www.linkedin.com/in/quyenxhuynh/" external={true}>
          <EmailIcon size={30} />
        </Link>
      </div>
      <div className="flex flex-row content-center flex-wrap gap-1">
        <div>© Quyen Huynh. All Rights Reserved.</div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
