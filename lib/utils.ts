import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export function convertDate(date: string | null | undefined): string {
	if (date == null) {
		return "Present";
	}

	const dateObject = new Date(`${date}-15`);
	const month = dateObject.toLocaleString("en-US", { month: "long" });
	return `${month} ${dateObject.getFullYear()}`;
}
