import { Title } from "@/app/components/title";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const projects: {
	href?: string;
	title: string;
	description: string;
	image: string;
}[] = [
	{
		title: "Portal do Trabalhador",
		href: "https://ctps.heytor.dev",
		description:
			"A tool for brazilian workers to help them with better understanding about your salary.",
		image: "/brazilian-worker.png",
	},
	{
		title: "Curriculum",
		href: "https://heytor.dev",
		description: "A platform for developers to present their resume.",
		image: "/curriculum.png",
	},
];

const Projects = () => {
	return (
		<section className="pb-14 border-slate-300 mb-14">
			<Title as="h2" variant="secondary" className="mb-4 mt-8">
				Projects
			</Title>

			<p className="text-slate-700 text-lg">
				Below is a selection of recent projects that I&apos;ve worked on.
			</p>
			<div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
				{projects.map((project) => {
					const isLink = !!project.href;
					const WrappingComponent = isLink ? Link : "div";

					return (
						<WrappingComponent
							href={project.href ?? "/"}
							key={project.title}
							className={clsx(
								"flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8",
							)}
						>
							<div className="relative rounded-xl mb-4 shadow-project">
								<Image
									width={450}
									height={240}
									quality={90}
									src={project.image}
									alt=""
									className="rounded-xl bg-cover"
								/>
							</div>
							<h3 className="text-slate-700 font-semibold tracking-tight text-xl">
								{project.title}
							</h3>
							<h3 className="text-slate-500 text-base">
								{project.description}
							</h3>
						</WrappingComponent>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
