import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-100px)] flex  items-center container mx-auto">
      {/* Left Side - Content */}
      <div className="flex-1  flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-lg w-full">
          {/* Logo */}

          {/* Main Content */}
          <div className="mb-10">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Page Not Found!
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The page you are looking for does not exist or may have been
              moved.
            </p>
          </div>

          {/* Additional Link */}
          <div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
