import React, { useState } from "react";
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

const horizonLogos = [
  {
    id: "h1",
    name: "Luz en la Penumbra",
    short: "HORIZON I",
    subtitle: "The first fracture opens.",
    image: "/images/horizon-logo-penumbra.png",
    accent: "#F5B942",
    glow: "rgba(245,185,66,0.45)",
    x: "22%",
    y: "24%",
  },
  {
    id: "h2",
    name: "IRØS",
    short: "HORIZON II",
    subtitle: "Signal, idols and hidden power.",
    image: "/images/horizon-logo-iros.png",
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.45)",
    x: "78%",
    y: "28%",
  },
  {
    id: "h3",
    name: "XIBALBÁ",
    short: "HORIZON III",
    subtitle: "Ancient gods. Corrupted skies.",
    image: "/images/horizon-logo-xibalba.png",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.45)",
    x: "74%",
    y: "74%",
  },
  {
    id: "h4",
    name: "WILDVEIN",
    short: "HORIZON IV",
    subtitle: "The living archive remembers.",
    image: "/images/horizon-logo-wildvein.png",
    accent: "#22C55E",
    glow: "rgba(34,197,94,0.45)",
    x: "26%",
    y: "74%",
  },
];

const horizons = [
  {
    name: "Luz en la Penumbra",
    code: "Horizon I",
    image: "/images/horizon1.png",
    accent: "#D4AF37",
    glow: "rgba(212,175,55,0.35)",
    copy: "La primera herida del sistema: fe, sacrificio, oscuridad y una luz que se niega a morir.",
  },
  {
    name: "IRØS",
    code: "Horizon II",
    image: "/images/horizon2.png",
    accent: "#7A3FFF",
    glow: "rgba(122,63,255,0.42)",
    copy: "La música como señal. Tres idols, una identidad global y fragmentos de poder ocultos bajo el escenario.",
  },
  {
    name: "XIBALBÁ",
    code: "Horizon III",
    image: "/images/horizon3.png",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.42)",
    copy: "Un mundo ancestral donde los dioses caen, el sol se corrompe y el infinito toca la tierra.",
  },
  {
    name: "WILDVEIN",
    code: "Horizon IV",
    image: "/images/horizon4.png",
    accent: "#22C55E",
    glow: "rgba(34,197,94,0.38)",
    copy: "Un bosque vivo, criaturas guerreras y archivos prohibidos de un pasado que nadie debe recordar.",
  },
];

const timeline = [
  {
    title: "The First Light",
    tag: "01",
    copy: "Horizon inicia con una tragedia íntima: Kael, Eira y el nacimiento de una grieta que conecta mundos.",
  },
  {
    title: "The Signal",
    tag: "02",
    copy: "IRØS convierte el sistema en sonido: pop, guerra emocional y poder escondido tras una marca musical.",
  },
  {
    title: "The Ancient Fall",
    tag: "03",
    copy: "XIBALBÁ revela que la corrupción no pertenece a un solo mundo. Es cósmica. Es antigua. Es Horizon.",
  },
  {
    title: "The Living Archive",
    tag: "04",
    copy: "WILDVEIN guarda rastros del pasado perdido y abre la puerta a una verdad mucho más grande.",
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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(2,6,23,0.52)_28%,rgba(2,6,23,0.18)_58%,rgba(2,6,23,0.22)_100%)]" />
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

function HeroConstellation() {
  const [activeNode, setActiveNode] = useState("h2");

  const activeItem =
    horizonLogos.find((item) => item.id === activeNode) || horizonLogos[1];

  const nodes = [
    {
      ...horizonLogos[0],
      left: "31%",
      top: "29%",
      size: 132,
      delay: 0,
    },
    {
      ...horizonLogos[1],
      left: "76%",
      top: "28%",
      size: 144,
      delay: 0.15,
    },
    {
      ...horizonLogos[2],
      left: "74%",
      top: "72%",
      size: 136,
      delay: 0.3,
    },
    {
      ...horizonLogos[3],
      left: "34%",
      top: "74%",
      size: 136,
      delay: 0.45,
    },
  ];

  const stars = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    left: `${5 + ((i * 17) % 90)}%`,
    top: `${5 + ((i * 23) % 88)}%`,
    size: 1 + (i % 3),
    duration: 3 + (i % 4),
    delay: (i % 6) * 0.35,
  }));

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
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(167,139,250,0.42)_24%,rgba(96,165,250,0.22)_44%,transparent_72%)] blur-xl"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B5CF6]/15"
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
            d="M 180 350
               C 255 235, 355 235, 500 350
               C 645 465, 745 465, 820 350
               C 745 235, 645 235, 500 350
               C 355 465, 255 465, 180 350"
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
            d="M 180 350
               C 255 235, 355 235, 500 350
               C 645 465, 745 465, 820 350
               C 745 235, 645 235, 500 350
               C 355 465, 255 465, 180 350"
            fill="none"
            stroke="url(#infinityStrokeClean)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="7 10"
            opacity="0.58"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>
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
            y: {
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
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
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
            }}
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
              transition={{
                duration: 18 + index * 2,
                repeat: Infinity,
                ease: "linear",
              }}
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
              transition={{
                duration: 12 + index * 2,
                repeat: Infinity,
                ease: "linear",
              }}
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
          style={{
            boxShadow: `0 0 22px ${activeItem.glow}`,
          }}
        >
          <p
            className="text-[10px] font-black uppercase tracking-[0.28em]"
            style={{ color: activeItem.accent }}
          >
            {activeItem.short}
          </p>

          <h4 className="mt-2 text-2xl font-black text-white">
            {activeItem.name}
          </h4>

          <p className="mt-2 text-sm leading-relaxed text-white/65">
            {activeItem.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}function HorizonPoster({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.08, duration: 0.7 }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-black shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-white/35"
      onMouseEnter={(event) => {
        event.currentTarget.style.boxShadow = `0 0 80px ${item.glow}`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.boxShadow = "0 24px 55px rgba(0,0,0,0.45)";
      }}
    >
      <div className="relative aspect-[2/3] bg-black">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/32 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center gap-3 p-6">
          <span className="h-9 w-1 rounded-full" style={{ backgroundColor: item.accent }} />
          <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/72">{item.code}</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-3xl font-black leading-none tracking-[-0.06em]">{item.name}</h3>
          <p className="mt-4 text-sm leading-6 text-white/65">{item.copy}</p>
          <button
            className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:scale-105"
            style={{ backgroundColor: `${item.accent}55`, border: `1px solid ${item.accent}` }}
          >
            Enter Horizon <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function TimelineCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.07, duration: 0.65 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl"
    >
      <span className="text-5xl font-black tracking-[-0.08em] text-white/10">{item.tag}</span>
      <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
      <p className="mt-4 leading-7 text-white/55">{item.copy}</p>
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
    const fallback = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION_FALLBACK);

    return () => window.clearTimeout(fallback);
  }, []);

  const handleVideoEnded = () => {
    setShowIntro(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-[#7A3FFF] selection:text-white">
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

                <img src={horizonLogoSrc} alt="Horizon by AURION" className="h-9 object-contain" />

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
                    Horizon Universe
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
                    One symbol. Infinite worlds. One final destiny.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.34 }}
                    className="mt-8 max-w-2xl text-lg leading-9 text-white/60 md:text-xl"
                  >
                    Horizon is AURION’s mythological multiverse: anime, music, games and cinematic worlds bound together by the infinite symbol, fractured destinies and one final convergence.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.44 }}
                    className="mt-12 flex flex-wrap gap-4"
                  >
                    <a
                      href="#worlds"
                      className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#C9CCD1]"
                    >
                      Explore Worlds
                      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>

                    <a
                      href="#system"
                      className="rounded-full border border-white/20 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-white/10"
                    >
                      Read System
                    </a>
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
          AURION’s mythological entertainment universe.
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
          Horizon is a connected narrative IP where anime, music, videogames and
          cinematic worlds exist under one evolving mythology. Each Horizon may
          appear independent at first, but all of them are bound by the infinity
          symbol, hidden anomalies and a final convergence still waiting to unfold.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Connected IP",
            "Multiple Media Forms",
            "One Expanding Mythology",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center font-black uppercase tracking-[0.18em] text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

            <section id="timeline" className="relative border-y border-white/10 py-32 md:py-44">
              <SectionAtmosphere />
              <div className="relative mx-auto max-w-7xl px-6">
                <p className="text-xs font-black uppercase tracking-[0.42em] text-white/40">Narrative Timeline</p>
                <h2 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
                  The order of awakening.
                </h2>

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {timeline.map((item, index) => (
                    <TimelineCard key={item.title} item={item} index={index} />
                  ))}
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
                  Battleworld, Kang, AURIONA and the true purpose of Horizon remain classified within the core mythology. More worlds are coming. More scars will open. The journey never ends.
                </p>

                <div className="mt-10 inline-flex rounded-full border border-white/15 bg-white/8 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white/65 backdrop-blur-xl">
                  More Horizons are coming
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}