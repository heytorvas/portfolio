import Link from "next/link";
import { PageHeader } from "@/app/components/page-header";
import { Title } from "@/app/components/title";

type ContactMethod = {
	method: string;
	link: string;
	label: string;
};

const contactMethods: ContactMethod[] = [
	{
		method: "Email",
		link: "mailto:heytor@heytor.dev",
		label: "heytor@heytor.dev",
	},
	{
		method: "GitHub",
		link: "https://github.com/heytorvas",
		label: "@heytorvas",
	},
	{
		method: "LinkedIn",
		link: "https://www.linkedin.com/in/heytorvictor/",
		label: "@heytorvictor",
	},
	{
		method: "Telegram",
		link: "https://t.me/heytor",
		label: "@heytor",
	},
];

export default function ContactPage() {
	return (
		<main className="px-4 md:px-0">
			<PageHeader title="Contact" />
			<section className="pb-8">
				<p className="text-lg mb-4">
					If you&apos;d like to get in touch whether have a question, tell me
					about your project or just say hi, you can reach me using the
					following methods.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{contactMethods.map((item) => (
						<div className="flex flex-col" key={item.method}>
							<Title as="h2" variant="tertiary">
								{item.method}
							</Title>
							<Link href={item.link} className="text-slate-700">
								{item.label}
							</Link>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
