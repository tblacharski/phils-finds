export default function SubscribeSection({ section = '' }: { section?: any }) {

  const heading = section?.heading || "Subscribe to Newsletter";
  const content = section?.content || "Provide your email to get email notification when we launch new products or publish new articles";

  return (
    <div className={`subscribe-section py-15 lg:py-20 bg-gradient-to-t from-slate-100 to-slate-50 ${section?.class}`}>
      <div className="container">
        <div className="grid grid-cols-1 z-1 relative grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 lg:p-15 rounded-2xl bg-white">
          <div>
            {section?.subHeading && <p className="text-lg mb-2">{section.subHeading}</p>}
            {heading && <h2 className="text-4xl leading-[1.2] font-bold mb-2">{heading}</h2>}
            {content && <p className="text-base mb-0">{content}</p>}
          </div>
          <div className="flex flex-wrap gap-5 lg:justify-end">
            <form method="POST" className="flex flex-wrap w-full lg:justify-end items-center gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 md:flex-none px-4 py-3 w-[100%] sm:w-[50%] rounded-sm max-w-[100%] sm:max-w-[350px] border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="button button-primary w-[100%] sm:w-[auto] justify-center align-center"
              >
                {section?.buttonLabel || "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
