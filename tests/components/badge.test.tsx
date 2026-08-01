import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "@/app/components/badge";

describe("Badge", () => {
	it("renders children", () => {
		render(<Badge>Python</Badge>);
		expect(screen.getByText("Python")).toBeInTheDocument();
	});
});
