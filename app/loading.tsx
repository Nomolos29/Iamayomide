import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" text="Loading..." />
        <p className="mt-4 text-gray-600">Please wait while we load the page.</p>
      </div>
    </div>
  );
}