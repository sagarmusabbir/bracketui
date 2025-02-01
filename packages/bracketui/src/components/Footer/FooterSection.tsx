// packages/bracketui/src/components/Footer/FooterSection.tsx
import { FC } from "react";

export interface FooterSectionProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const FooterSection: FC<FooterSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
          {title}
        </h3>
      )}
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default FooterSection;
