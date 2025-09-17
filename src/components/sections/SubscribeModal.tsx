export default function SubscribeModal({isSubscribe, setIsSubscribe}: any) {
    
    return(
        <>
        {
            (isSubscribe ? (
                <div className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#000]/25 backdrop-blur-xs px-4 py-5 z-99999">
                    <div className="w-full max-w-[600px] rounded-2xl shadow-box-2 bg-white p-4 sm:p-7.5 xl:p-12.5 relative transform transition-all scale-100">
                        <button
                            onClick={() => setIsSubscribe(false)}
                            className="absolute top-6 right-6 flex items-center justify-center w-9 h-9 rounded-full ease-in duration-150 hover:text-dark hover:bg-gray-2 cursor-pointer"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                        <h2 className="font-semibold text-dark text-3xl mb-1.5">Newsletter</h2>
                        <p className="text-gray-500 mt-1">Subscribe to my newsletter to get updated posts</p>
                        <form className="mt-7.5 space-y-4">
                            <div className="mb-5.5">
                                <label htmlFor="email" className="block font-medium text-dark mb-2.5">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="rounded-md border border-gray-200 bg-white placeholder:text-dark-3 w-full py-3.5 px-5 outline-hidden ease-in duration-300 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md text-white font-medium flex justify-center py-3.5 px-5 bg-blue-700 hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-300 cursor-pointer"
                            >Subscribe</button>
                        </form>
                        <p className="text-center mt-4.5">Don&#39;t worry, I don&#39;t spam</p>
                    </div>
                </div>
            ) : "")
        }
        </>
    )
}