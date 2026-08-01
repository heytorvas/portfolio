import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Educations from "@/app/components/educations";

describe("Educations", () => {
	it("renders schools", () => {
		render(<Educations />);
		expect(screen.getByText(/UNICV/)).toBeInTheDocument();
		expect(
			screen.getByText(/State of Tocantins University/),
		).toBeInTheDocument();
	});
});
