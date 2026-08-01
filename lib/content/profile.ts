export type ContactMethod = {
	method: string;
	link: string;
	label: string;
};

export const RESUME_URL =
	"https://docs.google.com/document/d/1t00DRB2W4SMrxiAJeZmHcxrAqfv43ArJiTRjLwAsLIM/preview";

export const contactMethods: ContactMethod[] = [
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

export const sameAs = [
	"https://www.github.com/heytorvas",
	"https://www.linkedin.com/in/heytorvictor/",
];

export const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Heytor Victor",
	image: "https://heytor.dev/avatar.jpg",
	url: "https://heytor.dev",
	jobTitle: "Software Engineer",
	sameAs,
} as const;
