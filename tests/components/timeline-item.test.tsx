import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TimelineItem } from "@/app/components/timeline-item";

describe("TimelineItem", () => {
	it("renders title, present date, and children", () => {
		render(
			<TimelineItem
				logoSrc="/logos/objective.png"
				logoAlt="Objective logo"
				title="Objective"
				dateFrom="2024-04"
				dateTo={null}
			>
				<p>Software Engineer</p>
			</TimelineItem>,
		);

		expect(screen.getByText("Objective")).toBeInTheDocument();
		expect(screen.getByText(/Present/)).toBeInTheDocument();
		expect(screen.getByText("Software Engineer")).toBeInTheDocument();
		expect(screen.getByAltText("Objective logo")).toBeInTheDocument();
	});
});
