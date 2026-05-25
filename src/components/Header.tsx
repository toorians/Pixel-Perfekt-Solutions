"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#191818]">
      <nav className="mx-auto flex h-[84px] max-w-[1920px] items-center justify-between px-4 sm:px-6 lg:px-[229px]">
        <Link href="/">
          <img
            src="/images/dark backgound 1.png"
            alt="Pixel Perfekt Solutions"
            className="h-[38px] w-[170px] object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2CB6C0] ${
                  pathname === link.href
                    ? "text-[#2CB6C0]"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-[30px] border-[3px] border-[#2CB6C0] bg-black px-8 py-3 font-[Poppins] text-sm font-medium uppercase text-white transition-colors hover:bg-[#2CB6C0] lg:inline-block"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-md lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#5D5C5C] bg-[#191818] px-4 pb-6 pt-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#2CB6C0] ${
                    pathname === link.href ? "text-[#2CB6C0]" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
