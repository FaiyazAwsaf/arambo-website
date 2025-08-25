import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-6 lg:gap-18 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Texts first on large screens, but below image on small */}
      <div className="order-2 lg:order-1 w-full text-left">
        <h1 className="text-Arambo-Black h1 mb-3">Page Not Found!</h1>
        <p className="label-16 text-Arambo-Text mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href={"/"}
          className="bg-Arambo-Accent label-18 text-white w-fit flex gap-2 px-8 py-4 rounded"
        >
          Go Back {">"}
        </Link>
      </div>

      {/* Image first on small, right side on large */}
      <div className="order-1 lg:order-2 w-full mb-8 lg:mb-0">
        <img
          src="/notfound.png"
          className="rounded-2xl w-full h-auto"
          alt="Page not found illustration"
        />
      </div>
    </section>
  );
}
