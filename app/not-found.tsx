import Link from 'next/link'

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found">
        <h1>[Error] 404 Not Found</h1>
        <p></p>
        <Link
          href="/"
          target="_blank"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block font-mono text-xs-line-height font-semibold rounded-full px-4 text-white"
        >
          Go to Home
        </Link>
      </div>

    </div>
  )
}