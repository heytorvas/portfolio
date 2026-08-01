import { Title } from "@/app/components/title";
import { Badge } from "@/app/components/badge";
import { TimelineItem } from "@/app/components/timeline-item";
import { experiences } from "@/lib/content/experiences";

const Experiences = () => {
	return (
		<section>
			<Title as="h2" variant="secondary" className="mb-4 mt-8">
				Experiences
			</Title>

			<div className="pb-14 border-b border-slate-300 mb-14">
				{experiences.map((exp) => {
					return (
						<TimelineItem
							key={exp.id}
							logoSrc={exp.logo}
							logoAlt={`${exp.company} logo`}
							title={exp.company}
							dateFrom={exp.date_from}
							dateTo={exp.date_to}
						>
							{exp.details.map((detail) => {
								return (
									<div className="flex flex-col" key={detail.role}>
										<span className="text-slate-700 text-lg">
											{detail.role}
										</span>

										<div className="mt-3">
											<p>
												<b>Project:</b> {detail.project};
											</p>
											<p>
												<b>Description:</b>
											</p>
											<ul>
												{detail.description.map((desc) => {
													return <li key={desc}>• {desc};</li>;
												})}
											</ul>
										</div>
									</div>
								);
							})}

							<div className="flex flex-wrap gap-2 py-3">
								{exp.stack.map((tech) => {
									return <Badge key={tech}>{tech}</Badge>;
								})}
							</div>
						</TimelineItem>
					);
				})}
			</div>
		</section>
	);
};

export default Experiences;
