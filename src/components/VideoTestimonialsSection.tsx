import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Quote, X } from "lucide-react";
import { useState, useEffect } from "react";

const videoTestimonials = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    company: "TechNova Solutions",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    duration: "2:34",
    youtubeId: "dQw4w9WgXcQ",
    quote: "HighBizz transformed our digital presence completely. We went from ₹12L monthly revenue to ₹1.2Cr in just 6 months. Their AI-driven approach is unlike anything I've seen.",
    metric: "10x Revenue Growth",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Marketing Director",
    company: "GreenLeaf Organics",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    duration: "3:12",
    youtubeId: "dQw4w9WgXcQ",
    quote: "We were spending lakhs on ads with no clear ROI. HighBizz gave us complete transparency and a 5.2x ROAS within the first quarter. The dashboard alone is worth it.",
    metric: "5.2x ROAS in 90 Days",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Co-Founder",
    company: "UrbanFit Studios",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    duration: "1:58",
    youtubeId: "dQw4w9WgXcQ",
    quote: "From 200 leads a month to over 2,000. The team at HighBizz doesn't just run campaigns — they become part of your growth engine. Best decision we ever made.",
    metric: "10x Lead Generation",
    rating: 5,
  },
];

export default function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeVideo !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeVideo]);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10" style={{ background: "hsl(var(--primary))" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-4" style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.25)" }}>
            <Play className="w-3.5 h-3.5" /> Client Interviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Hear It Directly From{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(45 90% 55%), hsl(25 95% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Our Clients</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "hsl(0 0% 100% / 0.55)" }}>
            Real founders, real results. Watch short interviews with business owners who scaled with HighBizz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="group">
              <div className="relative rounded-2xl overflow-hidden cursor-pointer mb-5 aspect-video" onClick={() => setActiveVideo(i)} role="button" aria-label={`Play ${testimonial.name} testimonial`}>
                <img src={testimonial.thumbnail} alt={`${testimonial.name} interview`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm" style={{ background: "hsl(var(--primary) / 0.9)" }}>
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </motion.div>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-black/50 backdrop-blur-sm">{testimonial.duration}</div>
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm" style={{ background: "hsl(var(--primary) / 0.85)", color: "white" }}>{testimonial.metric}</div>
              </div>
              <div className="rounded-2xl p-5" style={{ background: "hsl(0 0% 100% / 0.04)", border: "1px solid hsl(0 0% 100% / 0.08)" }}>
                <Quote className="w-5 h-5 mb-3 opacity-20 text-primary" />
                <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "hsl(0 0% 100% / 0.6)" }}>"{testimonial.quote}"</p>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, s) => (<Star key={s} className="w-3.5 h-3.5" style={{ color: "hsl(45 93% 47%)" }} fill="hsl(45 93% 47%)" />))}
                </div>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" style={{ border: "2px solid hsl(0 0% 100% / 0.1)" }} />
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs" style={{ color: "hsl(0 0% 100% / 0.45)" }}>{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bug #7 fixed: Video modal with real YouTube embed */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveVideo(null)} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors" aria-label="Close video">
                <X className="w-4 h-4" />
              </button>
              <div className="aspect-video">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoTestimonials[activeVideo].youtubeId}?autoplay=1&rel=0`} title={`${videoTestimonials[activeVideo].name} testimonial`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
