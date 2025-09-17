export default function ContactFormSection({ section }: { section: any }) {
  
  return (
    <div className={`contact-form-section py-12 lg:py-20 bg-gradient-to-t from-slate-100 to-slate-50 ${section?.class || ""}`} >
      <div className="container">
        <div className="mb-10 text-center">
          {section?.subHeading && (<p className="text-lg mb-3 font-bold">{section.subHeading}</p>)}
          {section?.heading && (<h2 className="text-4xl leading-[1.2] font-bold mb-4">{section.heading}</h2>)}
          {section?.content && <p className="text-base mb-0">{section.content}</p>}
        </div>
        <div className="p-10 lg:p-16 rounded-2xl bg-white shadow-lg">
          <form method="POST" className="w-full">
            <div className="flex w-full gap-5 mb-5 flex-wrap justify-between">
              <div className="w-full md:w-[calc(50%-20px)]">
                <label htmlFor="firstName" className="block text-md font-bold text-slate-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                  className="px-4 py-3 w-full rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="w-full md:w-[calc(50%-20px)]">
                <label htmlFor="lastName" className="block text-md font-bold text-slate-700 mb-2">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  className="px-4 py-3 w-full rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="w-full md:w-[calc(50%-20px)]">
                <label htmlFor="businessEmail" className="block text-md font-bold text-slate-700 mb-2">Business Email</label>
                <input
                  id="businessEmail"
                  type="email"
                  name="businessEmail"
                  placeholder="Enter your business email"
                  required
                  className="px-4 py-3 w-full rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="w-full md:w-[calc(50%-20px)]">
                <label htmlFor="phone" className="block text-md font-bold text-slate-700 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="px-4 py-3 w-full rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block text-md font-bold text-slate-700 mb-2">What are you looking for?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  rows={6}
                  className="px-4 py-3 w-full rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="button button-primary">
              {section?.buttonLabel || "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
