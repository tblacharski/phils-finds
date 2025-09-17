import ButtonSection from './ButtonSection';
import Image from 'next/image'; 
import { urlFor } from '@/lib/sanityImageUrl';  
import RichTextSection from './RichTextSection';

export default function MediaTextSection({section}: {section: any}) {

    const imagePosition = section?.imagePosition || 'left';
    const imageUrl = section?.image?.asset?._ref ? urlFor(section.image).url() : '';

    return (
        <div className="container py-8 md:py-12">
            <div className={`grid grid-cols-1 gap-10 items-start md:grid-cols-[1fr_1fr]`}>
                {imagePosition === 'left' && imageUrl && (
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
                <div className={`flex flex-col justify-center ${imagePosition === 'right' ? 'order-1 md:order-none' : ''}`}>
                    {section?.subHeading && (
                        <p className="text-xl font-bold text-blue-700 mb-5">{section.subHeading}</p>
                    )}
                    {section?.heading && (
                        <h2 className="font-bold mb-5 text-4xl sm:text-5xl">{section.heading}</h2>
                    )}
                    {
                        section?.content.length > 0 && 
                        section?.content.map((bodyContent: any) => {
                            return (
                                <RichTextSection key={bodyContent._key} section={bodyContent} isContainer={false}></RichTextSection>
                            )
                        })
                    }
                    <div className="flex flex-wrap gap-5">
                    {section?.buttons?.length > 0 &&
                        section.buttons.map((item: any) => {
                            return (
                                <ButtonSection section={item} isContainer={false} key={item._key} />
                            );
                        })}
                    </div>
                </div>
                 {imagePosition === 'right' && imageUrl && (
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
    )
}