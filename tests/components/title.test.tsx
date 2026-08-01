import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Title } from "@/app/components/title";

describe("Title", () => {
	it("renders the chosen heading level and text", () => {
		render(
			<Title as="h2" variant="secondary">
				Experiences
			</Title>,
		);
		expect(
			screen.getByRole("heading", { level: 2, name: "Experiences" }),
		).toBeInTheDocument();
	});
});
