import { Card } from "@thirdbracket/bracketui";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  badge?: string;
  icon: IconType;
}

export default function ServiceCard({
  title,
  description,
  features,

  icon: Icon,
}: ServiceCardProps) {
  return (
    <Card
      size="xl"
      isIcon
      cover={
        <div className="w-12 h-12 mb-4 flex items-center  justify-center   border border-primary-500/40  bg-badge-light dark:bg-badge-dark  rounded-lg">
          <Icon className="w-6 h-6 text-primary-900 dark:text-primary-100" />
        </div>
      }
      header={title}
    >
      <div>
        <p className="  text-secondary-950/60 dark:text-secondary-100/50 mb-4">
          {description}
        </p>
        <ul className="list-disc list-inside text-primary-950/80 dark:text-primary-100/70 space-y-1 text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
