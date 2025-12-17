'use client';

export default function CalculateContentSkeleton() {
  const skeletonCount = 6;

  return (
    <div className="min-h-screen animate-pulse">
      <div className="max-w-6xl mx-auto">

        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="bg-indigo-600 py-8 px-4 rounded-t-3xl">
            <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
              <div className="flex items-center gap-3 mb-2 justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="h-10 w-56 bg-white rounded-3xl"></div>
              </div>

              <div className="flex w-full items-center mt-4 justify-center sm:justify-end rounded-md">
                <div className="bg-gray-300 rounded-3xl p-1 w-full sm:w-[260px] flex gap-2">
                  <div className="flex-1 h-10 bg-gray-400 rounded-full"></div>
                  <div className="flex-1 h-10 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Cards Skeleton */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12
            md:[&>*:last-child]:col-span-2
            lg:[&>*:last-child]:col-start-2
            lg:[&>*:last-child]:col-span-1
            md:[&>*:last-child]:max-w-[350px]
            md:[&>*:last-child]:mx-auto"
        >
          {[...Array(skeletonCount)].map((_, i) => (
            <div key={i} className="w-full border-1 border-gray-400 rounded-3xl shadow-sm bg-white p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-300 shadow-md"></div>
                <div className="h-6 w-3/5 bg-gray-300 rounded"></div>
              </div>
              <div className="w-full h-12 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Calculate Button Skeleton */}
        <div className="flex flex-col items-center mb-8">
          <div className="px-16 py-4 rounded-3xl text-xl font-bold shadow-sm bg-gray-300 w-[250px]"></div>
        </div>

        {/* Result Card Skeleton */}
        <div className="w-full flex flex-col shadow-sm rounded-3xl p-4 bg-white">
          <div className="flex items-center justify-center mt-4">
            <div className="h-10 w-72 bg-gray-300 rounded-md"></div>
          </div>

          <div className="flex items-center justify-center w-full p-4">
            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 rounded-3xl p-4 scale-90 sm:scale-95 md:scale-100 w-full max-w-4xl">
              {/* Final Result */}
              <div className="flex flex-col justify-center items-center gap-2 w-20 sm:w-24 md:w-28">
                <div className="h-5 w-20 bg-gray-300 rounded"></div>
                <div className="h-10 w-16 bg-gray-400 rounded"></div>
              </div>

              {/* Total Score */}
              <div className="flex flex-col justify-center items-center gap-2 bg-gray-300 rounded-3xl p-3 sm:p-4 w-28 sm:w-32 md:w-35 shadow-lg">
                <div className="h-5 w-24 bg-gray-400 rounded-3xl"></div>
                <div className="h-12 w-20 bg-gray-500 rounded"></div>
              </div>

              {/* Final Grade */}
              <div className="flex flex-col justify-center items-center gap-2 w-20 sm:w-24 md:w-28">
                <div className="h-5 w-20 bg-gray-300 rounded"></div>
                <div className="h-10 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Each Subject Result Skeleton */}
          <div className="p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(skeletonCount)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-3xl p-5 flex relative flex-col items-start h-40"
                >
                  {/* Icon and subject name */}
                  <div className='flex gap-2 items-center mb-4'>
                    <div className="bg-gray-400 p-2 rounded-full w-8 h-8"></div>
                    <div className="h-6 w-28 bg-gray-300 rounded"></div>
                  </div>

                  {/* Score and grade */}
                  <div className="flex items-center justify-end w-full">
                    <div className="h-10 w-12 bg-gray-400 rounded"></div>
                  </div>

                  <div className='absolute left-0 bottom-0 bg-gray-400 p-2 rounded-bl-3xl w-17 rounded-tr-[80px]'>
                    <div className="h-6 w-12 bg-gray-500 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
