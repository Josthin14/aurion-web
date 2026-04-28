import React, { useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import Tilt from "react-parallax-tilt";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const INTRO_DURATION_FALLBACK = 10000;
const horizonLogoSrc = "/images/horizon-infinity-logo.png";
const horizonHeroBg = "/images/horizon-hero-bg.png";
const horizonHeroVideo = "/videos/horizon-hero.mp4";

const conceptSlides = [
  {
    eyebrow: "Different Worlds",
    title: "Every story takes place in its own universe.",
    copy: "Each Horizon is built as a distinct world with its own rules, tone, characters and mythology.",
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.38)",
    icon: "world",
  },
  {
    eyebrow: "Independent Stories",
    title: "You can enter any project without prior context.",
    copy: "Every entry point is designed to stand on its own, allowing audiences to discover Horizon from different doors.",
    accent: "#60A5FA",
    glow: "rgba(96,165,250,0.38)",
    icon: "portal",
  },
  {
    eyebrow: "One Identity",
    title: "Everything belongs to Horizon.",
    copy: "No matter how different the world may seem, every project is part of the same connected franchise vision.",
    accent: "#F5B942",
    glow: "rgba(245,185,66,0.38)",
    icon: "infinity",
  },
];

const horizonLogos = [
  {
    id: "h1",
    name: "Luz en la Penumbra",
    short: "HORIZON I",
    subtitle: "The first fracture opens.",
    image: "/images/horizon-logo-penumbra.png",
    accent: "#F5B942",
    glow: "rgba(245,185,66,0.45)",
  },
  {
    id: "h2",
    name: "IRØS",
    short: "HORIZON II",
    subtitle: "Signal, idols and hidden power.",
    image: "/images/horizon-logo-iros.png",
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.45)",
  },
  {
    id: "h3",
    name: "XIBALBÁ",
    short: "HORIZON III",
    subtitle: "Ancient gods. Corrupted skies.",
    image: "/images/horizon-logo-xibalba.png",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.45)",
  },
  {
    id: "h4",
    name: "WILDVEIN",
    short: "HORIZON IV",
    subtitle: "The living archive remembers.",
    image: "/images/horizon-logo-wildvein.png",
    accent: "#22C55E",
    glow: "rgba(34,197,94,0.45)",
  },
];

const horizons = [
  {
    name: "Luz en la Penumbra",
    code: "Horizon I",
    image: "/images/horizon1.png",
    accent: "#D4AF37",
    glow: "rgba(212,175,55,0.35)",
    copy: "Faith, sacrifice and the first fracture of the system.",
  },
  {
    name: "IRØS",
    code: "Horizon II",
    image: "/images/horizon2.png",
    accent: "#7A3FFF",
    glow: "rgba(122,63,255,0.42)",
    copy: "Music becomes signal, identity and hidden power.",
  },
  {
    name: "XIBALBÁ",
    code: "Horizon III",
    image: "/images/horizon3.png",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.42)",
    copy: "Ancient gods fall as corruption reaches the sky.",
  },
  {
    name: "WILDVEIN",
    code: "Horizon IV",
    image: "/images/horizon4.png",
    accent: "#22C55E",
    glow: "rgba(34,197,94,0.38)",
    copy: "A living archive where forbidden memory still breathes.",
  },
];

const timeline = [
  {
    title: "The First Fracture",
    tag: "01",
    copy: "What begins as personal tragedy becomes the first visible wound in the mythological system of Horizon.",
  },
  {
    title: "The Signal Awakens",
    tag: "02",
    copy: "With IRØS, the universe expands beyond fantasy into music, identity and emotional warfare hidden in plain sight.",
  },
  {
    title: "The Ancient Corruption",
    tag: "03",
    copy: "XIBALBÁ reveals that the anomaly is older than any one world and far more dangerous than it first appeared.",
  },
  {
    title: "The Living Archive",
    tag: "04",
    copy: "WILDVEIN preserves fragments of a forbidden past, pulling the entire mythology toward convergence.",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function OrbitalIcon({ type, accent = "#8B5CF6" }) {
  if (type === "world") {
    return (
      <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
        <circle cx="60" cy="60" r="34" stroke={accent} strokeWidth="2.5" opacity="0.95" />
        <ellipse cx="60" cy="60" rx="52" ry="16" stroke="white" strokeWidth="1.5" opacity="0.3" />
        <ellipse cx="60" cy="60" rx="18" ry="52" stroke="white" strokeWidth="1.5" opacity="0.18" />
        <circle cx="89" cy="43" r="4" fill={accent} />
      </svg>
    );
  }

  if (type === "portal") {
    return (
      <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
        <circle cx="60" cy="60" r="36" stroke={accent} strokeWidth="2.5" />
        <circle cx="60" cy="60" r="24" stroke="white" strokeWidth="1.6" opacity="0.35" />
        <path d="M39 60h42" stroke="white" strokeWidth="1.6" opacity="0.35" />
        <path d="M60 39v42" stroke="white" strokeWidth="1.6" opacity="0.2" />
        <circle cx="60" cy="60" r="5" fill={accent} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <path
        d="M24 60C34 42 46 42 60 60C74 78 86 78 96 60C86 42 74 42 60 60C46 78 34 78 24 60Z"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="6" fill="white" opacity="0.9" />
    </svg>
  );
}

function PremiumButton({ href, children, variant = "primary" }) {
  const primary = variant === "primary";

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-xs font-black uppercase tracking-[0.16em] transition duration-300 ${
        primary
          ? "bg-white text-black hover:bg-[#DADDE3]"
          : "border border-white/20 text-white hover:bg-white/10"
      }`}
    >
      <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0)_70%,transparent_100%)] transition duration-700 group-hover:translate-x-[130%]" />
    </a>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={horizonHeroBg}
        alt="Horizon multiverse background"
        className="absolute inset-0 h-full w-full object-cover scale-[1.06]"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-screen"
        src={horizonHeroVideo}
        poster={horizonHeroBg}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.80)_0%,rgba(2,6,23,0.54)_28%,rgba(2,6,23,0.18)_58%,rgba(2,6,23,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(120,84,255,0.16),transparent_18%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(99,102,241,0.22),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(59,130,246,0.12),transparent_22%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(124,58,237,0.14),transparent_24%)]" />

      <motion.div
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[26%] h-[28rem] w-[28rem] rounded-full bg-[#7A3FFF]/20 blur-3xl"
      />

      <motion.div
        animate={{ opacity: [0.14, 0.26, 0.14], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[48%] h-[24rem] w-[24rem] rounded-full bg-[#2563EB]/18 blur-3xl"
      />

      <motion.div
        animate={{ opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[48%] top-[51%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/18 blur-3xl"
      />

      <div className="absolute left-[50%] top-[50%] h-[2px] w-[44rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7AA2FF]/70 to-transparent opacity-60" />
      <div className="absolute left-[50%] top-[50%] h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-25" />
    </div>
  );
}

function SectionAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />
      <motion.div
        animate={{ x: [0, 70, -40, 0], y: [0, -25, 35, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[8%] h-[36rem] w-[36rem] rounded-full bg-[#5D2CFF]/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -90, 45, 0], y: [0, 45, -25, 0], scale: [1, 0.96, 1.08, 1] }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-12%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#0E2A7B]/18 blur-3xl"
      />
    </div>
  );
}

function ConceptScroller() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [currentStep, setCurrentStep] = useState(0);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.3333) {
        setCurrentStep(0);
      } else if (latest < 0.6666) {
        setCurrentStep(1);
      } else {
        setCurrentStep(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeSlide = conceptSlides[currentStep];
  const progressHeights = useMemo(() => ["33%", "66%", "100%"], []);

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="relative bg-[#040404]"
      style={{ height: `${conceptSlides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#040404]">
        <SectionAtmosphere />

        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-6">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-3xl">
              <motion.p
                key={`eyebrow-${currentStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]"
              >
                Concept
              </motion.p>

              <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.07em] md:text-7xl">
                A franchise built through distinct worlds and one shared identity.
              </h2>

              <div className="mt-12 flex gap-6">
                <div className="relative hidden w-1 md:block">
                  <div className="absolute inset-0 rounded-full bg-white/10" />
                  <motion.div
                    className="absolute left-0 top-0 w-full rounded-full"
                    animate={{
                      height: progressHeights[currentStep],
                      backgroundColor: activeSlide.accent,
                    }}
                    transition={{ duration: 0.45 }}
                    style={{
                      boxShadow: `0 0 18px ${activeSlide.glow}`,
                    }}
                  />
                </div>

                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.eyebrow}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.42, ease: "easeOut" }}
                      className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:p-9"
                      style={{ boxShadow: `0 0 42px ${activeSlide.glow}` }}
                    >
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.3em]"
                        style={{ color: activeSlide.accent }}
                      >
                        {activeSlide.eyebrow}
                      </p>

                      <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl">
                        {activeSlide.title}
                      </h3>

                      <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
                        {activeSlide.copy}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-8 flex items-center gap-3">
                    {conceptSlides.map((slide, index) => (
                      <button
                        key={slide.eyebrow}
                        type="button"
                        onClick={() => setCurrentStep(index)}
                        className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur-md transition hover:border-white/20"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full transition"
                          style={{
                            backgroundColor:
                              currentStep === index
                                ? slide.accent
                                : "rgba(255,255,255,0.2)",
                            boxShadow:
                              currentStep === index
                                ? `0 0 12px ${slide.glow}`
                                : "none",
                          }}
                        />
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">
                          {index + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden h-[42rem] lg:block">
              <div className="absolute inset-0 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,10,18,0.72),rgba(4,6,14,0.92))] backdrop-blur-2xl">
                <div className="pointer-events-none absolute left-[10%] top-[8%] h-[14rem] w-[14rem] rounded-full bg-[#8B5CF6]/16 blur-3xl" />
                <div className="pointer-events-none absolute right-[8%] top-[18%] h-[12rem] w-[12rem] rounded-full bg-[#60A5FA]/12 blur-3xl" />
                <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[13rem] w-[13rem] rounded-full bg-[#F5B942]/12 blur-3xl" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg"
                  style={{
                    background: `radial-gradient(circle,rgba(255,255,255,0.96)_0%,${activeSlide.accent}55_24%,rgba(96,165,250,0.18)_48%,transparent_72%)`,
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`visual-${activeSlide.eyebrow}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.42 }}
                    className="absolute inset-0 flex items-center justify-center p-12"
                  >
                    <div
                      className="w-full max-w-[30rem] rounded-[1.8rem] border border-white/10 bg-black/28 p-8 backdrop-blur-xl"
                      style={{ boxShadow: `0 0 55px ${activeSlide.glow}` }}
                    >
                      <div className="flex items-center gap-5">
                        <div
                          className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10"
                          style={{
                            background: `radial-gradient(circle, ${activeSlide.accent}33 0%, rgba(255,255,255,0.03) 72%)`,
                          }}
                        >
                          <OrbitalIcon type={activeSlide.icon} accent={activeSlide.accent} />
                        </div>

                        <div>
                          <p
                            className="text-[10px] font-black uppercase tracking-[0.28em]"
                            style={{ color: activeSlide.accent }}
                          >
                            {activeSlide.eyebrow}
                          </p>

                          <h3 className="mt-2 text-3xl font-black leading-[0.95] tracking-[-0.05em]">
                            {activeSlide.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-6 text-base leading-8 text-white/62">
                        {activeSlide.copy}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/65 backdrop-blur-md">
                  Scroll to reveal the concept
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroConstellation() {
  const [activeNode, setActiveNode] = useState("h2");

  const activeItem =
    horizonLogos.find((item) => item.id === activeNode) || horizonLogos[1];

  const nodes = [
    { ...horizonLogos[0], left: "31%", top: "29%", size: 132, delay: 0 },
    { ...horizonLogos[1], left: "76%", top: "28%", size: 144, delay: 0.15 },
    { ...horizonLogos[2], left: "74%", top: "72%", size: 136, delay: 0.3 },
    { ...horizonLogos[3], left: "34%", top: "74%", size: 136, delay: 0.45 },
  ];

  const stars = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    left: `${5 + ((i * 17) % 90)}%`,
    top: `${5 + ((i * 23) % 88)}%`,
    size: 1 + (i % 3),
    duration: 3 + (i % 4),
    delay: (i % 6) * 0.35,
  }));

  const particleKeyframes = [
    { left: "18%", top: "50%" },
    { left: "28%", top: "34%" },
    { left: "39%", top: "34%" },
    { left: "50%", top: "50%" },
    { left: "61%", top: "66%" },
    { left: "72%", top: "66%" },
    { left: "82%", top: "50%" },
    { left: "72%", top: "34%" },
    { left: "61%", top: "34%" },
    { left: "50%", top: "50%" },
    { left: "39%", top: "66%" },
    { left: "28%", top: "66%" },
    { left: "18%", top: "50%" },
  ];

  const particles = [
    {
      id: "p1",
      size: 10,
      color: "#ffffff",
      glow: "0 0 18px rgba(255,255,255,0.95)",
      duration: 6,
      delay: 0,
    },
    {
      id: "p2",
      size: 12,
      color: activeItem.accent,
      glow: `0 0 22px ${activeItem.glow}`,
      duration: 8.5,
      delay: -2,
    },
    {
      id: "p3",
      size: 9,
      color: "#60a5fa",
      glow: "0 0 20px rgba(96,165,250,0.95)",
      duration: 7.2,
      delay: -4,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative hidden min-h-[45rem] lg:block"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2.2rem]">
        <div className="pointer-events-none absolute left-[-10%] top-[6%] h-[22rem] w-[22rem] rounded-full bg-[#6D3BFF]/18 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8%] top-[12%] h-[18rem] w-[18rem] rounded-full bg-[#3B82F6]/14 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[14%] h-[16rem] w-[16rem] rounded-full bg-[#8B5CF6]/16 blur-3xl" />

        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: "0 0 10px rgba(255,255,255,0.9)",
            }}
            animate={{
              opacity: [0.18, 0.95, 0.18],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          animate={{
            opacity: [0.16, 0.5, 0.16],
            scaleX: [0.96, 1.04, 0.96],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[2px] w-[42rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#9BB9FF] to-transparent"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.45, 0.88, 0.45],
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle,
              rgba(255,255,255,0.92) 0%,
              ${activeItem.accent}66 22%,
              ${activeItem.accent}33 42%,
              transparent 72%)`,
            boxShadow: `0 0 60px ${activeItem.glow}`,
          }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ boxShadow: `0 0 20px ${activeItem.glow}` }}
        />

        <motion.div
          animate={{
            rotate: -360,
            borderColor: [
              `${activeItem.accent}33`,
              `${activeItem.accent}88`,
              `${activeItem.accent}33`,
            ],
          }}
          transition={{
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        />

        <motion.div
          animate={{ scale: [0.95, 1.45], opacity: [0.28, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: `${activeItem.accent}88` }}
        />

        <motion.div
          animate={{ scale: [1, 1.75], opacity: [0.2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: `${activeItem.accent}55` }}
        />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="infinityStrokeClean" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="30%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <filter id="infinityGlowClean">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M 180 350 C 255 235, 355 235, 500 350 C 645 465, 745 465, 820 350 C 745 235, 645 235, 500 350 C 355 465, 255 465, 180 350"
            fill="none"
            stroke="url(#infinityStrokeClean)"
            strokeWidth="14"
            strokeLinecap="round"
            filter="url(#infinityGlowClean)"
            opacity="0.22"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />

          <motion.path
            d="M 180 350 C 255 235, 355 235, 500 350 C 645 465, 745 465, 820 350 C 745 235, 645 235, 500 350 C 355 465, 255 465, 180 350"
            fill="none"
            stroke={activeItem.accent}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="7 10"
            opacity="0.38"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, opacity: [0.26, 0.6, 0.26] }}
            transition={{
              pathLength: { duration: 1.8, ease: "easeInOut" },
              opacity: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </svg>

        {particles.map((particle) => (
          <React.Fragment key={particle.id}>
            <motion.div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: particle.color,
                boxShadow: particle.glow,
              }}
              animate={{
                left: particleKeyframes.map((p) => p.left),
                top: particleKeyframes.map((p) => p.top),
                opacity: [0, 1, 1, 1, 1, 1, 0.8, 1, 1, 1, 1, 1, 0],
                scale: [0.8, 1.1, 1, 1, 1, 1, 0.95, 1, 1, 1, 1, 1, 0.8],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear",
                times: Array.from(
                  { length: particleKeyframes.length },
                  (_, i) => i / (particleKeyframes.length - 1)
                ),
              }}
            />
            <motion.div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
              style={{
                width: particle.size * 2.2,
                height: particle.size * 2.2,
                background: particle.color,
                opacity: 0.22,
              }}
              animate={{
                left: particleKeyframes.map((p) => p.left),
                top: particleKeyframes.map((p) => p.top),
                opacity: [0, 0.18, 0.22, 0.22, 0.2, 0.18, 0.15, 0.2, 0.22, 0.22, 0.18, 0.15, 0],
                scale: [0.9, 1.3, 1.15, 1.1, 1.1, 1.05, 1, 1.08, 1.15, 1.1, 1.05, 1, 0.9],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear",
                times: Array.from(
                  { length: particleKeyframes.length },
                  (_, i) => i / (particleKeyframes.length - 1)
                ),
              }}
            />
          </React.Fragment>
        ))}
      </div>

      {nodes.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.84 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, index % 2 === 0 ? -10 : 10, 0],
          }}
          transition={{
            opacity: { duration: 0.55, delay: item.delay },
            scale: { duration: 0.55, delay: item.delay },
            y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: item.left, top: item.top }}
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.08, y: -4 }}
            onMouseEnter={() => setActiveNode(item.id)}
            onFocus={() => setActiveNode(item.id)}
            className="group relative"
            style={{ width: `${item.size}px`, height: `${item.size}px` }}
          >
            <motion.div
              animate={{
                opacity:
                  activeNode === item.id ? [0.28, 0.58, 0.28] : [0.12, 0.26, 0.12],
                scale:
                  activeNode === item.id ? [1, 1.08, 1] : [1, 1.03, 1],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-12px] rounded-full blur-2xl"
              style={{
                background: `radial-gradient(circle, ${item.glow} 0%, transparent 72%)`,
              }}
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18 + index * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10"
            />

            <div
              className="absolute inset-0 rounded-full border border-white/10"
              style={{
                background:
                  "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.20) 0%, rgba(18,24,42,0.96) 24%, rgba(6,10,20,0.98) 60%, rgba(2,5,14,1) 100%)",
                boxShadow:
                  activeNode === item.id
                    ? `0 0 28px ${item.glow}, 0 16px 40px rgba(0,0,0,0.45)`
                    : "0 14px 34px rgba(0,0,0,0.38)",
              }}
            />

            <div className="absolute inset-[16%] rounded-full border border-white/6 bg-[radial-gradient(circle,rgba(8,12,24,0.68)_0%,rgba(3,7,18,0.92)_70%,rgba(0,0,0,0.98)_100%)]" />

            <div
              className="absolute inset-[18%] rounded-full"
              style={{
                background: `radial-gradient(circle, ${item.glow}22 0%, transparent 68%)`,
              }}
            />

            <div className="absolute left-1/2 top-[10px] z-20 -translate-x-1/2">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 backdrop-blur-md">
                <span
                  className="h-4 w-[3px] rounded-full"
                  style={{ backgroundColor: item.accent }}
                />
                <span
                  className="text-[10px] font-black tracking-[0.22em]"
                  style={{ color: item.accent }}
                >
                  {item.short}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-[52px] w-auto object-contain transition duration-500 group-hover:scale-110"
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(255,255,255,0.15)) drop-shadow(0 10px 18px rgba(0,0,0,0.95))",
                }}
              />
            </div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div
                className="absolute left-1/2 top-[4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                style={{
                  backgroundColor: item.accent,
                  boxShadow: `0 0 12px ${item.glow}`,
                }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.22 }}
          className="absolute bottom-8 right-8 z-20 w-[20rem] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,9,18,0.88),rgba(4,7,16,0.76))] p-5 backdrop-blur-xl"
          style={{ boxShadow: `0 0 22px ${activeItem.glow}` }}
        >
          <p
            className="text-[10px] font-black uppercase tracking-[0.28em]"
            style={{ color: activeItem.accent }}
          >
            {activeItem.short}
          </p>

          <h4 className="mt-2 text-2xl font-black text-white">{activeItem.name}</h4>

          <p className="mt-2 text-sm leading-relaxed text-white/65">
            {activeItem.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function HorizonPoster({ item, index }) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1400}
      transitionSpeed={1400}
      scale={1.01}
      glareEnable={false}
      className="rounded-[1.9rem]"
    >
      <motion.article
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.08, duration: 0.7 }}
        className="group relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-black shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-white/35"
        onMouseEnter={(event) => {
          event.currentTarget.style.boxShadow = `0 0 90px ${item.glow}`;
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.boxShadow = "0 24px 55px rgba(0,0,0,0.45)";
        }}
      >
        <div className="relative aspect-[0.78] bg-black">
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_30%,rgba(0,0,0,0.16)_55%,rgba(0,0,0,0.52)_100%)]" />

          <div
            className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 50% 35%, ${item.glow}, transparent 58%)`,
            }}
          />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-md">
              <span
                className="h-5 w-[3px] rounded-full"
                style={{ backgroundColor: item.accent }}
              />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/78">
                {item.code}
              </span>
            </div>

            <div
              className="h-11 w-11 rounded-full border border-white/10 backdrop-blur-md"
              style={{
                background: `radial-gradient(circle, ${item.accent}44 0%, rgba(0,0,0,0.35) 72%)`,
                boxShadow: `0 0 24px ${item.glow}`,
              }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,10,18,0.22),rgba(5,7,14,0.62))] p-4 backdrop-blur-md">
              <p
                className="text-[9px] font-black uppercase tracking-[0.26em]"
                style={{ color: item.accent }}
              >
                Connected World
              </p>

              <h3 className="mt-2 text-[1.85rem] font-black leading-[0.92] tracking-[-0.05em]">
                {item.name}
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-white/65">
                {item.copy}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/35">
                  Myth Entry
                </span>

                <a
                  href="#final"
                  className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-white transition"
                  style={{
                    backgroundColor: `${item.accent}55`,
                    border: `1px solid ${item.accent}`,
                    boxShadow: `0 0 20px ${item.glow}`,
                  }}
                >
                  <span className="relative z-10 inline-flex items-center gap-3">
                    Enter Horizon
                    <ArrowIcon className="h-4 w-4 transition group-hover/btn:translate-x-1" />
                  </span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0)_70%,transparent_100%)] transition duration-700 group-hover/btn:translate-x-[130%]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}

function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.07, duration: 0.65 }}
      className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl"
    >
      <span className="text-5xl font-black tracking-[-0.08em] text-white/10">
        {item.tag}
      </span>
      <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
      <p className="mt-4 leading-7 text-white/58">{item.copy}</p>
    </motion.div>
  );
}

export default function Horizon() {
  const [showIntro, setShowIntro] = React.useState(true);
  const videoRef = React.useRef(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.5]);

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.2,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  React.useEffect(() => {
    const fallback = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION_FALLBACK);

    return () => window.clearTimeout(fallback);
  }, []);

  const handleVideoEnded = () => {
    setShowIntro(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-[#7A3FFF] selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.section
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[999] bg-black"
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src="/videos/horizon-intro.mp4"
              poster="/images/horizon-intro-poster.jpg"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
          </motion.section>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="min-h-screen"
          >
            <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a
                  href="/"
                  className="text-xs font-black uppercase tracking-[0.26em] text-white/50 transition hover:text-white"
                >
                  ← AURION
                </a>

                <img
                  src={horizonLogoSrc}
                  alt="Horizon by AURION"
                  className="h-9 object-contain"
                />

                <a
                  href="#worlds"
                  className="rounded-full border border-white/20 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
                >
                  Enter
                </a>
              </div>
            </nav>

            <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
              <HeroBackground />

              <motion.div
                style={{ scale: heroScale, opacity: heroOpacity }}
                className="relative mx-auto grid w-full max-w-[96rem] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="max-w-3xl">
                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 border-l-2 border-[#7A3FFF] pl-4 text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]"
                  >
                    HORIZON
                  </motion.p>

                  <motion.img
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    src={horizonLogoSrc}
                    alt="Horizon by AURION"
                    className="w-full max-w-[34rem] drop-shadow-[0_0_55px_rgba(255,255,255,0.18)]"
                  />

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.22 }}
                    className="mt-12 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.075em] md:text-8xl"
                  >
                    A multiverse of stories. One franchise.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.34 }}
                    className="mt-8 max-w-2xl text-lg leading-9 text-white/60 md:text-xl"
                  >
                    Explore distinct worlds, each with its own story, all connected
                    under a shared creative vision.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.44 }}
                    className="mt-12 flex flex-wrap gap-4"
                  >
                    <PremiumButton href="#worlds" variant="primary">
                      Explore Universes
                      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </PremiumButton>

                    <PremiumButton href="#timeline" variant="secondary">
                      View Projects
                    </PremiumButton>
                  </motion.div>
                </div>

                <HeroConstellation />
              </motion.div>
            </section>

            <section id="system" className="relative border-y border-white/10 py-32 md:py-44">
              <SectionAtmosphere />
              <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75 }}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]">
                      What is Horizon
                    </p>

                    <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                      Horizon is the entertainment franchise of AURION Global Holdings, Inc.
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75, delay: 0.12 }}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl md:p-10"
                  >
                    <p className="text-xl leading-9 text-white/65">
                      A narrative ecosystem where every story exists in a different
                      world, developed across film, series, videogames and music.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {[
                        "Each project stands on its own.",
                        "Together, they form Horizon.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center font-black tracking-[0.02em] text-white/72"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            <ConceptScroller />

            <section id="worlds" className="relative bg-[#050505] py-32 md:py-44">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(122,63,255,0.10),transparent_32%)]" />
              <div className="pointer-events-none absolute left-[-8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[#6D3BFF]/10 blur-3xl" />
              <div className="pointer-events-none absolute right-[-8%] bottom-[10%] h-[24rem] w-[24rem] rounded-full bg-[#2563EB]/10 blur-3xl" />

              <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]">
                      Current Worlds
                    </p>
                    <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] md:text-7xl">
                      Four worlds. One expanding mythology.
                    </h2>
                  </div>

                  <p className="max-w-xl leading-8 text-white/55">
                    Every Horizon is designed as its own creative pillar —
                    fantasy, music, ancient collapse and living memory — but
                    none of them exist alone. Together, they shape the same
                    evolving myth.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {horizons.map((item, index) => (
                    <HorizonPoster key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="timeline" className="relative border-y border-white/10 py-32 md:py-44">
              <SectionAtmosphere />
              <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.42em] text-white/40">
                      Narrative Timeline
                    </p>
                    <h2 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
                      The order of awakening.
                    </h2>
                  </div>
                  <p className="max-w-md leading-8 text-white/55">
                    Each Horizon unlocks a larger truth, pushing the mythology
                    toward a convergence no world can escape.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {timeline.map((item, index) => (
                    <TimelineCard key={item.title} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="vision" className="relative bg-[#040404] py-32 md:py-44">
              <SectionAtmosphere />
              <div className="relative mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,14,28,0.92),rgba(6,8,18,0.86))] p-8 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-12">
                  <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]">
                        AURION ∞ VISION
                      </p>

                      <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                        The cinematic format reserved for Horizon.
                      </h2>

                      <p className="mt-6 max-w-2xl text-lg leading-9 text-white/60">
                        AURION ∞ VISION is the premium cinematic standard built
                        for Horizon’s biggest experiences — immersive image,
                        expansive sound, pulse-driven seating and a theatrical
                        scale designed for myth, war and convergence.
                      </p>

                      <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {["∞ Canvas", "∞ Sonic Core", "Pulse Seats"].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center text-xs font-black uppercase tracking-[0.22em] text-white/72"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.26)_0%,rgba(59,130,246,0.16)_28%,transparent_70%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_32%,rgba(255,255,255,0.03)_70%,transparent_100%)]" />

                      <motion.div
                        animate={{
                          scale: [1, 1.06, 1],
                          opacity: [0.5, 0.9, 0.5],
                        }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(167,139,250,0.40)_22%,rgba(96,165,250,0.20)_45%,transparent_72%)] blur-lg"
                      />

                      <div className="absolute inset-x-10 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                      />

                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B5CF6]/35"
                      />

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
                        Premium Horizon Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="final" className="relative overflow-hidden bg-black py-32 md:py-48">
              <SectionAtmosphere />
              <div className="relative mx-auto max-w-6xl px-6 text-center">
                <img
                  src={horizonLogoSrc}
                  alt="Horizon by AURION"
                  className="mx-auto w-full max-w-[30rem] opacity-90 drop-shadow-[0_0_60px_rgba(255,255,255,0.18)]"
                />

                <h2 className="mt-12 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-8xl">
                  The final lore is not revealed. It is awakened.
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/58">
                  Battleworld, Kang, AURIONA and the true purpose of Horizon remain
                  classified within the core mythology. More worlds are coming.
                  More scars will open. The journey never ends.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <PremiumButton href="#vision" variant="secondary">
                    Discover ∞ Vision
                  </PremiumButton>

                  <PremiumButton href="#worlds" variant="primary">
                    Re-enter the Worlds
                  </PremiumButton>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}