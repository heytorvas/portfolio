'use client';

import aboutData from '@/app/data/about.json'

const About = () => {
  const data = aboutData;

  return (
    <section className="pb-14 border-b border-slate-300 mb-14">
      <h1 className="font-semibold text-4xl mb-4 text-slate-950">
        Hi, I’m Heytor.
        <span className="block text-slate-500 font-normal text-2xl">
            A software engineer.
          </span>
      </h1>
      <p className="text-slate-700 text-lg md:text-xl leading-normal">
        {data.summary}
      </p>
    </section>
  );
}

export default About;