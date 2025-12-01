"use client";

export function BookContainerSkeleton() {
  return (
    <div className="flex flex-col gap-10 pt-3 animate-pulse">

      {/* Recommended Section Skeleton */}
      <section className="flex flex-col gap-4 bg-gray-100 rounded-3xl p-4 border border-gray-300">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-300" />
            <div className="space-y-2">
              <div className="w-32 h-6 bg-gray-300 rounded" />
              <div className="w-48 h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </div>

        {/* Horizontal scroll skeleton */}
        <div className="grid grid-flow-col auto-cols-[65%] sm:auto-cols-[33%] lg:auto-cols-[25%] gap-4 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {[1,2,3,4].map((_, i) => (
            <div key={i} className="h-48 bg-gray-300 rounded-xl" />
          ))}
        </div>
      </section>

      {/* Categories Skeleton */}
      {[1, 2, 3,4].map((_, i) => (
        <section key={i} className="flex flex-col gap-4 bg-gray-100 rounded-3xl p-4 border border-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-300" />
              <div className="space-y-2">
                <div className="w-32 h-6 bg-gray-300 rounded" />
                <div className="w-48 h-4 bg-gray-300 rounded" />
              </div>
            </div>
            <div className="w-24 h-8 bg-gray-300 rounded-xl" />
          </div>

          <div className="grid grid-flow-col auto-cols-[65%] sm:auto-cols-[33%] lg:auto-cols-[25%] gap-4 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {[1,2,3,4].map((_, j) => (
              <div key={j} className="h-48 bg-gray-300 rounded-xl" />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}


export function ViewAllByCategorySkeleton() {
  return (
    <div className="w-full animate-pulse space-y-6">
      {/* Back Button Skeleton */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-10 w-10 rounded-lg bg-gray-300" /> {/* Icon placeholder */}
        <div className="h-10 w-28 rounded-lg bg-gray-300" /> {/* Button text placeholder */}
      </div>

      {/* Books Grid Skeleton */}
      <section className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border border-indigo-100">
        <div
          className="
            grid 
            grid-cols-2         
            sm:grid-cols-3   
            lg:grid-cols-4    
            gap-4
          "
        >
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="h-60 rounded-xl bg-gray-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
}




export function BookSelectedSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-6">
      {/* Back button skeleton */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
      </div>

      {/* Book detail skeleton */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 p-5">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Book cover */}
          <div className="md:col-span-2">
            <div className="h-64 md:h-full rounded-xl bg-gray-300" />
          </div>

          {/* Book info */}
          <div className="md:col-span-3 space-y-4">
            <div className="h-8 w-3/4 bg-gray-300 rounded-md" />
            <div className="flex gap-4">
              <div className="h-6 w-24 bg-gray-300 rounded-full" />
              <div className="h-6 w-20 bg-gray-300 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-300 rounded-md" />
              <div className="h-4 w-1/3 bg-gray-300 rounded-md" />
              <div className="h-4 w-1/2 bg-gray-300 rounded-md" />
            </div>
            <div className="h-20 bg-gray-300 rounded-md" />
            <div className="flex gap-4 mt-6">
              <div className="h-12 flex-1 bg-gray-300 rounded-lg" />
              <div className="h-12 w-24 bg-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Related books skeleton */}
      <section className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border border-indigo-100">
        <div className="h-8 w-48 bg-gray-300 rounded-md mb-4" />
        <div className="grid grid-flow-col auto-cols-[65%] sm:auto-cols-[33%] lg:auto-cols-[25%] gap-4 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-300 rounded-lg inline-block" />
          ))}
        </div>
      </section>
    </div>
  );
}
