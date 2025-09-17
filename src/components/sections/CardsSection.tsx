import Image from "next/image";
import { urlFor } from "@/lib/sanityImageUrl";
import ButtonSection from './ButtonSection';
export default function CardsSection({section}: {section: any}) {
    return (
        <div className={`cards-section py-12 lg:py-20 bg-gradient-to-t from-slate-100 to-slate-50`}>
            <div className="container">
                <div className="mb-10 text-center">
                    {section?.subheading && (<p className="text-lg mb-3 font-bold">{section.subheading}</p>)}
                    {section?.heading && (<h2 className="text-4xl leading-[1.2] font-bold mb-4">{section.heading}</h2>)}
                    {section?.content && <p className="text-base mb-0">{section.content}</p>}
                </div>
                <div className="card-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section?.cardsLists && section.cardsLists.map((cardsList: any, index: number) => {
                        const imageUrl = cardsList?.image?.asset?._ref ? urlFor(cardsList.image).url() : "";
                        const cardButton = { textAlign: 'center' , url: cardsList?.url || '#', label: cardsList?.label || 'Learn More', type: 'link-with-arrow' };
                        return  (
                            <div key={index} className={`card-item flex flex-col shadow-md items-center p-8 rounded-xl bg-white justify-center ${cardsList?.class || ""}`}>
                                {(imageUrl || cardsList?.subheading) && (
                                    <div className="mb-5 flex w-full items-center justify-start gap-2">
                                        {imageUrl && (
                                            <Image
                                            src={imageUrl}
                                            alt={cardsList?.image?.alt || "Logo"}
                                            width={cardsList?.image?.width || 40}
                                            height={cardsList?.image?.height || 40}
                                            className="object-contain h-auto"
                                            />
                                        )}
                                        {cardsList?.subheading && (
                                            <p className="text-lg">{cardsList.subheading}</p>
                                        )}
                                    </div>
                                )}
                                {cardsList?.heading && <h3 className="text-xl leading-[1.2] font-bold mb-5 w-full">{cardsList.heading}</h3>}
                                {cardsList?.content && <p className="text-lg">{cardsList.content}</p>}
                                {( cardsList?.label && cardsList?.url ) ? (
                                    <div className="w-full mt-5">
                                        <ButtonSection section={cardButton} isContainer={false} key={index} />
                                    </div>
                                ) : ''}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}