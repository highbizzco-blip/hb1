import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Shield, Zap, TrendingUp, Globe, Award, Star, Linkedin, ArrowRight, CheckCircle, Sparkles, Heart, Rocket, Eye } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "100+", label: "Clients Served", icon: Users },
  { value: "50+", label: "Team Members", icon: Sparkles },
  { value: "15+", label: "Industries Covered", icon: Globe },
  { value: "4+", label: "Years of Growth", icon: TrendingUp },
];

const team = [
  { name: "Abhinav", role: "Co-Founder & CEO", description: "Seasoned entrepreneur with a track record of helping companies like Mercure, Yellow Spoon, GAA Consulting build high-impact marketing strategies.", expertise: ["Performance Marketing", "Client Strategy", "Leadership"], linkedin: "#", image: "" },
  { name: "Rachana", role: "Human Resources", description: "Multi-faceted professional with a passion for problem-solving. Aerospace engineer turned digital marketer, market researcher, and HR professional.", expertise: ["Digital Marketing", "HR Professional"], linkedin: "#", image: "" },
  { name: "Diksha", role: "Senior Developer", description: "3+ years in full-stack development, creating scalable, high-performance web applications and software solutions.", expertise: ["Full-Stack Dev", "Cloud Computing"], linkedin: "#", image: "" },
  { name: "Dinesh Goutam", role: "Digital Marketer", description: "Sprinkling creativity into the content marketing recipe & serving revenue sources with ad creatives & algorithmic speculations.", expertise: ["Performance Marketing", "Ad Strategy"], linkedin: "#", image: "" },
  { name: "Alexander", role: "Graphic Designer", description: "Experienced designer proficient in Adobe Photoshop, Illustrator, After Effects. Leads UI/UX design and creative solutions.", expertise: ["Graphic Design", "UI/UX"], linkedin: "#", image: "" },
  { name: "Jobin J Rozario", role: "Content Writer", description: "Experienced content writer with proven skills in SEO blog posts and landing pages, worked with 11+ clients across industries.", expertise: ["SEO Content", "Content Marketing"], linkedin: "#", image: "" },
];

const values = [
  { letter: "P", title: "Proactive", description: "We tackle challenges before they arise, driving efficient operations and staying ahead of the curve.", color: "221 83% 53%" },
  { letter: "A", title: "Ambitious", description: "Committed to ambitious targets, constantly striving for excellence in every endeavour we undertake.", color: "142 71% 45%" },
  { letter: "R", title: "Reliability", description: "Driven to deliver excellent results consistently and exceed client expectations at every step.", color: "25 95% 53%" },
  { letter: "T", title: "Transparency", description: "Open communication in all dealings, building trust and solid relationships with every stakeholder.", color: "280 67% 55%" },
];

const milestones = [
  { year: "2020", title: "Founded HighBizz", desc: "Started with a vision to democratize data-driven marketing for ambitious businesses." },
  { year: "2021", title: "First 25 Clients", desc: "Proved our model by generating measurable ROI for startups and SMBs across India." },
  { year: "2022", title: "Team of 30+", desc: "Scaled our operations with dedicated squads for each marketing vertical." },
  { year: "2023", title: "100+ Projects", desc: "Crossed the century mark with clients spanning 15+ industries." },
  { year: "2024", title: "AI-Powered Growth", desc: "Launched our proprietary AI Growth Planner and real-time client dashboards." },
];

const ratings = [
  { platform: "Trustpilot", stars: 5, description: "Honored to be recognized with a 5-star rating on Trustpilot! Your trust and feedback drive us to deliver exceptional service every day.", color: "142 71% 45%" },
  { platform: "Google", stars: 5, description: "A big thank you to our amazing customers for rating us 5 stars on Google! Your reviews are a testament to the quality and dedication we bring.", color: "221 83% 53%" },
  { platform: "AmbitionBox", stars: 5, description: "Proud to be recognized as a top employer with a 5-star rating! Our team's dedication to creating a positive work environment has not gone unnoticed.", color: "25 95% 53%" },
];

const brandLogos = [
  "Mercure", "Yellow Spoon", "GAA Consulting", "Diling First", "TechScale",
  "GrowthLab", "Cloudify", "Nexus", "Elevate", "Primewave",
  "Zenith", "Optima", "Vortex", "Pinnacle", "Catalyst",
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        {/* Animated gradient orbs */}
        <motion.div className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--primary))", y: heroY }} />
        <motion.div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15" style={{ background: "hsl(280 67% 55%)" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-8" style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.25)" }}>
              <Sparkles className="w-3.5 h-3.5" /> About HighBizz
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.08] tracking-tight mb-6 text-white">
              We Build Growth Engines{" "}
              <span className="relative">
                <span style={{ background: "linear-gradient(135deg, hsl(45 90% 55%), hsl(25 95% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  That Actually Work
                </span>
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
              A team of strategists, creatives & data nerds obsessed with turning your marketing spend into predictable, scalable revenue.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary text-sm px-8 py-3.5 inline-flex items-center gap-2">
                Book Intro Call <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#story" className="btn-outline text-sm px-8 py-3.5 inline-flex items-center gap-2" style={{ borderColor: "hsl(0 0% 100% / 0.15)", color: "white" }}>
                Our Story
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }} className="text-center p-6 rounded-2xl" style={{ background: "hsl(0 0% 100% / 0.04)", border: "1px solid hsl(0 0% 100% / 0.08)" }}>
                <s.icon className="w-5 h-5 mx-auto mb-3" style={{ color: "hsl(var(--primary) / 0.7)" }} />
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">{s.value}</div>
                <p className="text-xs text-white/50">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STORY / MISSION ===== */}
      <section id="story" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-badge mb-4 w-fit"><Heart className="w-3.5 h-3.5" /> Our Story</div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Born From a Simple Belief:{" "}
                <span className="text-gradient-blue">Marketing Should Drive Revenue, Not Vanity Metrics.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At HighBizz, we put our clients first. Our team of experts have years of experience in digital marketing, website development, app development, and content marketing, helping clients reach their marketing goals.
                </p>
                <p>
                  We believe in collaborative relationships, continuous learning and the power of collective effort. Every strategy we craft is backed by real data from campaigns that have already generated results.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Client-Owned Assets", "No Lock-ins", "Daily Updates", "Revenue-First"].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: "hsl(var(--primary) / 0.06)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.12)" }}>
                    <CheckCircle className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl p-6 h-40 flex flex-col justify-end" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.03))", border: "1px solid hsl(var(--primary) / 0.12)" }}>
                    <Target className="w-8 h-8 mb-2" style={{ color: "hsl(var(--primary))" }} />
                    <p className="text-sm font-semibold text-foreground">Your Goals = Our KPIs</p>
                  </div>
                  <div className="rounded-2xl p-6 h-52 flex flex-col justify-end" style={{ background: "linear-gradient(135deg, hsl(142 71% 45% / 0.1), hsl(142 71% 45% / 0.03))", border: "1px solid hsl(142 71% 45% / 0.12)" }}>
                    <Shield className="w-8 h-8 mb-2" style={{ color: "hsl(142 71% 45%)" }} />
                    <p className="text-sm font-semibold text-foreground">Radical Transparency</p>
                    <p className="text-xs text-muted-foreground mt-1">Live dashboards, daily updates, no black boxes.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl p-6 h-52 flex flex-col justify-end" style={{ background: "linear-gradient(135deg, hsl(25 95% 53% / 0.1), hsl(25 95% 53% / 0.03))", border: "1px solid hsl(25 95% 53% / 0.12)" }}>
                    <Rocket className="w-8 h-8 mb-2" style={{ color: "hsl(25 95% 53%)" }} />
                    <p className="text-sm font-semibold text-foreground">Speed to Results</p>
                    <p className="text-xs text-muted-foreground mt-1">30-60-90 day targets. Impact in 2 weeks.</p>
                  </div>
                  <div className="rounded-2xl p-6 h-40 flex flex-col justify-end" style={{ background: "linear-gradient(135deg, hsl(280 67% 55% / 0.1), hsl(280 67% 55% / 0.03))", border: "1px solid hsl(280 67% 55% / 0.12)" }}>
                    <Eye className="w-8 h-8 mb-2" style={{ color: "hsl(280 67% 55%)" }} />
                    <p className="text-sm font-semibold text-foreground">Data-Driven Always</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-24" style={{ background: "hsl(var(--surface-raised))" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="section-badge mx-auto mb-4 w-fit"><Zap className="w-3.5 h-3.5" /> Our Journey</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">From Zero to 100+ Happy Clients</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "hsl(var(--primary) / 0.15)" }} />
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <div className="card-feature inline-block text-left max-w-sm">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(var(--primary))" }}>{m.year}</span>
                    <h3 className="text-lg font-display font-semibold text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10" style={{ background: "hsl(var(--primary))", boxShadow: "0 0 0 4px hsl(var(--primary) / 0.15)" }} />
                <div className="md:hidden flex-1 pl-12">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(var(--primary))" }}>{m.year}</span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES - PART ===== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="section-badge mx-auto mb-4 w-fit">Our Values</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              The <span className="text-gradient-blue">PART</span> That Drives Us
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">We prioritise our values to guide us in all our actions and strategies.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, hsl(${v.color} / 0.05), transparent)` }} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl font-display font-bold transition-transform duration-300 group-hover:scale-110" style={{ background: `hsl(${v.color} / 0.1)`, color: `hsl(${v.color})` }}>
                    {v.letter}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-24" style={{ background: "hsl(222 47% 8%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-4" style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.25)" }}>
              <Award className="w-3.5 h-3.5" /> Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Meet the Growth Squad</h2>
            <p className="text-white/50 max-w-lg mx-auto mt-4">With over 4+ years of improving the digital presence of diverse clients, our team understands the path you are on.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(0 0% 100% / 0.04)", border: "1px solid hsl(0 0% 100% / 0.08)" }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "hsl(var(--primary) / 0.04)" }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-base font-display font-bold" style={{ background: "hsl(var(--primary) / 0.15)", color: "hsl(var(--primary))" }}>
                        {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-sm">{t.name}</h3>
                        <p className="text-xs font-medium" style={{ color: "hsl(var(--primary))" }}>{t.role}</p>
                      </div>
                    </div>
                    <a href={t.linkedin} className="p-2 rounded-lg transition-colors hover:bg-white/10" style={{ color: "hsl(0 0% 100% / 0.3)" }}>
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{t.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.expertise.map(e => (
                      <span key={e} className="text-[10px] font-medium px-2.5 py-1 rounded-full" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary) / 0.8)" }}>{e}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-badge mx-auto mb-4 w-fit">100+ Projects</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Trusted by Ambitious Brands</h2>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap trust-scroll">
            {[...brandLogos, ...brandLogos].map((b, i) => (
              <div key={i} className="inline-flex items-center justify-center mx-4 px-8 py-4 rounded-xl border border-border bg-card shrink-0">
                <span className="text-sm font-display font-semibold text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RATINGS ===== */}
      <section className="py-24" style={{ background: "hsl(var(--surface-raised))" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="section-badge mx-auto mb-4 w-fit"><Star className="w-3.5 h-3.5" /> Social Proof</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Proudly Rated 5 Stars Everywhere</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {ratings.map((r, i) => (
              <motion.div key={r.platform} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, hsl(${r.color} / 0.05), transparent)` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: `hsl(${r.color} / 0.1)` }}>
                    <Star className="w-7 h-7" style={{ color: `hsl(${r.color})` }} fill={`hsl(${r.color})`} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-2">{r.platform}</h3>
                  <div className="flex justify-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4" style={{ color: "hsl(45 93% 47%)" }} fill="hsl(45 93% 47%)" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA title="Ready to Join 100+ Growing Brands?" subtitle="Get a free growth audit and see exactly how we'd scale your business with data-driven strategies." />
      <Footer />
    </div>
  );
}
