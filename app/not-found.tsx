import Link from "next/link";

export default function NotFound() {
	return (
		<div id="not-found">
			<div className="not-found">
				<h1>[Error] 404 Not Found</h1>
				<Link
					href="/"
					className="group inline-block rounded-full bg-slate-950 px-4 font-mono text-xs-line-height font-semibold text-white transition-colors hover:bg-slate-800"
				>
					Go to Home
				</Link>
			</div>
		</div>
	);
}
