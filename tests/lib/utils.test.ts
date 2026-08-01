import { describe, expect, it } from "vitest";
import { cn, convertDate } from "@/lib/utils";

describe("convertDate", () => {
	it('returns "Present" for nullish values', () => {
		expect(convertDate(null)).toBe("Present");
		expect(convertDate(undefined)).toBe("Present");
	});

	it("formats YYYY-MM as Month YYYY in en-US", () => {
		expect(convertDate("2024-04")).toBe("April 2024");
		expect(convertDate("2022-03")).toBe("March 2022");
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
