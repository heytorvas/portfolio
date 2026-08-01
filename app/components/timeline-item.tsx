import Image from "next/image";
import { convertDate } from "@/lib/utils";

type TimelineItemProps = {
	logoSrc: string;
	logoAlt: string;
	title: string;
	dateFrom: string;
	dateTo: string | null | undefined;
	children?: React.ReactNode;
};

export function TimelineItem({
	logoSrc,
	logoAlt,
	title,
	dateFrom,
	dateTo,
	children,
}: TimelineItemProps) {
	return (
		<div className="flex gap-4 py-6">
			<Image
				width={56}
				height={56}
				src={logoSrc}
				alt={logoAlt}
				className="w-14 h-14 rounded-xl"
			/>
			<div className="flex flex-col">
				<span className="text-slate-800 text-xl font-semibold">
					{title}{" "}
					<span className="text-slate-500 text-sm font-medium tracking-tighter font-mono">
						{convertDate(dateFrom)} → {convertDate(dateTo)}
					</span>
				</span>
				{children}
			</div>
		</div>
	);
}
