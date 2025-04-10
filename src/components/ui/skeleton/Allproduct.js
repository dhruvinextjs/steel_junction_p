import { Skeleton } from "@/components/ui/skeleton";

export function AllProduct() {
  return (
    <div className="relative flex flex-col w-full my-2 space-y-3">
      <Skeleton className="h-[350px] w-full rounded-lg bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-[shine_1.5s_infinite]" />
    </div>
  );
}
