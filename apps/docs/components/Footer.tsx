import {
  Footer,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
} from "@thirdbracket/bracketui";
import { EmailIcon, FacebookIcon, LinkedInIcon, PhoneIcon } from "./icons";

const SiteFooter = () => {
  return (
    <Footer>
      <FooterSection className="col-span-2">
        <FooterBrand logo="/path.svg">
          Making the web a better place with beautiful UI components.
        </FooterBrand>
        <div className="flex -ml-1.5 gap-x-4 justify-start items-center">
          <FooterSocial
            href="https://facebook.com/yourpage"
            icon={<FacebookIcon size={16} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://linkedin.com/in/yourprofile"
            icon={<LinkedInIcon size={18} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="mailto:your@email.com"
            icon={<EmailIcon size={20} />}
            label="Email"
          />
          <FooterSocial
            href="tel:+1234567890"
            icon={<PhoneIcon size={18} />}
            label="Phone"
          />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink href="/components">Components</FooterLink>
        <FooterLink href="/templates">Templates</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="/docs">Documentation</FooterLink>
        <FooterLink href="/guides">Guides</FooterLink>
        <FooterLink href="/support">Support</FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
      </FooterSection>
      <FooterSection title="More">
        <FooterLink href="/components">Components</FooterLink>
        <FooterLink href="/templates">Templates</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
      </FooterSection>
    </Footer>
  );
};
export default SiteFooter;
