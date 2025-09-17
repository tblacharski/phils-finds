import Image from 'next/image';
import Link from 'next/link';
export default function MobileNavigation({ isOpen, setIsOpen, isSubscribe, setIsSubscribe, settings }: any) {

    return(
        <div className={`fixed inset-0 z-50 lg:hidden pointer-events-auto ${isOpen? 'w-full' :'w-0'}`}>
        <div
          className={`absolute inset-0 bg-black backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-80 pointer-events-auto" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`bg-white fixed right-0 top-0 h-full w-72 max-w-full shadow-xl px-6 py-6 z-50 flex flex-col transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black"
            aria-label="Close menu"
          >
            <span className="relative block w-4 h-4">
              <span className="absolute left-0 top-1/2 w-full h-0.5 bg-black transform -translate-y-1/2 rotate-45 transition-all duration-300" />
              <span className="absolute left-0 top-1/2 w-full h-0.5 bg-black transform -translate-y-1/2 -rotate-45 transition-all duration-300" />
            </span>
          </button>
          <div className="flex items-center space-x-2 pb-4 border-b">
            <Link href="/">
              {settings?.siteLogo?.asset?.url ? (
                <Image
                  src={settings.siteLogo.asset.url}
                  alt={settings.siteTitle || "Header Logo"}
                  width={150}
                  height={50}
                />
              ) : (
                <span>{settings?.siteTitle}</span>
              )}
            </Link>
          </div>
          <nav className="flex flex-col space-y-4 mt-6">
            {settings?.headerNavigation?.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.url}
                className="text-gray-700 hover:text-black text-base font-medium"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t flex flex-col space-y-3">
            <button 
                onClick={() => setIsSubscribe(true)} 
                className="rounded-md text-white font-medium flex justify-center py-2.5 px-5.5 bg-black transition-all ease-linear duration-200 hover:opacity-90"
            >Subscribe</button>
          </div>
        </div>
      </div>
    )
}