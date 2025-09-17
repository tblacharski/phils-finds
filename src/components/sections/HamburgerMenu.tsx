'use client';
export default function HamburgerMenu({ isOpen, setIsOpen }: any) {

    return(
        <button
        aria-label="Toggle navigation menu"
        className="lg:hidden block"
        onClick={() => setIsOpen(!isOpen)}
        >
            <span className="relative cursor-pointer w-[22px] h-[22px] block">
                <span className="absolute right-0 w-full h-full">
                    <span className={`block bg-black rounded-sm h-0.5 my-1 transition-all duration-300 ${!isOpen ? 'w-full delay-300' : 'w-0'}`}/>
                    <span className={`block bg-black rounded-sm h-0.5 my-1 transition-all duration-300 ${!isOpen ? 'w-full delay-400' : 'w-0'}`}/>
                    <span className={`block bg-black rounded-sm h-0.5 my-1 transition-all duration-300 ${!isOpen ? 'w-full delay-500' : 'w-0'}`}/>
                </span>
                <span className="absolute right-0 w-full h-full rotate-45">
                    <span className={`block bg-black rounded-sm w-0.5 absolute left-[10px] top-0 transition-all duration-300 ${isOpen ? 'h-full delay-0' : 'h-0'}`}/>
                    <span className={`block bg-black rounded-sm h-0.5 absolute left-0 top-[10px] transition-all duration-300 ${isOpen ? 'w-full delay-200' : 'w-0'}`}/>
                </span>
            </span>
        </button>
    )
}