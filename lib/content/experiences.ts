import experiencesJson from "@/public/api/experiences.json";
import type { Experience } from "@/lib/content/types";

export const experiences = experiencesJson as Experience[];
