import {
  Footer,
  FooterBottom,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
  FooterText,
  ThemeToggle,
} from "@thirdbracket/bracketui";

import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { Logo } from "./Logo";

const SiteFooter = () => {
  return (
    <Footer
      theme={{
        background: "bg-white dark:bg-black",
        border: "border-primary-500/30",
      }}
    >
      <FooterSection className="col-span-2 ">
        <FooterBrand logo={<Logo className="w-auto h-4 dark:invert" />}>
          Making the web a better place with Third Bracket Solutions.
        </FooterBrand>

        <div className="flex  gap-x-4 justify-start items-center">
          <FooterSocial
            href="https://www.facebook.com/thirdbracket.co.uk"
            icon={<RiFacebookLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.linkedin.com/company/thirdbracket"
            icon={<RiLinkedinLine size={20} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="https://github.com/thirdbracket-solutions"
            icon={<RiGithubLine size={20} />}
            label="Facebook"
          />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink href="#">Components</FooterLink>
        <FooterLink href="#">Templates</FooterLink>
        <FooterLink href="#">Pricing</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="#">Documentation</FooterLink>
        <FooterLink href="#">Guides</FooterLink>
        <FooterLink href="#">Support</FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
      </FooterSection>
      <FooterSection title="More">
        <FooterLink href="#">Components</FooterLink>
        <FooterLink href="#">Templates</FooterLink>
        <FooterLink href="#">Pricing</FooterLink>
      </FooterSection>
      <FooterSection title="Useful Links">
        <FooterLink
          href="https://www.business-directory-uk.co.uk/web-design.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          UK Web Designers - Directory of Web Design Companies in the UK
        </FooterLink>
      </FooterSection>

      <FooterBottom>
        <FooterText>© 2025 Third Bracket Solution.</FooterText>

        <ThemeToggle />
      </FooterBottom>
    </Footer>
  );
};
export default SiteFooter;
