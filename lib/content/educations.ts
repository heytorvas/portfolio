import educationsJson from "@/public/api/educations.json";
import type { Education } from "@/lib/content/types";

export const educations = educationsJson as Education[];
