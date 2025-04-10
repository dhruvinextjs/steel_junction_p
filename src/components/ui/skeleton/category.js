import { Skeleton } from "@/components/ui/skeleton";

export function Category() {
  return (
    <div className="relative flex flex-col w-full my-2 space-y-3">
      <Skeleton className="h-[200px] rounded-xl bg-primary/10" />
    </div>
  );
}
