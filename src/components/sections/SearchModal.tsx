export default function SearchModal({isSearch, setIsSearch}: any) {
    
    return(
        <>
        {
            (isSearch ? (
                <div className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-[#000]/25 backdrop-blur-sm px-4 py-5 z-[99999]">
          <div className="w-full max-w-[600px] rounded-2xl shadow-2xl bg-white p-4 sm:p-7.5 xl:p-12.5 relative transform transition-all scale-100">
            <button
              onClick={() => setIsSearch(false)}
              className="absolute top-6 right-6 flex items-center justify-center w-9 h-9 rounded-full ease-in duration-150 hover:text-gray-900 hover:bg-gray-100 cursor-pointer text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-8">
              <h2 className="font-semibold text-gray-900 text-3xl mb-1.5">Search</h2>
            </div>
            <form method="get" action="/search" className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <input
                  name="s"
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl bg-white placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl text-white font-medium flex justify-center py-4 px-5 bg-blue-600 hover:bg-blue-700 transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                Search
              </button>
            </form>
          </div>
        </div>
            ) : "")
        }
        </>
    )
}