import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

import Experiences from '@/app/components/experiences/page';
import About from '@/app/components/about/page';
import Educations from '@/app/components/educations/page';
import Projects from '@/app/components/projects/page';
import RecentPosts from '@/app/components/recents/page';


export default async function Home() {
  return (
    <main className="px-4 md:px-0">
      <About/>

      <Experiences/>

      <Educations/>

      <Projects/>

    </main>
  );
}
