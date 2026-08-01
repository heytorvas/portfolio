import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = HTMLAttributes<HTMLDivElement>;

export function Badge({ className, ...props }: BadgeProps) {
	return (
		<div
			className={cn(
				"inline-flex items-center rounded-md border border-transparent bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-white",
				className,
			)}
			{...props}
		/>
	);
}
