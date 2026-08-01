import About from "@/app/components/about/page";
import Educations from "@/app/components/educations/page";
import Experiences from "@/app/components/experiences/page";

export default function Home() {
	return (
		<main className="px-4 md:px-0">
			<About />
			<Experiences />
			<Educations />
		</main>
	);
}
