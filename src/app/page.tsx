import Link from "next/link";
import { services, portfolioItems, siteConfig } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            We Build Digital Experiences That{" "}
            <span className="text-indigo-500">Drive Growth</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {siteConfig.tagline}. From web development and UI/UX design to SEO
            and brand strategy, we deliver results that matter.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/portfolio"
              className="rounded-lg bg-indigo-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
            Comprehensive digital solutions tailored to your business needs.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
            A selection of projects we are proud to have delivered.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-950 dark:to-cyan-950">
                  <span className="text-4xl font-bold text-indigo-300 dark:text-indigo-700">
                    {item.title.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-indigo-500">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-block rounded-lg border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-indigo-500 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Let us discuss how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
