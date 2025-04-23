"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-28 flex flex-col justify-evenly max-w-7xl mx-auto px-6 md:px-16 py-20"
    >
      {/* HERO CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* LEFT: Text (unchanged) */}
        <div className="text-center md:text-left">
          <p className="text-green-400 uppercase tracking-wide mb-4 text-lg sm:text-xl">
            Software Developer
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi! I'm Paulo Santos!
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed">
            I build clean, scalable, and secure tools that make life easier.
            Currently exploring cybersecurity and backend systems while solving
            real-world problems through code.
          </p>
          <div className="flex flex-col items-center md:items-start mt-8 space-y-4">
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="/cv.pdf"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="border border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Hire me
              </a>
            </div>
            <div className="flex gap-6 text-white text-3xl">
              <a
                href="https://www.linkedin.com/in/Pauloasantos1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Pauloasantos1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Image with spinning conic-gradient ring */}
        <div className="relative aspect-square w-64 sm:w-72 md:w-96 mx-auto overflow-visible">
          {/* Outer spinning ring */}
          <div
            className="
              absolute inset-0
              rounded-full
              p-[6px]
              animate-spin-slow
              bg-[conic-gradient(from_0deg,_transparent_0deg,_transparent_40%,_rgba(34,197,94,0.5)_75%,_#22c55e_85%,_rgba(34,197,94,0.5)_90%,_transparent_100%)]
            "
          />
          {/* Inner image container */}
          <div className="absolute inset-[6px] rounded-full overflow-hidden">
            <img
              src="/headshot.jpg"
              alt="Paulo's Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* STATS SECTION (unchanged) */}
      <div
        ref={ref}
        className="mt-16 flex flex-wrap justify-center gap-16 text-center"
      >
        <div>
          <p className="text-4xl font-bold">
            {inView ? <CountUp end={4} duration={2} /> : "0"}
          </p>
          <p className="text-gray-400 text-lg">Years of Experience</p>
        </div>
        <div>
          <p className="text-4xl font-bold">
            {inView ? <CountUp end={2} duration={2} /> : "0"}
          </p>
          <p className="text-gray-400 text-lg">Degrees in CS</p>
        </div>
        <div>
          <p className="text-4xl font-bold">
            {inView ? <CountUp end={10} duration={2} suffix="+" /> : "0+"}
          </p>
          <p className="text-gray-400 text-lg">Technologies Used</p>
        </div>
        <div>
          <p className="text-4xl font-bold">
            {inView ? <CountUp end={500} duration={3} suffix="+" /> : "0+"}
          </p>
          <p className="text-gray-400 text-lg">Cups of coffee coded through</p>
        </div>
      </div>
    </section>
  );
}