"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

const serviceCardIcons = [
  "/images/Frame 6.svg",
  "/images/Group 6.svg",
  "/images/Frame 3.svg",
  "/images/Group.svg",
];

const whatWeOfferIcons = [
  "/images/Frame 9.svg",
  "/images/Group (1).svg",
  "/images/Frame 11.svg",
  "/images/User Experience.svg",
  "/images/Frame 13.svg",
  "/images/_x30_6.svg",
];

const portfolioImages = [
  "/images/Rectangle 27 (2).png",
  "/images/Rectangle 28.png",
  "/images/Rectangle 29.png",
];

const processIcons = [
  "/images/Frame 21.svg",
  "/images/Group 16.svg",
  "/images/outline.svg",
  "/images/Frame 21.svg",
  "/images/Group 16.svg",
];

const serviceCards = [
  { title: "Future Perception", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "Creative Solution", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "Never Ending Ideas", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "Product knowledge", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
];

const whatWeOffer = [
  { title: "Branding", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "Logo Design", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "Web Development", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "App Development", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "Social Media Marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
  { title: "SEO Services", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." },
];

const portfolioItems = [
  { title: "Project 1", category: "Branding", img: 0 },
  { title: "Project 2", category: "Logo", img: 1 },
  { title: "Project 3", category: "Website design", img: 2 },
  { title: "Project 4", category: "Software development", img: 0 },
  { title: "Project 5", category: "APP development", img: 1 },
  { title: "Project 6", category: "Branding", img: 2 },
  { title: "Project 7", category: "Logo", img: 0 },
  { title: "Project 8", category: "Website design", img: 1 },
  { title: "Project 9", category: "Software development", img: 2 },
];

const processSteps = [
  { num: "01", label: "Work Brief", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { num: "02", label: "Work Execution", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { num: "03", label: "Get Feedback", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { num: "04", label: "Revisions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { num: "05", label: "Final Submission", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const faqs = [
  { q: "What services does PixelPerfektSolutions offer?", a: "" },
  { q: "How can SEO services help my business?", a: "" },
  { q: "What types of websites do you develop?", a: "" },
  { q: "How much do your services cost?", a: "" },
  { q: "How long does it take to develop a website or app?", a: "The timeline varies based on the complexity of the project. Website development typically takes a few weeks, while app development can take 1-3 months depending on features and platforms." },
];

const testimonials = [
  { name: "Sajjad Afzal", quote: "Really good experience and great customer service.", rating: 6 },
  { name: "Nicolae Mihai Talpeanu", quote: "Great service, very experienced and professional. I give good feedback and recommended this service, for those who are in need, with 100% confidence.", rating: 6 },
  { name: "Gurjeevan Kailey", quote: "I would 100% recommend Pixel Perfekt Solutions to anyone. Their professionalism is unmatched!!", rating: 6 },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="26" height="26" viewBox="0 0 26 26" fill="#F7FF00">
          <polygon points="13,2 16,10 24,10 18,15 20,23 13,18 6,23 8,15 2,10 10,10" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(4);

  return (
    <>
      <Hero />

      {/* ===== SERVICE CARDS SECTION ===== */}
      <section className="bg-[#1A1919] py-20">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card, i) => (
              <div
                key={card.title}
                className={`rounded-[30px] border bg-black p-8 ${
                  i === 0 ? "border-[#565656] border-4" : "border-[#565656] border-2"
                }`}
              >
                <div className="mb-6 flex items-center justify-center size-[84px]">
                  <Image
                    src={serviceCardIcons[i]}
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-medium tracking-[-0.06em] text-[#7C7C7C]">
                  {card.title}
                </h3>
                <p className="text-base leading-[19px] text-[#7C7C7C]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative min-h-[1023px] bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 15.png')" }}>
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:px-[229px] lg:py-[120px]">
          <div className="w-full max-w-[650px]">
            <Image
              src="/images/blue-ornament 1.png"
              alt=""
              width={650}
              height={595}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="w-full max-w-[680px]">
            <h2 className="text-5xl font-bold tracking-[-0.03em] text-black">
              WE BRING YOUR IDEAS TO LIFE
            </h2>
            <h3 className="mb-4 mt-8 text-[32px] font-bold tracking-[-0.03em] text-black">
              About us
            </h3>
            <div className="mb-6 h-[11px] w-[172px] bg-[#5D5C5C]" />
            <p className="mb-10 text-base leading-relaxed text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              efficitur neque. Phasellus porttitor pharetra libero nec sagittis.
              Nulla neque velit, commodo vel tempor tristique, pretium nec massa.
              Vivamus eu enim ut tortor maximus ullamcorper id nec eros. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              efficitur neque. Phasellus porttitor pharetra libero nec sagittis.
              Nulla neque velit, commodo vel tempor tristique, pretium nec massa.
              Vivamus eu enim ut tortor maximus ullamcorper id nec eros.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-[30px] bg-black px-8 py-3 font-[Poppins] text-sm font-medium uppercase text-white transition-colors hover:bg-zinc-800"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE OFFER SECTION ===== */}
      <section className="relative bg-[#1A1919] py-20 lg:py-[160px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/blue-ornament 1.png"
            alt=""
            fill
            className="object-cover rotate-90 scale-[2] opacity-5"
          />
        </div>
        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <h2 className="text-5xl font-bold tracking-[-0.03em] text-white">
            What we offer
          </h2>
          <div className="mb-10 mt-4 h-[11px] w-[172px] bg-white" />
          <p className="mb-16 max-w-[513px] text-base leading-relaxed text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            efficitur neque. Phasellus porttitor pharetra libero nec sagittis.
            Nulla neque velit, commodo vel tempor tristique, pretium nec massa.
            Vivamus eu enim ut tortor maximus ullamcorper id nec eros.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeOffer.map((item, i) => (
              <div
                key={item.title}
                className="border border-[#5D5C5C] bg-black p-8"
              >
                <div className="mb-6 flex items-center justify-center size-[80px]">
                  <Image
                    src={whatWeOfferIcons[i]}
                    alt=""
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-medium tracking-[-0.06em] text-white">
                  {item.title}
                </h3>
                <p className="text-base leading-[19px] text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/services"
              className="inline-block rounded-[30px] bg-white px-8 py-3 font-[Poppins] text-sm font-medium uppercase text-black transition-colors hover:bg-gray-200"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO / WORK SECTION ===== */}
      <section className="relative bg-cover bg-center py-20 lg:py-[160px]" style={{ backgroundImage: "url('/images/Rectangle 5.png')" }}>
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <h2 className="text-5xl font-bold tracking-[-0.03em] text-white">
            You should believe we made it well.
          </h2>

          <div className="mb-12 mt-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex size-[34px] items-center justify-center rounded-full border border-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3V15M3 9H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="rounded-[30px] bg-[#2CB6C0] px-4 py-1.5 text-sm font-bold tracking-[-0.03em] text-black">
                Branding
              </span>
            </div>
            {["Logo", "Website design", "Software development", "APP development"].map((cat) => (
              <span key={cat} className="px-4 py-1.5 text-sm font-bold tracking-[-0.03em] text-white">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div key={item.title} className="relative aspect-[446/595]">
                <Image
                  src={portfolioImages[item.img]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS / WORKFLOW SECTION ===== */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-[100px]">
        <div className="absolute left-0 top-0 h-full w-[1164px] -translate-x-1/3 opacity-10">
          <Image src="/images/blue-ornament 1.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute right-0 top-0 h-full w-[1164px] translate-x-1/3 rotate-180 opacity-10">
          <Image src="/images/blue-ornament 1.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <h2 className="mx-auto mb-16 max-w-[593px] text-center text-5xl font-bold tracking-[-0.03em] text-black">
            Managing our projects and establishing deadlines
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {processSteps.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex size-[102px] items-center justify-center">
                    <Image
                      src={processIcons[i]}
                      alt=""
                      width={102}
                      height={102}
                      className="object-contain"
                    />
                  </div>
                  <h3 className={`text-[32px] font-bold tracking-[-0.03em] ${i < 3 ? "text-black" : "text-[#E5E5E5]"}`}>
                    {step.label}
                  </h3>
                  <p className="mt-2 max-w-[279px] text-xs leading-[17px] text-black">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 hidden items-center justify-between md:flex">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-[2px] flex-1 border-t-2 border-black last:border-[#E5E5E5]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="relative bg-[#1A1919] py-20 lg:py-[120px]">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Image src="/images/Rectangle 48.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="w-full max-w-[500px]">
              <Image
                src="/images/40-abstract-3d-shapes-WJL94QZc 1.png"
                alt=""
                width={600}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="w-full max-w-[740px]">
              <h2 className="mb-10 text-5xl font-bold tracking-[-0.03em] text-white">
                Frequently asked questions
              </h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className={`${openFaq === i && faq.a ? "border border-[#7C7C7C] bg-[#1A1919]" : "bg-[#3F3D3D]"}`}>
                    <button
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-2xl font-bold tracking-[-0.03em] text-[#E5E5E5]">
                        {faq.q}
                      </span>
                      <svg className={`size-5 text-[#E5E5E5] transition-transform ${openFaq === i ? "rotate-45" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </button>
                    {openFaq === i && faq.a && (
                      <div className="border-t-2 border-[#3F3D3D] px-6 pb-4 pt-3">
                        <p className="text-sm leading-4 tracking-[-0.03em] text-[#E5E5E5]">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="bg-[#1A1919] py-20">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <div className="mb-10 flex items-center gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <h2 className="font-[Jersey_10] text-6xl uppercase tracking-[-0.03em] text-white">
                  Client Testimonial
                </h2>
                <div className="flex flex-col gap-1">
                  <div className="h-0 w-[58px] border-t-[3px] border-[#2CB6C0]" />
                  <div className="h-0 w-[58px] border-t-[3px] border-[#2CB6C0]" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-[30px] border-2 border-[#5D5C5C] bg-[rgba(70,70,70,0.2)] p-8 shadow-[0px_18px_21px_rgba(0,0,0,0.25)]"
              >
                <p className="mb-8 text-[28px] leading-[34px] tracking-[-0.03em] text-[#E5E5E5]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-[82px] rounded-full bg-[#5D5C5C]" />
                  <div>
                    <p className="text-xl font-bold tracking-[-0.03em] text-[#E5E5E5]">
                      {t.name}
                    </p>
                    <StarRating count={t.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-0 w-[69px] border-t-[3px] border-[#2CB6C0] rotate-180" />
            <div className="h-0 w-[69px] border-t-[3px] border-white" />
          </div>
        </div>
      </section>

      {/* ===== CONTACT / CTA SECTION ===== */}
      <section className="relative bg-cover bg-center py-20 lg:py-[120px]" style={{ backgroundImage: "url('/images/227_1-1-copyright 1.png')" }}>
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
          <div className="rounded-[30px] border-2 border-[#5D5C5C] bg-[rgba(70,70,70,0.2)] p-10 shadow-[0px_18px_21px_rgba(0,0,0,0.25)] backdrop-blur-sm lg:p-16">
            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Left - Info */}
              <div className="w-full lg:w-[420px]">
                <h2 className="text-5xl font-bold leading-[58px] tracking-[-0.03em] text-white">
                  Have Questions?
                  <br />
                  Get in touch!
                </h2>
                <p className="mb-8 mt-4 text-base leading-relaxed text-white">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Image src="/images/location.svg" alt="" width={32} height={32} className="mt-1 shrink-0" />
                    <p className="text-xl leading-6 text-white">
                      941 Stratford Road, Hall Green, Birmingham, England, B28 8BH
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/images/phone.svg" alt="" width={33} height={33} className="mt-1 shrink-0" />
                    <p className="text-xl leading-6 text-white">
                      +44 20 3239 8869
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/images/email.svg" alt="" width={36} height={24} className="mt-1 shrink-0" />
                    <p className="text-xl leading-6 text-white">
                      support@pixelperfektsolutions.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="flex-1">
                <h3 className="mb-6 text-5xl font-bold tracking-[-0.03em] text-white">
                  Get Started
                </h3>
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm text-white/30">Your Name</p>
                      <div className="h-px bg-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/30">Enter Your Email</p>
                      <div className="h-px bg-white" />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm text-white/30">Your Phone Number</p>
                      <div className="h-px bg-white" />
                    </div>
                    <div className="relative">
                      <p className="mb-1 text-sm text-white/30">Select Service</p>
                      <div className="h-px bg-white" />
                      <svg className="pointer-events-none absolute right-0 top-1/2" width="18" height="10" viewBox="0 0 18 10" fill="none">
                        <path d="M1 1L9 9L17 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-white/30">Type Your Message</p>
                    <div className="h-px bg-white" />
                  </div>
                  <button
                    type="submit"
                    className="rounded-[30px] bg-white px-10 py-3 font-[Poppins] text-sm font-medium uppercase text-black transition-colors hover:bg-gray-200"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
