import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-9xl font-bold text-red-700 mb-4">404</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block w-full py-3 px-6 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            href="/more-about-me"
            className="inline-block w-full py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </div>
  );
}