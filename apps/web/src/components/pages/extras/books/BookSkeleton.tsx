export function ViewAllByCategorySkeleton() {
  const sectionsCount = 4;
  const skeletonBooksCount = 6; // books per row in skeleton

  return (
    <div className="flex flex-col pt-3 space-y-8 animate-pulse">

      {[...Array(sectionsCount)].map((_, sectionIndex) => (
        <section
          key={sectionIndex}
          className="flex flex-col gap-4 rounded-3xl border-none pb-4"
        >
          {/* Header Skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-300 dark:bg-zinc-800 rounded-3xl w-9 h-9" /> {/* icon skeleton */}
              <div className="space-y-1">
                <div className="h-5 w-24 rounded-lg bg-gray-300 dark:bg-zinc-800" /> {/* title */}
                <div className="h-3 w-36 rounded-lg bg-gray-300 dark:bg-zinc-800" /> {/* subtitle */}
              </div>
            </div>

            {/* Button Skeleton */}
            <div className="h-8 w-24 rounded-3xl bg-gray-300 dark:bg-zinc-800" />
          </div>

          {/* Horizontal scrollable book cards skeleton */}
          <div
            className="
              grid grid-flow-col
              auto-cols-[65%]
              sm:auto-cols-[33%]
              lg:auto-cols-[25%]
              gap-4 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide
            "
          >
            {[...Array(skeletonBooksCount)].map((__, i) => (
              <div
                key={i}
                className="aspect-[9/13] rounded-3xl bg-gray-300 dark:bg-zinc-800 inline-block"
              />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}


export function BookSelectedSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-6">
      {/* Back button skeleton */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-24 bg-gray-300 dark:bg-zinc-800 rounded-lg"></div>
      </div>

      {/* Book detail skeleton */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden mb-8 p-5">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Book cover */}
          <div className="md:col-span-2">
            <div className="h-64 md:h-full rounded-xl bg-gray-300 dark:bg-zinc-800" />
          </div>

          {/* Book info */}
          <div className="md:col-span-3 space-y-4">
            <div className="h-8 w-3/4 bg-gray-300 dark:bg-zinc-800 rounded-md" />
            <div className="flex gap-4">
              <div className="h-6 w-24 bg-gray-300 dark:bg-zinc-800 rounded-full" />
              <div className="h-6 w-20 bg-gray-300 dark:bg-zinc-800 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-300 dark:bg-zinc-800 rounded-md" />
              <div className="h-4 w-1/3 bg-gray-300 dark:bg-zinc-800 rounded-md" />
              <div className="h-4 w-1/2 bg-gray-300 dark:bg-zinc-800 rounded-md" />
            </div>
            <div className="h-20 bg-gray-300 dark:bg-zinc-800 rounded-md" />
            <div className="flex gap-4 mt-6">
              <div className="h-12 flex-1 bg-gray-300 dark:bg-zinc-800 rounded-lg" />
              <div className="h-12 w-24 bg-gray-300 dark:bg-zinc-800 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Related books skeleton */}
      <section className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border border-indigo-100">
        <div className="h-8 w-48 bg-gray-300 dark:bg-zinc-800 rounded-full mb-4" />
        <div className="grid grid-flow-col auto-cols-[65%] sm:auto-cols-[33%] lg:auto-cols-[25%] gap-4 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-300 dark:bg-zinc-800 rounded-lg inline-block" />
          ))}
        </div>
      </section>
    </div>
  );
}
