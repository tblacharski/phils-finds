import ButtonSection from './ButtonSection';

export default function CtaSection({ section }: { section: any }) {
  
  return (
    <div className={`cta-section py-10 ${section?.class}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-8 sm:p-18 rounded-4xl bg-gradient-to-t from-slate-800 to-slate-600">
          <div className="md:col-span-3">
            {section?.subHeading && <p className="text-lg mb-4 text-white">{section.subHeading}</p>}
            {section?.heading && <h2 className="text-4xl leading-[1.2] font-bold mb-4 text-white">{section.heading}</h2>}
            {section?.content && <p className="text-base text-white">{section.content}</p>}
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-5 md:justify-end">
            {section?.buttons?.length > 0 &&
              section.buttons.map((item: any) => (
                <ButtonSection section={item} isContainer={false} key={item._key} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
