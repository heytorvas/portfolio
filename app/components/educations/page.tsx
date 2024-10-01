"use client";

import React from "react";
import { convertDate } from "@/app/components/utils";
import { Title } from "@/app/components/title";
import Image from "next/image";
import educationData from "@/public/api/educations.json";

const Educations = () => {
	const data = educationData;

	return (
		<section>
			<Title as="h2" variant="secondary" className="mb-4 mt-8 ">
				Educations
			</Title>

			<div className="pb-14 border-b border-slate-300 mb-14">
				{data.map((education) => {
					return (
						<div className="flex gap-4 py-6" key={education.id}>
							<Image
								width={56}
								height={56}
								src={education.logo}
								alt={`${education.school} logo`}
								className="w-14 h-14 rounded-xl"
							/>
							<div className="flex flex-col col-span-9">
								<span className="text-slate-800 text-xl font-semibold">
									{education.school}{" "}
									<span className="text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
										{convertDate(education.date_from)} →{" "}
										{convertDate(education.date_to)}
									</span>
								</span>
								<span className="text-slate-700 text-lg">
									{education.degree} in {education.course}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Educations;
