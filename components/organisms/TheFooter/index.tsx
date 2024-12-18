// import { Icon } from "@iconify/react";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";
import tw, { styled } from "twin.macro";

import type { SocialAccount } from "../../../types/social-account";
import { PrimarySocials } from "../socials/PrimarySocials";

const Footer = styled.footer([
  tw`w-full bg-gray-200 px-6 py-8 mt-19 flex flex-col justify-center items-center space-y-4`,
  tw`dark:bg-gray-800`,
]);

interface FooterMenuItemProps {
  href: string;
  title: string;
}

const FooterMenuItem: FC<FooterMenuItemProps> = ({ href, title, ...props }) => {
  const outer: boolean = useMemo(() => href.startsWith("http"), [href]);

  return (
    <li className="px-6 py-2" {...props}>
      <Link
        href={href}
        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        target={outer ? "_blank" : undefined}
        rel={outer ? "nofollow" : undefined}
      >
        {title}
      </Link>
    </li>
  );
};

interface Props {
  socials: SocialAccount[];
}

const TheFooter: React.FC<Props> = () => (
  <Footer>
    <nav>
      <ul className="flex flex-row flex-wrap justify-center">
        <FooterMenuItem href="/" title="About" />
        <FooterMenuItem href="https://sayantandey.hashnode.dev/" title="Blog" />
        <FooterMenuItem href="/projects" title="Projects" />
        {/* <FooterMenuItem href="/dashboard" title="Dashboard" /> */}
        <FooterMenuItem href="/timeline" title="Timeline" />
        <FooterMenuItem href="/contacts" title="Contacts" />
        <FooterMenuItem href="/socials" title="Socials" />
      </ul>
    </nav>

    <nav>
      <PrimarySocials />
    </nav>

    <p className="text-xs text-gray-800 dark:text-gray-400">
      &copy; SayantanDey. All rights reserved .
    </p>
  </Footer>
);

export default TheFooter;
