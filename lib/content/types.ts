export type About = {
	id: string;
	summary: string;
};

export type ExperienceDetail = {
	role: string;
	project: string;
	description: string[];
};

export type Experience = {
	id: string;
	date_from: string;
	date_to: string | null;
	company: string;
	stack: string[];
	details: ExperienceDetail[];
	logo: string;
};

export type Education = {
	id: string;
	date_from: string;
	date_to: string;
	degree: string;
	school: string;
	course: string;
	logo: string;
};
