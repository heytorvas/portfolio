import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "@/app/components/about";

describe("About", () => {
	it("renders the intro heading and summary", () => {
		render(<About />);
		expect(screen.getByText(/Hi, I’m Heytor/i)).toBeInTheDocument();
		expect(screen.getByText(/Python Software Engineer/i)).toBeInTheDocument();
	});
});
