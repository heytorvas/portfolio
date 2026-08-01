import { Title } from "@/app/components/title";
import { TimelineItem } from "@/app/components/timeline-item";
import { educations } from "@/lib/content/educations";

const Educations = () => {
	return (
		<section>
			<Title as="h2" variant="secondary" className="mb-4 mt-8 ">
				Educations
			</Title>

			<div className="pb-14 border-b border-slate-300">
				{educations.map((education) => {
					return (
						<TimelineItem
							key={education.id}
							logoSrc={education.logo}
							logoAlt={`${education.school} logo`}
							title={education.school}
							dateFrom={education.date_from}
							dateTo={education.date_to}
						>
							<span className="text-slate-700 text-lg">
								{education.degree} in {education.course}
							</span>
						</TimelineItem>
					);
				})}
			</div>
		</section>
	);
};

export default Educations;
