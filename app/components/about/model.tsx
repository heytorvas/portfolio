interface Address {
	city: string;
	state: string;
	country: string;
}

interface SocialNetwork {
	website: string;
	github: string;
	linkedin: string;
}

export interface AboutModel {
	id: string;
	user: string;
	address: Address;
	social_network: SocialNetwork;
	summary: string;
}
