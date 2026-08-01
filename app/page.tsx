import About from "@/app/components/about";
import Educations from "@/app/components/educations";
import Experiences from "@/app/components/experiences";

export default function Home() {
	return (
		<main className="px-4 md:px-0">
			<About />
			<Experiences />
			<Educations />
		</main>
	);
}
