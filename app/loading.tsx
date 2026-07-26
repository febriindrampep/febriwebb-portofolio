export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner elegan */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-500 text-sm font-medium tracking-wide animate-pulse">
          Memuat...
        </p>
      </div>
    </div>
  );
}