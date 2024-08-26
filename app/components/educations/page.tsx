'use client';

import React, { useEffect, useState } from 'react';
import { Education } from '@/app/components/educations/model';
import { convertDate, fetchData } from '@/app/components/utils';
import { Title } from '@/app/components/title';

const Educations = () => {
  const [data, setData] = useState<Education[]>([]);

  useEffect(() => {
    fetchData('educations', setData);
  }, []);

  return (
    <section>
      <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
        Educations
      </Title>

      <div className="divide-y divide-slate-200">
        {data.map((education) => {
          return (
            <div className="flex gap-4 py-6" key={education.id}>
              <div className="flex flex-col col-span-9">
                <span className="text-slate-800 text-xl font-semibold">
                  {education.school} <span
                  className="text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">{convertDate(education.date_from)} → {convertDate(education.date_to)}</span>
                </span>
                <span
                  className="text-slate-700 text-lg">{education.degree} in {education.course}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Educations;