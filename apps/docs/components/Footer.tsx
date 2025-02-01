import {
  Footer,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterText,
} from "@thirdbracket/bracketui";

const SiteFooter = () => {
  return (
    <Footer>
      <FooterSection>
        <FooterBrand logo="/path.svg">
          Making the web a better place with beautiful UI components.
        </FooterBrand>
      </FooterSection>

      <FooterSection title="Products">
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
        <FooterText>© 2024 Your Company. All rights reserved.</FooterText>
      </FooterSection>
    </Footer>
  );
};
export default SiteFooter;
