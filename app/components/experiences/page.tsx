'use client';

import React, { useEffect, useState } from 'react';
import { Title } from '@/app/components/title';
import { Badge } from '@/app/components/badge';
import { Experience } from '@/app/components/experiences/model';
import { fetchData, convertDate } from '@/app/components/utils';
import Image from 'next/image';


const Experiences = () => {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    fetchData('experiences', setData);
  }, []);

  return (
    <section>
      <Title as="h2" variant="secondary" className="mb-4 mt-8">
        Experiences
      </Title>

      <div className="pb-14 border-b border-slate-300 mb-14">
        {data.map((exp) => {
          return (
            <div className="flex gap-4 py-6" key={exp.id}>
              <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
              />
              <div className="flex flex-col col-span-9">
                <span className="text-slate-800 text-xl font-semibold">
                  {exp.company} <span
                  className="text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {convertDate(exp.date_from)} → {convertDate(exp.date_to)}
                  </span>
                </span>

                {exp.details.map((detail) => {
                  return (
                    <div className="flex flex-col col-span-9">
                      <span
                        className="text-slate-700 text-lg">{detail.role}</span>

                      <div className="mt-3">
                        <p><b>Project:</b> {detail.project};</p>
                        <p><b>Description:</b></p>
                        <ul>
                          {detail.description.map((desc) => {
                            return (
                              <li>🞄 {desc};</li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}

                <div className="flex flex-wrap gap-2 py-3">
                  {exp.stack.map((tech) => {
                    return (
                      <Badge key={tech}>{tech}</Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;