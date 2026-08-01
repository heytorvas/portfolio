import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

const YEAR_MONTH = /^(\d{4})-(0[1-9]|1[0-2])$/;

export function convertDate(date: string | null | undefined): string {
	if (date == null || date === "") {
		return "Present";
	}

	const match = YEAR_MONTH.exec(date);
	if (!match) {
		return "Present";
	}

	const year = Number(match[1]);
	const monthIndex = Number(match[2]) - 1;
	const dateObject = new Date(Date.UTC(year, monthIndex, 15));
	const month = dateObject.toLocaleString("en-US", {
		month: "long",
		timeZone: "UTC",
	});
	return `${month} ${year}`;
}
