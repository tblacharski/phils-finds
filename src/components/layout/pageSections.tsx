import HeadingSection from "../sections/HeadingSection";
import RichTextSection from "../sections/RichTextSection";
import ParagraphSection from "../sections/ParagraphSection";
import ButtonSection from "../sections/ButtonSection";
import ButtonsSection from "../sections/ButtonsSection";
import HeroSection from "../sections/HeroSection";
import MediaTextSection from "../sections/MediaTextSection";
import FaqsContentSection from "../sections/FaqsContentSection";
import LogoGridSection from "../sections/LogoGridSection";
import BlogListsSection from "../sections/BlogListsSection";
import CtaSection from "../sections/CtaSection";
import SubscribeSection from "../sections/SubscribeSection";
import ContactFormSection from "../sections/ContactFormSection";
import FeaturesStepsSection from "../sections/FeaturesStepsSection";
import CardsSection from "../sections/CardsSection";    
import Separator from "../sections/Separator";

export const sectionComponentMap: Record<string, React.ComponentType<{ section: any }>> = {
    heading: HeadingSection,
    richText: RichTextSection,
    paragraph: ParagraphSection,
    button: ButtonSection,
    buttons: ButtonsSection,
    hero: HeroSection,
    mediaText: MediaTextSection,
    faqsContent: FaqsContentSection,
    logoGrid: LogoGridSection,
    blogLists: BlogListsSection,
    cta: CtaSection,
    subscribe: SubscribeSection,
    contactForm: ContactFormSection,
    featuresSteps: FeaturesStepsSection,
    cards: CardsSection,
    separator: Separator,
  };

  export default function PageSections({ sections }: { sections: any[] }) {
    if (!Array.isArray(sections) || sections.length === 0) return null;
  
    return (
      <>
        {sections.map((section) => {
          const SectionComponent = sectionComponentMap[section._type];

          if (!SectionComponent) {
            console.warn(`No component found for section type: ${section._type}`);
            return null;
          }
  
          return <SectionComponent key={section._key} section={section} />;
        })}
      </>
    );
  }