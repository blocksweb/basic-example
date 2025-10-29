import { Button } from "@/components/ui/button";
import {
  ComponentData,
  IBlockswebComponent,
  RichText,
} from "@blocksweb/core/editor";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  imageAlt?: string;
  showGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  height?: string;
  primaryButtonText?: string;
  primaryButtonStyle?: string;
  secondaryButtonText?: string;
  secondaryButtonStyle?: string;
  showSecondaryButton?: boolean;
}

const HeroSection: IBlockswebComponent = (props: HeroSectionProps) => {
  const {
    title = "Kwaliteit Ontmoet Betaalbare Stijl",
    subtitle = "Ontdek onze Casual en Sports collecties",
    backgroundImage = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
    imageAlt = "Diverse group of friends in stylish casual clothing",
    showGradient = true,
    gradientFrom = "from-primary/70",
    gradientTo = "to-transparent",
    height = "70vh",
    primaryButtonText = "Shop Casual",
    primaryButtonStyle = "btn-accent",
    secondaryButtonText = "Shop Sportswear",
    secondaryButtonStyle = "btn-primary",
    showSecondaryButton = true,
  } = props;

  return (
    <section className="relative">
      <div className="relative overflow-hidden" style={{ height }}>
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        )}
        <div
          className={`absolute inset-0 ${
            showGradient ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}` : ""
          } flex items-center`}
        >
          <div className="container-custom">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                <RichText
                  propName="title"
                  text={title}
                  defaultText="Kwaliteit Ontmoet Betaalbare Stijl"
                />
              </h1>
              <p className="text-lg md:text-xl mb-8">
                <RichText
                  propName="subtitle"
                  text={subtitle}
                  defaultText="Ontdek onze Casual en Sports collecties"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className={primaryButtonStyle}>
                  {primaryButtonText}
                </Button>
                {showSecondaryButton && (
                  <Button className={secondaryButtonStyle}>
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.schema = {
  displayName: "Hero Section",
  category: "Homepage",
  description:
    "Full-width hero section with background image, gradient overlay, and call-to-action buttons",
  options: [
    {
      name: "title",
      label: "Hero Title",
      type: "richtext",
      default: "Kwaliteit Ontmoet Betaalbare Stijl",
    },
    {
      name: "subtitle",
      label: "Hero Subtitle",
      type: "richtext",
      default: "Ontdek onze Casual en Sports collecties",
    },
    {
      name: "backgroundImage",
      label: "Background Image URL",
      type: "image",
      default:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
    },
    {
      name: "imageAlt",
      label: "Image Alt Text",
      type: "text",
      default: "Diverse group of friends in stylish casual clothing",
    },
    {
      name: "height",
      label: "Hero Height",
      type: "text",
      default: "70vh",
    },
    {
      name: "showGradient",
      label: "Show Gradient Overlay",
      type: "boolean",
      default: true,
    },
    {
      name: "gradientFrom",
      label: "Gradient Start Class",
      type: "text",
      default: "from-primary/70",
    },
    {
      name: "gradientTo",
      label: "Gradient End Class",
      type: "text",
      default: "to-transparent",
    },
    {
      name: "primaryButtonText",
      label: "Primary Button Text",
      type: "text",
      default: "Shop Casual",
    },
    {
      name: "primaryButtonStyle",
      label: "Primary Button Class",
      type: "text",
      default: "btn-accent",
    },
    {
      name: "secondaryButtonText",
      label: "Secondary Button Text",
      type: "text",
      default: "Shop Sportswear",
    },
    {
      name: "secondaryButtonStyle",
      label: "Secondary Button Class",
      type: "text",
      default: "btn-primary",
    },
    {
      name: "showSecondaryButton",
      label: "Show Secondary Button",
      type: "boolean",
      default: true,
    },
  ],
} as ComponentData;

export default HeroSection;
