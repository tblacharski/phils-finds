import ButtonSection from './ButtonSection';

export default function ButtonsSection({section}: {section: any}) {
    const alignmentClass = section?.textAlign === 'center' ? 'justify-center' : section?.textAlign === 'right' ? 'justify-end' : 'justify-start';
    return (
        <div className='w-full'>
            <div className={`container`}>
                <div className={`flex flex-wrap gap-4 items-center ${alignmentClass}`}>
                    {section?.items?.map((item: any) => (
                        <ButtonSection section={item} isContainer={false} key={item._key} />
                    ))}
                </div>
            </div>
        </div>
    )
}