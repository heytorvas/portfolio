interface ExperienceDetail {
	role: string;
	project: string;
	description: string[];
}

export interface Experience {
	id: string;
	date_from: string;
	date_to: string;
	user: string;
	company: string;
	stack: string[];
	details: ExperienceDetail[];
	logo: string;
}
