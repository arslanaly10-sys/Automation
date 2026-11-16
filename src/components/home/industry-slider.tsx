"use client";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { industries } from "@/lib/content";
import { whenPinnable } from "@/lib/load-gsap";

/** Industries move sideways as the page scrolls down (desktop). On touch it is a native swipe row. */
export function IndustrySlider() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(
    () =>
      whenPinnable(({ gsap }) => {
      const el = track.current!;
      const distance = () => el.scrollWidth - window.innerWidth + 64;
      const tween = gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: () => `+=${distance()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
      });
      return () => {
        tween.scrollTrigger?.kill(true);
        tween.kill();
        gsap.set(el, { clearProps: "transform" });
      };
      }),
    [],
  );

  return (
    <div>
    <section ref={section} className="overflow-hidden bg-black section text-white lg:flex lg:h-screen lg:flex-col lg:justify-center lg:pt-16 lg:pb-0">
      <div className="wrap mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="display max-w-[18ch] display-lg">Built for businesses where every call counts.</h2>
        <p className="max-w-[40ch] text-white/65">The same building blocks, set up differently for each trade: its questions, its booking rules and its handoffs.</p>
      </div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:px-8 lg:w-max lg:snap-none lg:overflow-visible lg:pl-[max(32px,calc((100vw-1240px)/2))]"
      >
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group relative block w-[82vw] shrink-0 snap-start overflow-hidden rounded-card sm:w-[420px] lg:w-[clamp(280px,calc((100svh-300px)*0.8),460px)]"
          >
            <div className="photo-frame relative aspect-[4/5]">
              <Image src={ind.image} alt={ind.imageAlt} fill sizes="(min-width:1024px) 460px, 82vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="display text-3xl">{ind.name}</p>
              <p className="mt-2 text-sm text-white/70">{ind.examples}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                See workflows <ArrowUpRightIcon aria-hidden="true" size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </div>
  );
}
