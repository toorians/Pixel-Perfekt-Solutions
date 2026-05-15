import type { Metadata } from "next";
import { portfolioItems, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Browse ${siteConfig.name}'s portfolio of web development, UI/UX design, and digital strategy projects.`,
};

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Our Portfolio
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A showcase of the projects we have delivered. Each one represents a
            partnership built on trust, creativity, and technical excellence.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-56 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-950 dark:to-cyan-950">
                  <span className="text-5xl font-bold text-indigo-300 dark:text-indigo-700">
                    {item.title.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-indigo-500">
                  {item.category}
                </span>
                <h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
