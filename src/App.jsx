import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";

const iconPaths = {
  arrow: "M5 12h14M13 5l7 7-7 7",
  music: "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  film: "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm4-2v18M16 3v18M4 8h4M4 16h4M16 8h4M16 16h4",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  cpu: "M8 8h8v8H8V8Zm-4 4h4M16 12h4M12 4v4M12 16v4M6 4v3M18 4v3M6 17v3M18 17v3M4 6h3M17 6h3M4 18h3M17 18h3",
  scale: "M12 3v18M5 6h14M6 6l-3 7h6L6 6Zm12 0l-3 7h6l-3-7ZM9 21h6",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-20c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10ZM2 12h20",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11Z",
};

const divisions = [
  { name: "AURION Tech", desc: "Advanced devices, infrastructure, AI systems and global computing architecture.", icon: "cpu", accent: "#168BFF", stat: "01" },
  { name: "AURION Records", desc: "Global music, idols, labels, OST production and sonic identity systems.", icon: "music", accent: "#7A3FFF", stat: "02" },
  { name: "AURION Studios", desc: "Cinema, streaming, animation, franchises and Horizon Canon productions.", icon: "film", accent: "#D4AF37", stat: "03" },
  { name: "AURION Nexus", desc: "The operational intelligence layer connecting every corporation into one ecosystem.", icon: "globe", accent: "#00A6A6", stat: "04" },
  { name: "AURION Legal", desc: "Global compliance, governance, contracts, IP protection and final approval authority.", icon: "scale", accent: "#B91C1C", stat: "05" },
  { name: "AURION Justice", desc: "External intervention, rescue operations and elite strategic enforcement.", icon: "shield", accent: "#111827", stat: "06" },
];

const horizonLogoSrc = "/images/horizon-infinity-logo.png";

const horizonItems = [
  { name: "Luz en la Penumbra", type: "Horizon I", image: "/images/horizon1.png", glow: "rgba(212,175,55,0.35)", accent: "#D4AF37" },
  { name: "IRØS", type: "Horizon II", image: "/images/horizon2.png", glow: "rgba(122,63,255,0.42)", accent: "#7A3FFF" },
  { name: "XIBALBÁ", type: "Horizon III", image: "/images/horizon3.png", glow: "rgba(245,158,11,0.42)", accent: "#F59E0B" },
  { name: "WILDVEIN", type: "Horizon IV", image: "/images/horizon4.png", glow: "rgba(34,197,94,0.38)", accent: "#22C55E" },
];

const leaders = [
  "Josthin Medina — Founder",
  "Sophia Karls — Global Strategy",
  "Adrian Voss — Legal & Compliance",
  "Lyra Kovalenko — AURION Records",
  "Viktor Draeven — AURION Justice",
  "Sienna Kuroda — E-Commerce",
];

function runSmokeTests() {
  console.assert(divisions.length === 6, "AURION homepage should render 6 corporation cards.");
  console.assert(leaders.length === 6, "AURION homepage should render 6 leadership entries.");
  console.assert(horizonItems.length === 4, "AURION homepage should render 4 Horizon cards before the coming-soon card.");
  console.assert(horizonLogoSrc.endsWith(".png"), "Horizon main logo should use a PNG asset path.");

  divisions.forEach((division) => {
    console.assert(Boolean(iconPaths[division.icon]), `${division.name} needs a valid local icon.`);
    console.assert(/^#[0-9A-Fa-f]{6}$/.test(division.accent), `${division.name} needs a valid hex accent color.`);
  });

  horizonItems.forEach((item) => {
    console.assert(item.image.endsWith(".png"), `${item.name} should use a PNG poster path.`);
    console.assert(/^#[0-9A-Fa-f]{6}$/.test(item.accent), `${item.name} needs a valid hex accent color.`);
    console.assert(item.glow.startsWith("rgba("), `${item.name} needs an rgba glow value.`);
  });
}

function Icon({ name, size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.globe} />
    </svg>
  );
}

function AurionLogo({ small = false, logoSrc, alt = "AURION Global Holdings", dark = false }) {
  if (logoSrc) {
    return <img src={logoSrc} alt={alt} className={small ? "h-7 md:h-8" : "h-20 md:h-32"} style={{ objectFit: "contain" }} />;
  }

  return (
    <div className="flex items-end gap-1 select-none" aria-label="AURION logo">
      <span className={`${small ? "text-2xl" : "text-7xl md:text-9xl"} font-black tracking-[-0.08em] leading-none ${dark ? "text-white" : "text-neutral-900"}`}>AURI</span>
      <span className={`${small ? "text-2xl" : "text-7xl md:text-9xl"} relative inline-flex h-[0.9em] w-[0.9em] items-center justify-center rounded-full border-[0.12em] ${dark ? "border-white" : "border-neutral-900"}`}>
        <span className="absolute h-[0.11em] w-[1.15em] bg-[#C9CCD1]" />
      </span>
      <span className={`${small ? "text-2xl" : "text-7xl md:text-9xl"} font-black tracking-[-0.08em] leading-none ${dark ? "text-white" : "text-neutral-900"}`}>N</span>
    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/70 backdrop-blur-xl">{children}</span>;
}

function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div animate={{ x: [0, 80, -40, 0], y: [0, -30, 50, 0], scale: [1, 1.1, 0.96, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[-12%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-[#7A3FFF]/25 blur-3xl" />
      <motion.div animate={{ x: [0, -70, 40, 0], y: [0, 50, -40, 0], scale: [1, 0.95, 1.12, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[-10%] top-[20%] h-[34rem] w-[34rem] rounded-full bg-[#D4AF37]/20 blur-3xl" />
      <motion.div animate={{ opacity: [0.18, 0.34, 0.18] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_35%)]" />
    </div>
  );
}

function HorizonCard({ item, index, active, onActivate, cardRef }) {
  const isActive = active === index;

  return (
    <Tilt
      tiltMaxAngleX={isActive ? 4 : 3}
      tiltMaxAngleY={isActive ? 4 : 3}
      perspective={1400}
      transitionSpeed={1500}
      scale={1.01}
      glareEnable={false}
      className="shrink-0 snap-center rounded-[1.4rem]"
    >
      <motion.button
      ref={cardRef}
      type="button"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.08, duration: 0.65 }}
      onMouseEnter={() => onActivate(index)}
      onFocus={() => onActivate(index)}
      className={`group/card relative shrink-0 snap-center overflow-hidden rounded-[1.4rem] border bg-black text-left shadow-2xl transition-all duration-500 ${isActive ? "w-[17rem] xl:w-[18.25rem] border-white/35 opacity-100" : "w-[14.5rem] xl:w-[15.25rem] border-white/10 opacity-55 hover:opacity-90"}`}
      style={{ boxShadow: isActive ? `0 0 72px ${item.glow}` : "0 22px 45px rgba(0,0,0,0.35)" }}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-black">
        <img src={item.image} alt={item.name} className={`absolute inset-0 h-full w-full bg-black object-contain transition duration-700 ${isActive ? "brightness-110 contrast-105" : "brightness-75 contrast-95 group-hover/card:brightness-100"}`} />
        <div className={`absolute inset-0 bg-gradient-to-t transition duration-500 ${isActive ? "from-black/82 via-black/16 to-black/0" : "from-black/92 via-black/35 to-black/10"}`} />
        <div className={`absolute inset-0 transition duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} style={{ background: `radial-gradient(circle at 50% 35%, transparent 34%, ${item.glow} 145%)` }} />

        <div className="absolute inset-x-0 top-0 flex items-center gap-3 p-5">
          <span className="h-8 w-1 rounded-full" style={{ backgroundColor: item.accent }} />
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/72">{item.type}</p>
        </div>

        <div className={`absolute inset-x-0 bottom-0 p-5 transition duration-500 ${isActive ? "translate-y-0" : "translate-y-7"}`}>
          <h3 className="text-3xl font-black leading-none tracking-[-0.06em] drop-shadow-xl">{item.name}</h3>
          <p className="mt-4 text-sm leading-6 text-white/65">Canonical franchise asset under the AURION Horizon system.</p>
          <div className={`mt-5 flex gap-3 transition duration-500 ${isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
            <span className="flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white transition" style={{ backgroundColor: `${item.accent}55`, border: `1px solid ${item.accent}` }}>▶ Enter</span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl transition">Info</span>
          </div>
        </div>
      </div>
      </motion.button>
    </Tilt>
  );
}

function MoreHorizonsCard({ active, onActivate, cardRef }) {
  const isActive = active === horizonItems.length;

  return (
    <Tilt
      tiltMaxAngleX={isActive ? 4 : 3}
      tiltMaxAngleY={isActive ? 4 : 3}
      perspective={1400}
      transitionSpeed={1500}
      scale={1.01}
      glareEnable={false}
      className="shrink-0 snap-center rounded-[1.4rem]"
    >
      <motion.button
      ref={cardRef}
      type="button"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.38, duration: 0.65 }}
      onMouseEnter={() => onActivate(horizonItems.length)}
      onFocus={() => onActivate(horizonItems.length)}
      className={`group/card relative shrink-0 snap-center overflow-hidden rounded-[1.4rem] border bg-black text-center shadow-2xl transition-all duration-500 ${isActive ? "w-[17rem] xl:w-[18.25rem] border-white/35 opacity-100" : "w-[14.5rem] xl:w-[15.25rem] border-white/10 opacity-55 hover:opacity-90"}`}
      style={{ boxShadow: isActive ? "0 0 72px rgba(255,255,255,0.2)" : "0 22px 45px rgba(0,0,0,0.35)" }}
    >
      <div className="relative flex aspect-[2/3] items-center justify-center overflow-hidden bg-black p-7">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 34%, rgba(255,255,255,0.16), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent)" }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
          <p className="mb-7 text-[10px] font-black uppercase tracking-[0.45em] text-white/55">More Horizons</p>
          <img src={horizonLogoSrc} alt="Horizon by AURION" className={`mb-8 w-full max-w-[13rem] opacity-90 drop-shadow-[0_0_28px_rgba(255,255,255,0.22)] transition duration-500 ${isActive ? "scale-105 opacity-100" : ""}`} />
          <p className="max-w-xs text-base leading-7 text-white/70">Más historias de otros Horizons se vienen en camino.</p>
          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.28em] text-[#7A3FFF]">The journey never ends.</p>
        </div>
      </div>
      </motion.button>
    </Tilt>
  );
}

runSmokeTests();
console.assert(typeof AurionLogo === "function", "AurionLogo should be a valid component.");
console.assert(typeof HorizonCard === "function", "HorizonCard should be a valid component.");
console.assert(typeof MoreHorizonsCard === "function", "MoreHorizonsCard should be a valid component.");
console.assert(typeof React.useState === "function", "React state should be available for active Horizon focus.");
console.assert(typeof React.useEffect === "function", "React effect should be available for auto carousel behavior.");
console.assert(typeof React.useRef === "function", "React ref should be available for carousel centering.");
console.assert(typeof React.useCallback === "function", "React callback should be available for carousel pause/resume.");

export default function AurionHomepage({ logoSrc }) {
  const [activeHorizon, setActiveHorizon] = React.useState(0);
  const carouselRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const intervalRef = React.useRef(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.35]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -220]);

  const stopCarousel = React.useCallback(() => {
    if (!intervalRef.current) return;
    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startCarousel = React.useCallback(() => {
    if (intervalRef.current) return;
    const totalCards = horizonItems.length + 1;
    intervalRef.current = window.setInterval(() => {
      setActiveHorizon((current) => (current + 1) % totalCards);
    }, 5000);
  }, []);

  React.useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, [startCarousel, stopCarousel]);

  React.useEffect(() => {
    const target = cardRefs.current[activeHorizon];
    const carousel = carouselRef.current;
    if (!target || !carousel) return;
    carousel.scrollTo({ left: target.offsetLeft - carousel.clientWidth / 2 + target.offsetWidth / 2, behavior: "smooth" });
  }, [activeHorizon]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white selection:bg-[#7A3FFF] selection:text-white">
      <motion.div className="pointer-events-none fixed inset-0 opacity-[0.08]" style={{ y: gridY, backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <AurionLogo small logoSrc={logoSrc} dark />
          <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.28em] text-white/45 md:flex">
            <a href="#vision" className="transition hover:text-white">Vision</a>
            <a href="#ecosystem" className="transition hover:text-white">Ecosystem</a>
            <a href="#horizon" className="transition hover:text-white">Horizon</a>
            <a href="#leadership" className="transition hover:text-white">Leadership</a>
          </div>
          <button className="rounded-full border border-white/20 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">Access</button>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center pt-24">
        <AuroraBackground />
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="relative mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <Pill>Global Holdings, Inc.</Pill>
              <Pill>Visual Identity System</Pill>
              <Pill>Horizon Core</Pill>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.1 }} className="rounded-[2rem] bg-white px-8 py-7 shadow-[0_0_80px_rgba(255,255,255,0.12)]">
              <AurionLogo logoSrc={logoSrc} />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-12 max-w-6xl text-5xl font-black leading-[0.88] tracking-[-0.075em] md:text-8xl">
              Designed to command the future.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }} className="mt-8 max-w-3xl text-lg leading-9 text-white/55 md:text-xl">
              AURION unites corporate power, cinematic worlds, music, technology and strategic governance into one premium ecosystem.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }} className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#ecosystem" className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#C9CCD1]">Explore Ecosystem <Icon name="arrow" size={16} className="transition group-hover:translate-x-1" /></a>
              <a href="#horizon" className="rounded-full border border-white/20 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-white/10">Enter Horizon</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="vision" className="relative border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-white/40">The Master System</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">A holding built like a universe.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl md:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              {["Technology", "Entertainment", "Governance"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <p className="text-5xl font-black tracking-[-0.08em] text-white/15">0{index + 1}</p>
                  <h3 className="mt-10 font-black tracking-[-0.03em]">{item}</h3>
                </div>
              ))}
            </div>
            <p className="mt-8 leading-8 text-white/55">The general website acts as the central portal: corporate overview, divisions, Horizon universe, leadership and restricted access architecture.</p>
          </motion.div>
        </div>
      </section>

      <section id="ecosystem" className="relative bg-[#F7F7F5] py-28 text-[#2B2B2B] md:py-40">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#2B2B2B 1px, transparent 1px), linear-gradient(90deg, #2B2B2B 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Corporate Ecosystem</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">One system. Many empires.</h2>
            </div>
            <p className="max-w-md leading-7 text-neutral-600">Each corporation has its own role, color code and operational language while remaining under the AURION master brand.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((item, i) => (
              <Tilt
                key={item.name}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1200}
                transitionSpeed={1400}
                scale={1.01}
                glareEnable={false}
                className="rounded-[1.7rem]"
              >
                <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.05, duration: 0.65 }} className="group relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur-sm transition hover:shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-1 opacity-80" style={{ backgroundColor: item.accent }} />
                <div className="mb-12 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: item.accent }}>
                    <Icon name={item.icon} size={22} />
                  </div>
                  <span className="text-6xl font-black tracking-[-0.08em] text-black/[0.04]">{item.stat}</span>
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">{item.name}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-0 transition group-hover:opacity-100">Open Division <Icon name="arrow" size={15} /></div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <section id="horizon" className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32">
        <AuroraBackground />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <img src={horizonLogoSrc} alt="Horizon by AURION" className="pointer-events-none absolute right-[-10%] top-10 hidden w-[42rem] select-none opacity-[0.025] grayscale lg:block xl:w-[52rem]" />

        <div className="relative mx-auto max-w-[92rem] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[21rem_minmax(0,1fr)]">
            <div className="max-w-[21rem]">
              <p className="mb-6 border-l-2 border-[#7A3FFF] pl-4 text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]">Horizon Universe</p>
              <img src={horizonLogoSrc} alt="Horizon by AURION" className="mb-8 w-full max-w-[15rem] opacity-95 drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]" />
              <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.075em] md:text-6xl">The mythology engine.</h2>
              <p className="mt-7 max-w-[18rem] leading-8 text-white/55">Anime, music, games and cinematic events connected by the symbol of infinity.</p>
              <div className="mt-7 h-px w-28 bg-gradient-to-r from-[#7A3FFF] to-transparent" />
              <a href="/horizon" className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#7A3FFF]/60 bg-[#7A3FFF]/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#7A3FFF]/20">Explore Horizon <Icon name="arrow" size={14} /></a>
            </div>

            <div className="relative min-w-0">
              <div
                ref={carouselRef}
                onMouseEnter={stopCarousel}
                onMouseLeave={startCarousel}
                className="flex min-w-full snap-x snap-mandatory items-center gap-5 overflow-x-auto px-6 pb-10 pt-8 pr-34 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {horizonItems.map((item, index) => (
                  <HorizonCard
                    key={item.name}
                    item={item}
                    index={index}
                    active={activeHorizon}
                    onActivate={setActiveHorizon}
                    cardRef={(node) => {
                      cardRefs.current[index] = node;
                    }}
                  />
                ))}
                <MoreHorizonsCard
                  active={activeHorizon}
                  onActivate={setActiveHorizon}
                  cardRef={(node) => {
                    cardRefs.current[horizonItems.length] = node;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="relative bg-[#F7F7F5] py-28 text-[#2B2B2B] md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Leadership</p>
          <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">Command structure.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, i) => (
              <motion.div key={leader} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-2xl border border-black/10 bg-white/80 p-6 font-black tracking-[-0.02em] shadow-sm">
                {leader}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-28 text-white">
        <AuroraBackground />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Icon name="lock" size={36} className="mx-auto mb-8 text-white/50" />
          <h2 className="text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">Restricted ecosystem access.</h2>
          <p className="mt-7 leading-8 text-white/55">A final cinematic call-to-action for investors, employees, partners and internal AURION divisions.</p>
          <button className="mt-10 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#C9CCD1]">Request Entry</button>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-black py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
          <AurionLogo small logoSrc={logoSrc} dark />
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/35">© 2045 AURION Global Holdings, Inc. / Visual Identity Concept</p>
        </div>
      </footer>
    </main>
  );
}
