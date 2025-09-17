import Link from 'next/link';
export default function NotFound404() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-200 leading-none">404</h1>
                    <div className="relative -mt-8">
                        <h2 className="text-3xl font-semibold text-gray-900">Page Not Found</h2>
                    </div>
                </div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">The page you're looking for doesn't exist or has been moved.</p>
                <div className="space-y-4">
                    <Link href="/" className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
                        Go Home
                    </Link>
                    <Link href="/" className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input hover:bg-accent hover:text-accent-foreground border h-10 px-4 w-full py-3 text-lg bg-transparent border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Go Back
                    </Link>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">Need help?{" "}<a href="#" className="text-blue-600 hover:underline">Contact Support</a></p>
                </div>
            </div>
        </div>
    )
}