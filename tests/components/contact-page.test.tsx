import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "@/app/contact/page";

describe("ContactPage", () => {
	it("renders contact methods from profile", () => {
		render(<ContactPage />);
		expect(screen.getByText("Email")).toBeInTheDocument();
		expect(screen.getByText("heytor@heytor.dev")).toBeInTheDocument();
		expect(screen.getByText("@heytorvas")).toBeInTheDocument();
	});
});
