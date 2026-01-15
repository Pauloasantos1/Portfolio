"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  // automatic rotation of roles
  const roles = ["Software Developer", "Graduate Student", "Coffee Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const role = roles[roleIndex];

  // cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-evenly w-full px-4 sm:px-6 lg:px-8
             pt-[calc(64px+env(safe-area-inset-top))]
             sm:pt-[calc(72px+env(safe-area-inset-top))]
             scroll-mt-28"
    >
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-x-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            key={role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 uppercase tracking-wide mb-4 text-lg sm:text-xl"
          >
            {role}
          </motion.p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi! I'm Paulo Santos!
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-[650px] mx-auto lg:mx-0">
            I build clean, scalable, and secure tools that make life easier.
            Currently exploring cybersecurity and backend systems while solving
            real-world problems through code and automation.
          </p>

          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Let's Talk
              </a>
              <a
                href="#experience"
                className="border border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                See My Work
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

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[40vw] max-w-[500px] aspect-square">
            <div className="absolute inset-0 rounded-full p-[6px] animate-spin-slow bg-[conic-gradient(from_0deg,_transparent_0deg,_transparent_40%,_rgba(34,197,94,0.5)_75%,_#22c55e_85%,_rgba(34,197,94,0.5)_90%,_transparent_100%)]" />
            <div className="absolute inset-[6px] rounded-full overflow-hidden">
              <img
                src="/headshot.jpg"
                alt="Paulo's Profile"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={inViewRef}
        className="mt-20 flex flex-wrap justify-center gap-24 text-center"
      >
        {[
          { n: 4, label: "Years of Experience" },
          { n: 2, label: "Degrees in CS" },
          { n: 10, label: "Technologies Used", suffix: "+" },
          { n: 500, label: "Cups of coffee coded through", suffix: "+" },
        ].map(({ n, label, suffix }) => (
          <div key={label}>
            <p className="text-6xl font-bold">
              {inView ? (
                <CountUp end={n} duration={2} suffix={suffix} />
              ) : (
                `0${suffix || ""}`
              )}
            </p>
            <p className="text-gray-400 text-lg">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
