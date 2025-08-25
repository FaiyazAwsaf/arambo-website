export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-[#1946bb]/30 border-t-[#1946bb]"></div>

      {/* Text */}
      <p className="mt-4 text-[#1946bb] font-semibold text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
}
