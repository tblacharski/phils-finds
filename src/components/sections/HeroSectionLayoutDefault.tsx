import ButtonSection from './ButtonSection';
export default function HeroSectionLayoutDefault( {section}: {section: any} ) {
   
    return (
        <div className="hero-banner w-full py-25 bg-linear-to-t from-slate-100 to-slate-50">
            <div className={`container`}>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-2xl font-bold text-blue-700 mb-5 text-center'>{section?.subheading}</p>
                    <h1 className='font-bold mb-7 text-center'>{section?.heading}</h1>
                    <p className='text-lg mb-11 text-center'>{section?.content}</p>
                    <div className="w-full flex justify-center gap-5 flex-wrap">
                        {section?.buttons && section.buttons.length > 0 && (
                            section?.buttons?.map((item: any) => {
                                return (
                                    <ButtonSection section={item} isContainer={false} key={item._key} />
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}