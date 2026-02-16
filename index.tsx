import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, ChevronUp, Plus, Minus, Check, Mail, ArrowRight,
  ExternalLink, Shield, Clock, MessageSquare, BarChart3, Eye, Zap, Users,
  TrendingUp, Star, Sparkles, Calendar, Target, Bot, Send, FileText, Rocket,
  Filter, Search, Settings, Volume2, Globe, Play
} from "lucide-react";

/* ──────────── Google Fonts ──────────── */
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: #FFF8F2; color: #1A1A1A; }
    .font-playfair { font-family: 'Playfair Display', serif; font-style: italic; }
    .fade-section { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
    .fade-section.visible { opacity: 1; transform: translateY(0); }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; }
    .faq-answer.open { max-height: 300px; }
  `}</style>
);

/* ──────────── Section Divider ──────────── */
const SectionDivider = () => (
  <div className="flex items-center justify-center" style={{ padding: "40px 0" }}>
    <div style={{ width: "60%", position: "relative", height: "1px", background: "#EDE5DC" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        display: "flex", alignItems: "center", gap: "8px", background: "#FFF8F2", padding: "0 16px"
      }}>
        <span style={{ color: "#E8582D", fontSize: "8px" }}>◆</span>
        <span style={{ color: "#E8582D", fontSize: "14px" }}>✦</span>
        <span style={{ color: "#E8582D", fontSize: "8px" }}>◆</span>
      </div>
    </div>
  </div>
);

/* ──────────── Pill Badge ──────────── */
const SectionPill = ({ icon, text }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: "6px",
    padding: "6px 16px", borderRadius: "999px", border: "1px solid #EDE5DC",
    fontSize: "13px", color: "#6B6B6B", background: "#FFFFFF"
  }}>
    {icon && <span style={{ fontSize: "12px" }}>{icon}</span>}
    <span>{text}</span>
  </div>
);

/* ──────────── Animated Section Wrapper ──────────── */
const AnimatedSection = ({ children, id, style, className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} id={id} className={`fade-section ${className}`} style={style}>{children}</section>;
};

/* ──────────── Main Component ──────────── */
export default function RedRoverLandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showWidget, setShowWidget] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ──── Chart Data ──── */
  const chartData = [
    { name: "reddit", value: 96000, color: "#E8582D" },
    { name: "amazon", value: 83000, color: "#4A4A4A" },
    { name: "Quora", value: 43000, color: "#4A4A4A" },
    { name: "YouTube", value: 38000, color: "#4A4A4A" },
    { name: "The New York Times", value: 30000, color: "#4A4A4A" },
    { name: "Best Buy", value: 24000, color: "#4A4A4A" },
    { name: "CNET", value: 17000, color: "#4A4A4A" },
    { name: "techradar", value: 5000, color: "#4A4A4A" },
  ];
  const maxVal = 96000;

  /* ──── FAQ Data ──── */
  const faqs = [
    { q: "How does RedRover work?", a: "RedRover uses AI agents to monitor Reddit conversations relevant to your product, then automatically creates and posts high-converting content. Our system handles everything from keyword tracking to comment deployment." },
    { q: "What kind of results can I expect?", a: "Most clients see measurable traffic increases within the first 2 weeks. On average, our users achieve 3x ROI with over 100M impressions across their campaigns." },
    { q: "Is RedRover compliant with Reddit's rules?", a: "RedRover is designed to work within Reddit's guidelines. Our safety system mimics natural human behavior, rotates accounts, and includes cooldown periods to avoid flags." },
    { q: "Who is RedRover for?", a: "RedRover is built for SaaS founders, marketers, agencies, and any business looking to tap into Reddit's massive organic reach for lead generation and brand awareness." },
    { q: "Can I customize the voice or tone of the AI?", a: "Absolutely. You can define tone, set keywords to avoid or prioritize, upload example replies, and configure brand-specific messaging rules." },
    { q: "I have more questions!", a: "We'd love to hear from you! Email us at admin@tryredrover.com or schedule a demo through our website." },
  ];

  /* ──── Heatmap Data ──── */
  const heatmapData = [
    [0, 1, 0, 0], [0, 1, 1, 0], [1, 0, 0, 0], [0, 0, 1, 1], [0, 0, 0, 1]
  ];
  const times = ["8 AM", "12 PM", "3 PM", "5 PM", "10 PM"];
  const days = ["Mon", "Tue", "Wed", "Thu"];

  /* ──── Pricing Data ──── */
  const pricingCards = [
    {
      icon: <BarChart3 size={22} />, title: "Viral Growth Agent", titleColor: "#1A1A1A",
      desc: "We'll build your Reddit growth system and engineer it to reach millions of views on autopilot",
      items: [
        { icon: <FileText size={16} />, text: "Strategy & Research Playbook" },
        { icon: <Users size={16} />, text: "Up to 3 Warmed Personas" },
        { icon: <Calendar size={16} />, text: "30 Days of Content + Viral Templates" },
        { icon: <TrendingUp size={16} />, text: "Live Performance Dashboard" },
        { icon: <Clock size={16} />, text: "Identifies Optimal Posting Schedule" },
        { icon: <Star size={16} />, text: "Rank #1 on Search (Google & ChatGPT)" },
      ],
      btnBg: "#E8582D", btnText: "#FFFFFF"
    },
    {
      icon: <Filter size={22} />, title: "Conversational Agent", titleColor: "#1A1A1A",
      desc: "Show up in every relevant conversation on Reddit with our proactive AI Reddit Rep.",
      items: [
        { icon: <Search size={16} />, text: "Keyword & Competitor Monitoring" },
        { icon: <Bot size={16} />, text: "AI-Powered Brand Personas" },
        { icon: <Send size={16} />, text: "Automated Subreddit Outreach" },
        { icon: <Shield size={16} />, text: "Custom Tone & Safety Controls" },
        { icon: <MessageSquare size={16} />, text: "AI Comment & Engagement Engine" },
        { icon: <BarChart3 size={16} />, text: "Conversation Logs & Reports" },
      ],
      btnBg: "#E8582D", btnText: "#FFFFFF"
    },
    {
      icon: <Rocket size={22} color="#E8582D" />, title: "Domination Agent", titleColor: "#E8582D",
      desc: "Fully managed Reddit growth system that makes your brand the talk of your niche.",
      items: [
        { icon: <Zap size={16} />, text: "Everything in both agents plus.." },
        { icon: <FileText size={16} />, text: "Full-Funnel Content Creation" },
        { icon: <Bot size={16} />, text: "Autogenerated Reddit Posts" },
        { icon: <Settings size={16} />, text: "Subreddit Creation & Management" },
        { icon: <Rocket size={16} />, text: "Engagement Boosting on Autopilot" },
        { icon: <BarChart3 size={16} />, text: "Weekly Reports on Revenue Attribution" },
      ],
      btnBg: "#1A1A1A", btnText: "#FFFFFF"
    }
  ];

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#FFF8F2", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <FontStyle />



      {/* ═══════════ 2. NAVIGATION ═══════════ */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 1000, background: "#FFFFFF",
        borderBottom: scrolled ? "1px solid #EDE5DC" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.3s, border 0.3s"
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "12px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%", background: "#E8582D",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFF", fontWeight: 700, fontSize: "16px"
            }}>R</div>
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ fontWeight: 700, fontSize: "16px", color: "#1A1A1A" }}>RedRover</span>
              <div style={{ fontSize: "8px", color: "#999", letterSpacing: "0.5px" }}>by CLOVER</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}
            className="hidden md:flex">
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", color: "#1A1A1A", cursor: "pointer" }}>Product <ChevronDown size={14} /></span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", color: "#1A1A1A", cursor: "pointer" }}>Resources <ChevronDown size={14} /></span>
            <span onClick={() => scrollTo("why-reddit")} style={{ fontSize: "14px", color: "#1A1A1A", cursor: "pointer" }}>Why Reddit</span>
            <span onClick={() => scrollTo("pricing")} style={{ fontSize: "14px", color: "#1A1A1A", cursor: "pointer" }}>Pricing</span>
          </div>

          {/* Desktop Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="hidden md:flex">
            <button style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 18px", borderRadius: "999px", border: "1px solid #DDD",
              background: "transparent", fontSize: "14px", fontWeight: 600, cursor: "pointer", color: "#1A1A1A"
            }}>
              <Sparkles size={14} /> Get Started
            </button>
            <button style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 20px", borderRadius: "999px", border: "none",
              background: "#E8582D", color: "#FFF", fontSize: "14px", fontWeight: 600, cursor: "pointer"
            }}>
              <Calendar size={14} /> Get a Demo
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer" }}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden" style={{
            background: "#FFF", borderTop: "1px solid #EDE5DC", padding: "16px 24px",
            display: "flex", flexDirection: "column", gap: "16px"
          }}>
            <span style={{ fontSize: "14px", cursor: "pointer" }}>Product</span>
            <span style={{ fontSize: "14px", cursor: "pointer" }}>Resources</span>
            <span onClick={() => scrollTo("why-reddit")} style={{ fontSize: "14px", cursor: "pointer" }}>Why Reddit</span>
            <span onClick={() => scrollTo("pricing")} style={{ fontSize: "14px", cursor: "pointer" }}>Pricing</span>
            <button style={{ padding: "10px 20px", borderRadius: "999px", background: "#E8582D", color: "#FFF", border: "none", fontWeight: 600, cursor: "pointer" }}>
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* ═══════════ 3. HERO SECTION ═══════════ */}
      <section style={{
        background: "linear-gradient(135deg, #E8652D 0%, #D4502A 40%, #C74530 70%, #B83A2A 100%)",
        position: "relative", overflow: "hidden", paddingBottom: "80px"
      }}>
        {/* Decorative shapes */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none" }}>
          {/* Floating UI elements left */}
          <div style={{ position: "absolute", top: "15%", left: "3%", width: "120px", height: "60px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", transform: "rotate(-8deg)" }} />
          <div style={{ position: "absolute", top: "30%", left: "5%", width: "80px", height: "40px", borderRadius: "10px", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", top: "20%", left: "1%", width: "16px", height: "16px", borderRadius: "50%", background: "#E8582D", border: "2px solid rgba(255,255,255,0.3)" }} />
          {/* Arrow up icons left */}
          <div style={{ position: "absolute", top: "12%", left: "6%", color: "rgba(255,200,100,0.4)", fontSize: "28px" }}>↑</div>
          <div style={{ position: "absolute", top: "55%", left: "2%", color: "rgba(255,200,100,0.25)", fontSize: "22px" }}>↑</div>
          {/* Floating UI elements right */}
          <div style={{ position: "absolute", top: "10%", right: "3%", width: "140px", height: "50px", borderRadius: "12px", background: "rgba(255,255,255,0.07)", transform: "rotate(5deg)" }} />
          <div style={{ position: "absolute", top: "25%", right: "6%", width: "100px", height: "30px", borderRadius: "8px", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "absolute", top: "30%", right: "2%", width: "60px", height: "20px", borderRadius: "6px", background: "#E8582D", opacity: 0.5 }} />
          <div style={{ position: "absolute", top: "45%", right: "8%", color: "rgba(255,200,100,0.3)", fontSize: "24px" }}>↑</div>
        </div>

        {/* Wave bottom */}
        <svg style={{ position: "absolute", bottom: "-2px", left: 0, width: "100%" }} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF8F2" />
        </svg>

        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "60px 24px 0", position: "relative", zIndex: 2 }}>
          {/* Pill Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.15)",
            fontSize: "13px", color: "#FFF", marginBottom: "24px", backdropFilter: "blur(4px)"
          }}>
            <span>AI-Powered</span>
            <span style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.3)" }} />
            <Bot size={14} />
            <span>Reddit Lead Generation</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 700, color: "#FFF", lineHeight: 1.15, marginBottom: "20px" }}>
            Turn Reddit Threads Into<br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                position: "absolute", inset: "-4px -12px", borderRadius: "8px",
                background: "rgba(255,255,255,0.15)"
              }} />
              <span style={{ position: "relative" }}>Traffic & Sales</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.6 }}>
            AI agents that join the right conversations, drive traffic to your product, and get you in front of millions, without lifting a finger.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "12px 24px", borderRadius: "999px", background: "#FFF",
              color: "#1A1A1A", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer"
            }}>
              <Sparkles size={16} color="#E8582D" />
              <span><strong>Get Customers from Reddit</strong> <span style={{ color: "#999" }}>— It's free</span></span>
            </button>
            <button style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "12px 24px", borderRadius: "999px",
              background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
              color: "#FFF", fontWeight: 600, fontSize: "15px", cursor: "pointer", backdropFilter: "blur(4px)"
            }}>
              <Calendar size={16} />
              Schedule a Strategy Session
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", fontSize: "13px", color: "#FFF" }}>
            {[["3x ROI"], ["100M+ Impressions"], ["Integrates in 5 minutes"]].map(([text], i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{
                  width: "18px", height: "18px", borderRadius: "50%", background: "#22C55E",
                  display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Check size={11} color="#FFF" strokeWidth={3} />
                </span>
                {text}
              </span>
            ))}
          </div>

          {/* Dashboard Placeholder */}
          <div style={{
            marginTop: "48px", background: "#FFF", borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            padding: "24px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto",
            position: "relative", zIndex: 3
          }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF605C" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD44" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00CA4E" }} />
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ flex: "0 0 160px" }}>
                <div style={{ height: "12px", width: "80%", background: "#F0E8E0", borderRadius: "4px", marginBottom: "8px" }} />
                <div style={{ height: "12px", width: "60%", background: "#F0E8E0", borderRadius: "4px", marginBottom: "16px" }} />
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ height: "10px", width: `${50 + i * 10}%`, background: "#F5EDE5", borderRadius: "4px", marginBottom: "6px" }} />
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: "120px", background: "linear-gradient(135deg, #FFF0E6 0%, #F5E6D8 100%)", borderRadius: "10px", display: "flex", alignItems: "flex-end", padding: "12px", gap: "6px" }}>
                  {[40, 65, 50, 80, 70, 90, 60, 75, 85].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 8 ? "#E8582D" : "#E8D5C4", borderRadius: "3px 3px 0 0" }} />
                  ))}
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                  {[1,2,3].map(i => (
                    <div key={i} style={{ flex: 1, height: "50px", background: "#FFF8F2", borderRadius: "8px", border: "1px solid #F0E8E0" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4. THREE-STEP WORKFLOW ═══════════ */}
      <AnimatedSection style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionPill icon="⟐" text="3-Steps Workflow" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {[
            { step: "Step 1", title: "Agent Monitors Reddit Threads", desc: "RedRover tracks keywords, trends, and competitors across Reddit, 24/7." },
            { step: "Step 2", title: "Viral posts and comments are inserted", desc: "We deploy viral posts, high-converting comments, and native ads, automatically." },
            { step: "Step 3", title: "Get direct traffic to your site", desc: "Traffic flows in organically. Expect new users, demo signups, and sales." },
          ].map((card, i) => (
            <div key={i} style={{
              background: "#FFF", borderRadius: "16px", padding: "28px",
              boxShadow: "0 4px 20px rgba(180,160,140,0.1)", transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "default"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(180,160,140,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(180,160,140,0.1)"; }}
            >
              <span style={{ fontSize: "13px", color: "#E8582D", fontWeight: 500 }}>{card.step}</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0 8px", color: "#1A1A1A" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.5, marginBottom: "20px" }}>{card.desc}</p>
              {/* Screenshot placeholder */}
              <div style={{
                height: "180px", background: "linear-gradient(135deg, #FFF0E6, #F5E6D8)",
                borderRadius: "12px", padding: "16px", position: "relative", overflow: "hidden"
              }}>
                {i === 0 && <>
                  {[1,2,3].map(j => (
                    <div key={j} style={{ background: "#FFF", borderRadius: "8px", padding: "8px 10px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: j === 1 ? "#E8582D" : "#DDD" }} />
                      <div style={{ height: "6px", flex: 1, background: "#F0E8E0", borderRadius: "3px" }} />
                      <div style={{ height: "6px", width: "30px", background: "#F0E8E0", borderRadius: "3px" }} />
                    </div>
                  ))}
                  <div style={{ position: "absolute", top: "8px", left: "12px", background: "#E8582D", color: "#FFF", fontSize: "9px", padding: "2px 6px", borderRadius: "4px" }}>Tracking Active</div>
                </>}
                {i === 1 && <>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                    <div style={{ width: "24px", height: "24px", background: "#E8582D", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: "12px" }}>↑</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: "6px", width: "80%", background: "#E8D5C4", borderRadius: "3px", marginBottom: "4px" }} />
                      <div style={{ height: "6px", width: "50%", background: "#F0E8E0", borderRadius: "3px" }} />
                    </div>
                  </div>
                  <div style={{ background: "#FFF", borderRadius: "8px", padding: "10px", marginTop: "8px" }}>
                    <div style={{ height: "6px", width: "90%", background: "#F0E8E0", borderRadius: "3px", marginBottom: "6px" }} />
                    <div style={{ height: "6px", width: "60%", background: "#F0E8E0", borderRadius: "3px" }} />
                    <div style={{ position: "absolute", bottom: "16px", right: "16px", background: "#E8582D", color: "#FFF", fontSize: "9px", padding: "2px 6px", borderRadius: "4px" }}>Posted ✓</div>
                  </div>
                  <div style={{ position: "absolute", top: "40%", right: "25%", color: "#E8582D", fontSize: "20px" }}>↑</div>
                </>}
                {i === 2 && <>
                  <div style={{ position: "absolute", top: "8px", left: "12px", background: "#E8582D", color: "#FFF", fontSize: "9px", padding: "2px 6px", borderRadius: "4px" }}>Funnel</div>
                  <div style={{ marginTop: "30px", background: "#FFF", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: "11px", color: "#6B6B6B", marginBottom: "4px" }}>Your Product</div>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#F0E8E0", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Globe size={12} color="#999" />
                    </div>
                    <div style={{ background: "#22C55E", color: "#FFF", fontSize: "9px", padding: "3px 8px", borderRadius: "4px", display: "inline-block" }}>Start Free Trial</div>
                  </div>
                  <div style={{ position: "absolute", top: "20px", right: "30px", color: "#6B6B6B", fontSize: "18px" }}>↗</div>
                </>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "12px 28px", borderRadius: "999px", background: "#E8582D",
            color: "#FFF", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer"
          }}>
            <Sparkles size={16} /> <strong>Get Started</strong> <span style={{ opacity: 0.8 }}>- It's free</span>
          </button>
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ═══════════ 6. TWO SYSTEMS ═══════════ */}
      <AnimatedSection style={{ padding: "40px 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionPill icon="⊕" text="How RedRover Works" />
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginTop: "16px", color: "#1A1A1A" }}>
            Two Systems. <span className="font-playfair" style={{ color: "#E8582D" }}>One Growth Engine.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#6B6B6B", maxWidth: "600px", margin: "12px auto 0", lineHeight: 1.6 }}>
            RedRover runs in the background, automating what works, where it works, when it works. No setup. No management. Just results.
          </p>
        </div>

        {/* System 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>
              <span className="font-playfair" style={{ color: "#E8582D" }}>System 1:</span>{" "}
              Auto Poster (Viral 100K+ Posts)
            </h3>
            <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.6, marginBottom: "24px" }}>
              We own thousands of Reddit accounts and test hundreds of viral templates. We know what gets upvotes, and we replicate it at scale.
            </p>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "10px 22px", borderRadius: "999px", background: "#E8582D",
              color: "#FFF", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer"
            }}>
              <Sparkles size={14} /> Get viral posts
            </button>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #FFF0E6, #F5E6D8)",
            borderRadius: "16px", padding: "24px", minHeight: "280px", position: "relative"
          }}>
            {/* Abstract Reddit posts */}
            {[0, 1, 2].map(j => (
              <div key={j} style={{
                background: "#FFF", borderRadius: "10px", padding: "12px", marginBottom: "10px",
                display: "flex", gap: "10px", alignItems: "flex-start",
                transform: `translateX(${j * 10}px)`
              }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <span style={{ color: "#E8582D", fontSize: "14px", fontWeight: 700 }}>↑</span>
                  <span style={{ fontSize: "11px", color: "#999" }}>{[3, 45, 87][j]}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: "6px", width: "90%", background: "#F0E8E0", borderRadius: "3px", marginBottom: "5px" }} />
                  <div style={{ height: "6px", width: "60%", background: "#F5EDE5", borderRadius: "3px" }} />
                </div>
              </div>
            ))}
            <div style={{ position: "absolute", top: "12px", right: "12px", color: "#E8582D", fontSize: "20px" }}>↑</div>
            <div style={{ position: "absolute", bottom: "20px", right: "20px", color: "#E8582D", fontSize: "16px", opacity: 0.5 }}>↑</div>
          </div>
        </div>

        {/* System 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>
              <span className="font-playfair" style={{ color: "#E8582D" }}>System 2:</span>{" "}
              Thread Hunter
            </h3>
            <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.6, marginBottom: "24px" }}>
              Our system listens for when your competitors are mentioned and auto-inserts comments recommending your product instead. Like magic.
            </p>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "10px 22px", borderRadius: "999px", background: "#E8582D",
              color: "#FFF", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer"
            }}>
              <Sparkles size={14} /> Get Thread Insights
            </button>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #FFF0E6, #F5E6D8)",
            borderRadius: "16px", padding: "24px", minHeight: "300px", position: "relative"
          }}>
            {/* Comment thread with detected keyword */}
            <div style={{ background: "#FFF", borderRadius: "10px", padding: "14px", marginBottom: "12px", position: "relative" }}>
              <div style={{ position: "absolute", top: "-8px", right: "12px", background: "#E8582D", color: "#FFF", fontSize: "10px", padding: "2px 8px", borderRadius: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#FFF" }} /> Detected Keyword
              </div>
              <div style={{ height: "6px", width: "75%", background: "#E8D5C4", borderRadius: "3px", marginBottom: "5px" }} />
              <div style={{ height: "6px", width: "50%", background: "#F0E8E0", borderRadius: "3px" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "8px" }}>
                <span style={{ color: "#E8582D", fontSize: "12px" }}>↑</span>
                <span style={{ fontSize: "11px", color: "#999" }}>13</span>
              </div>
            </div>
            {/* R Logo */}
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%", background: "#E8582D",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFF", fontWeight: 700, fontSize: "22px", margin: "8px auto",
              boxShadow: "0 4px 12px rgba(232,88,45,0.3)"
            }}>R</div>
            {/* Second comment */}
            <div style={{ background: "#FFF", borderRadius: "10px", padding: "14px", position: "relative" }}>
              <div style={{ position: "absolute", top: "-8px", right: "12px", background: "#E8582D", color: "#FFF", fontSize: "10px", padding: "2px 8px", borderRadius: "4px" }}>RedRover</div>
              <div style={{ height: "6px", width: "85%", background: "#F0E8E0", borderRadius: "3px", marginBottom: "5px" }} />
              <div style={{ height: "6px", width: "65%", background: "#F5EDE5", borderRadius: "3px" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "8px" }}>
                <span style={{ color: "#E8582D", fontSize: "12px" }}>↑</span>
                <span style={{ fontSize: "11px", color: "#999" }}>87</span>
              </div>
            </div>
            <p className="font-playfair" style={{ color: "#E8582D", fontSize: "14px", textAlign: "center", marginTop: "16px" }}>
              Hijack the conversation, ethically.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ═══════════ 8. WHY REDDIT ═══════════ */}
      <AnimatedSection id="why-reddit" style={{ padding: "40px 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "24px" }}>
          <SectionPill icon="⊕" text="Why Reddit" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.15 }}>
              Reddit is a<br />
              <span className="font-playfair" style={{ color: "#E8582D", position: "relative", display: "inline-block" }}>
                Goldmine.
                <svg style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "8px" }} viewBox="0 0 200 8">
                  <path d="M0,4 Q50,0 100,4 Q150,8 200,4" stroke="#E8582D" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </span>
            </h2>
            <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.6, marginBottom: "32px" }}>
              Right now, Reddit is where real intent meets real influence. It's the internet's largest forum of authentic, user-driven discussions, and it's being wildly underutilized by brands.
            </p>
            <div style={{ display: "flex", gap: "32px", marginBottom: "32px", flexWrap: "wrap" }}>
              {[["1.6B+", "Monthly Visits"], ["430M+", "Active Users"], ["100k+", "Subreddits"]].map(([num, label], i) => (
                <div key={i}>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#1A1A1A" }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "#6B6B6B" }}>{label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.6 }}>
              People don't just browse Reddit, they research, recommend, and decide on Reddit. That means being part of the conversation isn't just brand awareness, it's a direct growth channel.
            </p>
          </div>

          {/* Bar Chart */}
          <div style={{ background: "#FFF", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(180,160,140,0.1)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {chartData.map((d, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "110px", textAlign: "right", fontSize: "13px", fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#E8582D" : "#4A4A4A" }}>
                    {d.name}
                  </div>
                  <div style={{ flex: 1, height: "20px", background: "#F5F0EB", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{
                      width: `${(d.value / maxVal) * 100}%`, height: "100%",
                      background: d.color, borderRadius: "4px",
                      transition: "width 1s ease"
                    }} />
                  </div>
                  <div style={{ width: "50px", fontSize: "12px", color: "#6B6B6B", textAlign: "right" }}>
                    {(d.value / 1000).toFixed(0)}k
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", paddingLeft: "122px", fontSize: "11px", color: "#999" }}>
              <span>0</span><span>25k</span><span>50k</span><span>75k</span><span>150k</span>
            </div>
            <p style={{ fontSize: "10px", color: "#999", marginTop: "12px", lineHeight: 1.4 }}>
              A first place organic ranking in Google gets 10 points, second place gets 8 points, and so on. We're only counting how a domain ranks for terms in the industry you've selected (unless you're on the 'Overall' page). Then, all ranking scores are combined for a domain.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ═══════════ 10. FEATURES ═══════════ */}
      <AnimatedSection style={{ padding: "40px 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionPill icon="☆" text="Features" />
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, marginTop: "16px", color: "#1A1A1A" }}>
            <span className="font-playfair" style={{ color: "#E8582D" }}>RedRover in Action:</span>{" "}
            Smarter Reddit Marketing, All in One Place
          </h2>
          <p style={{ fontSize: "16px", color: "#6B6B6B", maxWidth: "600px", margin: "12px auto 0", lineHeight: 1.6 }}>
            From real-time tracking to stealthy automation, RedRover gives you the tools to post smarter, stay safe, and grow fast.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {/* Feature 1 */}
          <div style={{ background: "#FFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 20px rgba(180,160,140,0.1)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>See What's Working, Instantly</h3>
            <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.5, marginBottom: "20px" }}>
              Track threads, replies, clicks, and conversions as they happen. Promote multiple products and manage several campaigns from a single dashboard.
            </p>
            <div style={{ background: "#FFF8F2", borderRadius: "12px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <div>
                  <div style={{ fontSize: "10px", color: "#999" }}>Traffic</div>
                  <div style={{ fontSize: "22px", fontWeight: 700 }}>1.5K</div>
                </div>
                <div style={{ width: "80px", height: "30px", display: "flex", alignItems: "flex-end", gap: "2px" }}>
                  {[20, 35, 25, 40, 50, 38, 55].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: "#E8582D", borderRadius: "2px", opacity: 0.4 + i * 0.08 }} />
                  ))}
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#6B6B6B" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}><span style={{ fontWeight: 600 }}>320</span> Clicks</div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontWeight: 600 }}>68</span> Conversions</div>
              </div>
              <div style={{ marginTop: "10px", borderTop: "1px solid #F0E8E0", paddingTop: "10px" }}>
                {["How do I increase...", "What are underra...", "Looking for a bett..."].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", color: "#6B6B6B", padding: "3px 0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8582D" }} />
                      {t}
                    </span>
                    <span style={{ display: "flex", gap: "8px", fontSize: "10px", color: "#999" }}>
                      ↑{[45, 28, 15][i]} 💬{[12, 9, 15][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ background: "#FFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 20px rgba(180,160,140,0.1)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Avoid Suspensions & Shadowbans</h3>
            <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.5, marginBottom: "20px" }}>
              Built-in safety logic mimics human behavior, avoids overposting, and rotates accounts to keep you under the radar, and in the game.
            </p>
            <div style={{ background: "#FFF8F2", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontSize: "11px", color: "#999", marginBottom: "10px" }}>RedRover Safety System</div>
              {["Behavior Check", "Cooldown Check"].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "8px 0", borderBottom: i === 0 ? "1px solid #F0E8E0" : "none"
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
                    <Search size={12} color="#999" /> {item}
                  </span>
                  <div style={{ width: "20px", height: "20px", borderRadius: "4px", background: "#E8582D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#FFF", fontSize: "10px" }}>■</span>
                  </div>
                </div>
              ))}
              <div style={{
                marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 10px", background: "#FFF", borderRadius: "8px", border: "1px solid #F0E8E0"
              }}>
                <span style={{ fontSize: "12px", color: "#6B6B6B", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Shield size={12} /> Post via Account <span style={{ color: "#999" }}>#017</span>
                </span>
                <span style={{ background: "#22C55E", color: "#FFF", fontSize: "10px", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>Pass</span>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ background: "#FFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 20px rgba(180,160,140,0.1)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Post at the Perfect Time</h3>
            <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.5, marginBottom: "20px" }}>
              RedRover detects peak activity in each subreddit and schedules replies for max visibility. No more posting into the void.
            </p>
            <div style={{ background: "#FFF8F2", borderRadius: "12px", padding: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "50px repeat(4, 1fr)", gap: "4px" }}>
                <div />
                {days.map(d => (
                  <div key={d} style={{ textAlign: "center", fontSize: "11px", color: "#999", fontWeight: 500, paddingBottom: "6px" }}>{d}</div>
                ))}
                {times.map((t, row) => (
                  <>
                    <div key={`t-${row}`} style={{ fontSize: "11px", color: "#999", display: "flex", alignItems: "center" }}>{t}</div>
                    {heatmapData[row].map((val, col) => (
                      <div key={`c-${row}-${col}`} style={{
                        height: "28px", borderRadius: "4px",
                        background: val ? "#E8582D" : "#F0E8E0",
                        opacity: val ? (0.6 + Math.random() * 0.4) : 1
                      }} />
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div style={{ background: "#FFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 20px rgba(180,160,140,0.1)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Control the Voice & Rules</h3>
            <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.5, marginBottom: "20px" }}>
              Define tone, keywords to avoid, trigger words to prioritize, and even upload example replies. RedRover stays 100% on-brand.
            </p>
            <div style={{ background: "#FFF8F2", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, marginBottom: "10px" }}>Voice & Messaging Settings</div>
              <div style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>Tone</div>
                <div style={{ padding: "6px 10px", background: "#FFF", borderRadius: "6px", border: "1px solid #F0E8E0", fontSize: "12px", color: "#BBB" }}>ie casual, professional etc</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>Keywords to Avoid</div>
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                    {["spam", "cheap"].map(k => (
                      <span key={k} style={{ background: "#E8582D", color: "#FFF", fontSize: "10px", padding: "2px 8px", borderRadius: "999px" }}>{k}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#999", marginBottom: "4px" }}>Trigger Words</div>
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                    {["growth", "founder"].map(k => (
                      <span key={k} style={{ background: "#E8582D", color: "#FFF", fontSize: "10px", padding: "2px 8px", borderRadius: "999px" }}>{k}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "11px", color: "#6B6B6B" }}>Example Replies Upload</span>
                <span style={{ background: "#22C55E", color: "#FFF", fontSize: "10px", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>✓ Synced!</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ═══════════ 12. PRICING ═══════════ */}
      <AnimatedSection id="pricing" style={{ padding: "40px 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionPill icon="◎" text="Pricing" />
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, marginTop: "16px", color: "#1A1A1A" }}>
            Get <span className="font-playfair" style={{ color: "#E8582D", position: "relative" }}>
              <span style={{ position: "absolute", inset: "-2px -6px", borderRadius: "6px", background: "rgba(232,88,45,0.08)" }} />
              <span style={{ position: "relative" }}>More Customers</span>
            </span> with Reddit.
          </h2>
          <p style={{ fontSize: "16px", color: "#6B6B6B", maxWidth: "560px", margin: "12px auto 0", lineHeight: 1.6 }}>
            Ads can cost you thousands of dollars. Discover hidden opportunities on Reddit and drive organic growth for the fraction of the price.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {pricingCards.map((card, i) => (
            <div key={i} style={{
              background: "#FFF", borderRadius: "16px", padding: "32px",
              boxShadow: "0 4px 20px rgba(180,160,140,0.1)", display: "flex", flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(180,160,140,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(180,160,140,0.1)"; }}
            >
              <div style={{ marginBottom: "12px" }}>{card.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: card.titleColor, marginBottom: "8px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.5, marginBottom: "20px" }}>{card.desc}</p>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", marginBottom: "12px" }}>What's Included:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", flex: 1 }}>
                {card.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#4A4A4A" }}>
                    <span style={{ color: "#E8582D" }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
              <button style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                width: "100%", padding: "12px", borderRadius: "999px",
                background: card.btnBg, color: card.btnText,
                fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer"
              }}>
                <Calendar size={14} /> Schedule a strategy session
              </button>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ═══════════ 14. FAQ ═══════════ */}
      <AnimatedSection style={{ padding: "40px 24px 80px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <SectionPill icon="⊕" text="FAQ's" />
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, marginTop: "16px" }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: "15px", color: "#6B6B6B", marginTop: "8px" }}>
            Have more questions? You can email us at{" "}
            <a href="mailto:admin@tryredrover.com" style={{ color: "#E8582D", textDecoration: "none" }}>admin@tryredrover.com</a>.
            We are here to assist you.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: "#FFF", borderRadius: "12px", border: "1px solid #F0E8E0",
              overflow: "hidden", transition: "box-shadow 0.3s",
              boxShadow: openFaq === i ? "0 4px 16px rgba(180,160,140,0.12)" : "none"
            }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "18px 20px", background: "none", border: "none", cursor: "pointer",
                fontSize: "15px", fontWeight: 600, color: "#1A1A1A", textAlign: "left"
              }}>
                {faq.q}
                <span style={{
                  width: "28px", height: "28px", borderRadius: "50%", background: openFaq === i ? "#E8582D" : "#FFF8F2",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  transition: "background 0.3s", border: openFaq === i ? "none" : "1px solid #EDE5DC"
                }}>
                  {openFaq === i
                    ? <Minus size={14} color="#FFF" />
                    : <Plus size={14} color="#E8582D" />
                  }
                </span>
              </button>
              <div className={`faq-answer ${openFaq === i ? "open" : ""}`}
                style={{ padding: openFaq === i ? "0 20px 18px" : "0 20px" }}>
                <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ═══════════ 15. BOTTOM CTA ═══════════ */}
      <AnimatedSection style={{ padding: "20px 24px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #E8652D 0%, #D4502A 40%, #C74530 70%, #B83A2A 100%)",
          borderRadius: "24px", padding: "60px 32px", textAlign: "center",
          position: "relative", overflow: "hidden"
        }}>
          {/* Decorative waves */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: "-20px", left: "-10%", right: "-10%", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
            <div style={{ position: "absolute", top: "-40px", left: "20%", right: "20%", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.02)" }} />
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%", background: "#E8582D",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFF", fontWeight: 700, fontSize: "22px", margin: "0 auto 20px",
              border: "2px solid rgba(255,255,255,0.3)"
            }}>R</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#FFF", fontWeight: 700, marginBottom: "16px" }}>
              Plug in RedRover. <span className="font-playfair">Wake up to traction.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", maxWidth: "480px", margin: "0 auto 28px", lineHeight: 1.6 }}>
              Start turning Reddit into your #1 growth channel, without cold outreach, paid ads, or writing a single post yourself.
            </p>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "12px 28px", borderRadius: "999px", background: "#FFF",
              color: "#1A1A1A", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer"
            }}>
              <Sparkles size={16} color="#E8582D" />
              <strong>Get Customers from Reddit</strong> <span style={{ color: "#999" }}>— It's free</span>
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════ 16. FOOTER ═══════════ */}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 0" }}>
        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "24px 0", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%", background: "#E8582D",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFF", fontWeight: 700, fontSize: "14px"
            }}>R</div>
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>RedRover</span>
              <div style={{ fontSize: "7px", color: "#999" }}>by CLOVER</div>
            </div>
          </div>
          <span style={{ fontSize: "14px", color: "#6B6B6B" }}>Turn Reddit Traffic Into Customers</span>
          <span style={{ fontSize: "13px", color: "#6B6B6B", fontStyle: "italic" }}>
            "RedRover helped us get 47 qualified leads in our first 30 days."
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#EDE5DC", position: "relative", margin: "8px 0 24px" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", gap: "6px", background: "#FFF8F2", padding: "0 12px" }}>
            <span style={{ color: "#E8582D", fontSize: "6px" }}>◆</span>
            <span style={{ color: "#E8582D", fontSize: "10px" }}>✦</span>
            <span style={{ color: "#E8582D", fontSize: "6px" }}>◆</span>
          </div>
        </div>

        {/* Middle footer */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", paddingBottom: "32px" }}>
          <div>
            <a href="mailto:admin@tryredrover.com" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#1A1A1A", textDecoration: "none", marginBottom: "12px" }}>
              <Mail size={14} /> admin@tryredrover.com <ArrowRight size={12} />
            </a>
            <div style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Explore AI Summary</div>
            <div style={{ display: "flex", gap: "6px" }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{
                  width: "28px", height: "28px", borderRadius: "50%", background: "#2A2A2A",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ color: "#FFF", fontSize: "10px" }}>✦</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "10px" }}>Product</div>
            {["Pricing", "Features", "Book a Demo"].map(l => (
              <div key={l} style={{ fontSize: "13px", color: "#6B6B6B", marginBottom: "6px", cursor: "pointer" }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "10px" }}>Resources</div>
            <div style={{ fontSize: "13px", color: "#6B6B6B", marginBottom: "6px", cursor: "pointer" }}>Blog</div>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "10px" }}>Social</div>
            {["Twitter (X)", "LinkedIn", "YouTube"].map(l => (
              <div key={l} style={{ fontSize: "13px", color: "#6B6B6B", marginBottom: "6px", cursor: "pointer" }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "10px" }}>Support</div>
            {["Terms & Conditions", "Privacy Policy"].map(l => (
              <div key={l} style={{ fontSize: "13px", color: "#6B6B6B", marginBottom: "6px", cursor: "pointer" }}>{l}</div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          background: "#1A1A1A", borderRadius: "12px 12px 0 0", padding: "16px 24px",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
          gap: "12px"
        }}>
          <span style={{ fontSize: "13px", color: "#FFF", display: "flex", alignItems: "center", gap: "4px" }}>
            <Sparkles size={12} color="#E8582D" /> © 2026 TryClover Inc. All rights reserved. Agent is part of{" "}
            <a href="#" style={{ color: "#E8582D", textDecoration: "none", fontWeight: 600 }}>Clover Labs</a>
          </span>
          <div style={{ display: "flex", gap: "12px" }}>
            {["𝕏", "in", "▶"].map((icon, i) => (
              <span key={i} style={{ color: "#FFF", fontSize: "14px", cursor: "pointer", opacity: 0.7 }}>{icon}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* ═══════════ 17. FLOATING WIDGET ═══════════ */}
      {showWidget && (
        <div style={{
          position: "fixed", bottom: "20px", right: "20px", zIndex: 1100,
          width: "200px", background: "#FFF", borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)", padding: "14px",
          animation: "fadeIn 0.3s ease"
        }}>
          <button onClick={() => setShowWidget(false)} style={{
            position: "absolute", top: "6px", right: "8px", background: "none",
            border: "none", cursor: "pointer", fontSize: "14px", color: "#999"
          }}>×</button>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "6px" }}>
            <div style={{
              width: "20px", height: "20px", borderRadius: "50%", background: "#22C55E",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Check size={11} color="#FFF" />
            </div>
          </div>
          <div style={{ fontSize: "12px", fontWeight: 700, lineHeight: 1.3 }}>
            The RedRover<br />
            <span style={{ color: "#E8582D" }}>Viral Effect</span>
          </div>
          <p style={{ fontSize: "10px", color: "#6B6B6B", lineHeight: 1.4, marginTop: "4px" }}>
            Get millions of views on Reddit per month on autopilot at scale
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (min-width: 768px) { .hidden { display: none !important; } .md\\:flex { display: flex !important; } .md\\:hidden { display: none !important; } }
        @media (max-width: 767px) { .md\\:flex { display: none !important; } .md\\:hidden { display: block !important; } }
      `}</style>
    </div>
  );
}
