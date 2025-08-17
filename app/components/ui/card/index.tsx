import { ReactNode } from "react";
import { cn } from "@alfred/app/shared";

export default function Card({
  children,
  className,
  value,
  title,
}: {
  children?: ReactNode;
  className?: string;
  value: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "min-w-52 w-fit h-fit shadow-lg border border-gray-400/30 rounded-lg p-4",
        className
      )}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-500 text-sm">{title}</p>
          <div className="flex items-center gap-1">{children}</div>
        </div>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
