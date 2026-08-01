import { describe, expect, it } from "vitest";
import { cn, convertDate } from "@/lib/utils";

describe("convertDate", () => {
	it('returns "Present" for nullish or empty values', () => {
		expect(convertDate(null)).toBe("Present");
		expect(convertDate(undefined)).toBe("Present");
		expect(convertDate("")).toBe("Present");
	});

	it("formats YYYY-MM as Month YYYY in en-US", () => {
		expect(convertDate("2024-04")).toBe("April 2024");
		expect(convertDate("2022-03")).toBe("March 2022");
	});

	it('returns "Present" for invalid strings', () => {
		expect(convertDate("not-a-date")).toBe("Present");
		expect(convertDate("2024")).toBe("Present");
		expect(convertDate("2024-13")).toBe("Present");
	});
});

describe("cn", () => {
	it("merges class names and resolves Tailwind conflicts", () => {
		expect(cn("px-2", "px-4")).toBe("px-4");
		expect(cn("text-slate-500", false && "hidden", "font-mono")).toContain(
			"text-slate-500",
		);
	});
});
