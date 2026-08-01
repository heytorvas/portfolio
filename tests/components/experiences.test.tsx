import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experiences from "@/app/components/experiences";

describe("Experiences", () => {
	it("renders companies and Present for current role", () => {
		render(<Experiences />);
		expect(screen.getByText("Objective")).toBeInTheDocument();
		expect(screen.getByText("Zetta")).toBeInTheDocument();
		expect(screen.getAllByText(/Present/).length).toBeGreaterThan(0);
		expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
	});
});
