import type { Metadata } from "next";
import { services, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.name}'s digital services — web development, UI/UX design, SEO, brand strategy, e-commerce, and analytics.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We offer a comprehensive suite of digital services designed to help
            your business succeed online. Every solution is tailored to your
            unique goals and challenges.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="mt-1 text-4xl"
                    role="img"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-500">&check;</span>
                        Tailored to your business needs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-500">&check;</span>
                        Industry-best practices and tools
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-500">&check;</span>
                        Ongoing support and optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
