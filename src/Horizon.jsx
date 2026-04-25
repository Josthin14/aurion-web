import React from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const INTRO_DURATION_FALLBACK = 10000;
const horizonLogoSrc = "/images/horizon-infinity-logo.png";
const horizonHeroBg = "/images/horizon-hero-bg.png";
const horizonHeroVideo = "/videos/horizon-hero.mp4";

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
        className="absolute inset-0 h-full w-full object-cover"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src={horizonHeroVideo}
        poster={horizonHeroBg}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.60)_0%,rgba(2,6,23,0.30)_35%,rgba(2,6,23,0.18)_58%,rgba(2,6,23,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.20)_0%,rgba(2,6,23,0.25)_58%,rgba(2,6,23,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(120,170,255,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(122,63,255,0.16),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_70%,rgba(59,130,246,0.14),transparent_24%)]" />

      <motion.div
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[44%] top-[38%] h-56 w-56 rounded-full bg-[#7A3FFF]/18 blur-3xl"
      />

      <motion.div
        animate={{ opacity: [0.12, 0.26, 0.12], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-[22%] h-72 w-72 rounded-full bg-[#60A5FA]/14 blur-3xl"
      />
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

function HeroVisualCluster() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="relative hidden min-h-[38rem] lg:block"
    >
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A3FFF]/12 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_120px_rgba(96,165,250,0.18)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7A3FFF]/30"
      />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35),rgba(96,165,250,0.15),transparent_70%)]" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-14 w-56 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#9B6DFF]">
          Horizon I
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">Luz en la Penumbra</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">The first fracture opens.</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 top-24 w-52 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#60A5FA]">
          Horizon II
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">IRØS</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">Signal, idols and hidden power.</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-20 w-52 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B]">
          Horizon III
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">XIBALBÁ</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">Ancient gods. Corrupted skies.</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 right-10 w-52 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#22C55E]">
          Horizon IV
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">WILDVEIN</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">The living archive remembers.</p>
      </motion.div>
    </motion.div>
  );
}

function HorizonPoster({ item, index }) {
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
                className="relative mx-auto grid w-full max-w-[96rem] items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]"
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
                    className="mt-12 max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.08em] md:text-8xl"
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

                <HeroVisualCluster />
              </motion.div>
            </section>

            <section id="system" className="relative border-y border-white/10 py-32 md:py-44">
              <SectionAtmosphere />
              <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.75 }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.42em] text-white/40">The Horizon System</p>
                  <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                    Not a franchise. A connected mythology.
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
                    Each Horizon appears independent at first: a series, a music identity, a videogame, an anime. But beneath every world lives the same anomaly: the symbol of infinity, fragments of Kang and the hidden architecture of AURIONA.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {["Infinity", "AURIONA", "Battleworld"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center font-black uppercase tracking-[0.22em] text-white/70"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            <section id="worlds" className="relative bg-[#050505] py-32 md:py-44">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(122,63,255,0.08),transparent_35%)]" />
              <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.42em] text-[#9B6DFF]">Current Worlds</p>
                    <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
                      Enter the Horizons.
                    </h2>
                  </div>
                  <p className="max-w-md leading-8 text-white/55">
                    Every world expands the same hidden system. Some are fantasy. Some are music. Some are games. All are connected.
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