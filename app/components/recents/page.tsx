import { Title } from "@/app/components/title";
import { ArticleLink } from "@/app/components/article-link";
import Link from "next/link";
import { getAllPosts } from "@/lib/articles";

const RecentPosts = async () => {
	const posts = await getAllPosts({
		includeDrafts: process.env.NODE_ENV === "development",
	});

	return (
		<section className="mb-4 mt-8">
			<Title as="h2" variant="secondary" className="mb-8">
				Recent Posts
			</Title>
			<div className="divide-y">
				{posts.slice(0, 3).map((post) => {
					return (
						<ArticleLink
							key={post?.meta.title}
							href={post.href}
							title={post.meta.title}
							date={post?.date}
							summary={post.meta.summary}
						/>
					);
				})}
			</div>
			<Link
				href="/posts"
				className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
			>
				View More{" "}
				<span className="inline-block group-hover:translate-x-2 transition-transform">
					→
				</span>
			</Link>
		</section>
	);
};

export default RecentPosts;
