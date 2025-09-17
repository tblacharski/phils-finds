import Image from 'next/image'; 
import { urlFor } from '@/lib/sanityImageUrl';  
import ButtonSection from './ButtonSection';
export default function HeroSectionLayoutTwo({ section }: { section: any }) {
  let imageUrl = '';
  if (section?.image?.asset?._ref) {
    imageUrl = urlFor(section.image).url();
  }

  return (
    <div className="hero-banner hero-banner--layout2 w-full max-w-full xl:max-w-[calc(100%-2rem)] 2xl:max-w-[80%] xl:rounded-4xl mx-auto bg-gradient-to-t from-slate-100 to-slate-50 py-10 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 items-start">
          <div className="flex flex-col justify-center order-1 md:order-none">
            {section?.subheading && (
              <p className="text-xl font-bold text-blue-700 mb-5">{section.subheading}</p>
            )}
            {section?.heading && (
              <h2 className="font-bold mb-5 text-4xl sm:text-5xl">{section.heading}</h2>
            )}
            {section?.content && (
              <p className="text-lg mb-10">{section.content}</p>
            )}
            <div className="flex flex-wrap gap-5">
              {section?.buttons?.length > 0 &&
                section.buttons.map((item: any) => {
                  return (
                    <ButtonSection section={item} isContainer={false} key={item._key} />
                  );
                })}
            </div>
          </div>
          {imageUrl && (
            <div className="flex justify-center md:justify-end">
              <Image
                src={imageUrl}
                alt={section?.image?.alt || 'Hero Image'}
                width={600}
                height={400}
                className="rounded-2xl w-full md:object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
