// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden bg-gray-100 p-2 shadow-sm min-w-28 min-h-28 border-2 rounded-lg flex flex-col justify-between`}
    >
        <div className="h-5 w-20 rounded-md bg-gray-200" />
        <div>
            <div className="flex justify-between">
                <div className="h-5 w-8 rounded-md bg-gray-200" />
                <div className="h-5 w-8 rounded-md bg-gray-200" />
            </div>
        </div>
    </div>
  );
}

export function PlayersSkeleton() {
  return (
    <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between mt-3 mb-6">
            <h2 className="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Players</h2>
        </div>
        <div  className="flex gap-3 flex-wrap">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
      </div>
    </div>
  );
}