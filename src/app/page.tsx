"use client";

import { useState, useEffect } from "react";

const MATRIX = {
  Starter:    { INR: 1499,  USD: 18,  EUR: 16  },
  Pro:        { INR: 3999,  USD: 49,  EUR: 45  },
  Enterprise: { INR: 9999,  USD: 120, EUR: 110 },
};

const SYM = { INR: "₹", USD: "$", EUR: "€" };
const ANNUAL_DISC = 0.20;

const PLANS = [
  {
    name: "Starter",
    tagline: "For small teams getting started",
    features: ["Up to 5 workflows", "2,000 runs/month", "10 integrations", "Email support", "99.5% SLA"],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Pro",
    tagline: "For growing teams that need power",
    features: ["Unlimited workflows", "50,000 runs/month", "All integrations", "Priority support", "99.9% SLA", "AI Decision Engine", "Advanced analytics"],
    cta: "Start free trial",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    tagline: "For orgs with custom requirements",
    features: ["Unlimited everything", "Custom run limits", "Dedicated infra", "24/7 CSM", "99.99% SLA", "SSO & SAML", "Custom contracts"],
    cta: "Contact sales",
    featured: false,
  },
];

const FEATURES = [
  { icon: "⚡", title: "Workflow Automation", body: "Build multi-step automations visually. Trigger on any event, connect any tool, branch on any condition — no code required." },
  { icon: "🧠", title: "AI Decision Engine", body: "Routes tasks, scores leads, and flags anomalies using models you control." },
  { icon: "📊", title: "Analytics Dashboard", body: "Real-time metrics on every workflow run. Spot bottlenecks before they become outages." },
  { icon: "🔗", title: "200+ Integrations", body: "Slack, Salesforce, HubSpot, Stripe, and every API that matters — plug in, not code in." },
  { icon: "🔐", title: "Enterprise Security", body: "SOC 2 Type II certified. End-to-end encryption, granular permissions, full audit logs, and SSO." },
  { icon: "📡", title: "Real-Time Monitoring", body: "Sub-second alerts on failures. Never let a broken workflow go unnoticed." },
];

const FAQ = [
  { q: "How does the 14-day free trial work?", a: "Sign up, connect your tools, and build workflows immediately. No credit card required. At the end of 14 days, choose a plan or your data remains accessible for 30 more days in read-only mode." },
  { q: "Can I change plans after I sign up?", a: "Yes — upgrade or downgrade at any time. We prorate the difference immediately. Downgrades take effect at the next billing cycle." },
  { q: "What counts as a \"workflow run\"?", a: "Each time a workflow is triggered and executes end-to-end, it counts as one run. Failed or skipped runs due to conditions not being met do not count against your limit." },
  { q: "Is my data secure on Fluxora?", a: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Fluxora is SOC 2 Type II certified and GDPR compliant. You own your data — we process it, never sell it." },
  { q: "Do you support on-premise deployment?", a: "Enterprise plans can include a private cloud or VPC deployment option. Contact our sales team to discuss your infrastructure requirements." },
  { q: "What integrations are available on day one?", a: "Over 200 pre-built connectors including Slack, Salesforce, HubSpot, Stripe, Jira, GitHub, Notion, Google Workspace, and more. Custom REST and webhook connections are available on all plans." },
];

export default function HomePage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR">("INR");
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    // ── Reveal on Scroll ──
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el, i) => {
      if (i < 5) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.add("in");
          });
        });
      } else {
        revealObs.observe(el);
      }
    });

    // ── Bento Cards Hover Coordinates ──
    const cards = document.querySelectorAll(".bento-card");
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
    cards.forEach(card => {
      (card as HTMLElement).style.setProperty("--mouse-x", "0px");
      (card as HTMLElement).style.setProperty("--mouse-y", "0px");
      card.addEventListener("mousemove", handleMouseMove as any);
    });

    // ── Stats WAAPI Count-up Observer ──
    const statsSection = document.querySelector(".dash-frame");
    let animated = false;

    const countUp = (el: HTMLElement, startVal: number, endVal: number, suffix = "", decimals = 0) => {
      if (!el) return;
      const dummy = document.createElement("div");
      const anim = dummy.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards"
      });

      const update = () => {
        const progress = parseFloat(window.getComputedStyle(dummy).opacity);
        const currentVal = startVal + (endVal - startVal) * progress;
        el.textContent = currentVal.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }) + suffix;

        if (anim.playState !== "finished") {
          requestAnimationFrame(update);
        } else {
          el.textContent = endVal.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          }) + suffix;
        }
      };
      requestAnimationFrame(update);
    };

    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          countUp(document.getElementById("stat-runs") as HTMLElement, 0, 2847);
          countUp(document.getElementById("stat-success") as HTMLElement, 0, 99.7, "%", 1);
          countUp(document.getElementById("stat-latency") as HTMLElement, 0, 48, "ms");
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      revealObs.disconnect();
      cards.forEach(card => {
        card.removeEventListener("mousemove", handleMouseMove as any);
      });
      if (statsSection) {
        statsObserver.unobserve(statsSection);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("faq-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 22;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 1.2,
        color: Math.random() > 0.55 ? "#FFC801" : "#114C5A",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Faint Grid Lines
      ctx.strokeStyle = "rgba(17, 76, 90, 0.05)";
      ctx.lineWidth = 0.8;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        glow.addColorStop(0, p.color === "#FFC801" ? "rgba(255, 200, 1, 0.2)" : "rgba(17, 76, 90, 0.15)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.14;
            ctx.strokeStyle = `rgba(17, 76, 90, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const fmt = (n: number) => {
    const s = SYM[currency];
    return currency === "INR"
      ? s + n.toLocaleString("en-IN")
      : s + n.toLocaleString("en-US");
  };

  const compute = (name: string) => {
    const base = MATRIX[name as keyof typeof MATRIX][currency];
    if (isAnnual) {
      const mo = Math.round(base * (1 - ANNUAL_DISC));
      return { mo, annual: mo * 12 };
    }
    return { mo: base, annual: null };
  };

  return (
    <div className="bg-hero-mesh min-h-screen">
      {/* ═══════════════════════════ NAVBAR ═══════════════════════════ */}
      <header className="nav-sticky" role="banner">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="Fluxora AI home" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
            <div style={{ width: "30px", height: "30px", background: "var(--gradient-midnight)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }} className="justify-center" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L13 8L8 14L3 8Z" fill="#FFC801" opacity="0.9" />
                <path d="M8 5.5L11 8L8 10.5L5 8Z" fill="#FFC801" />
              </svg>
            </div>
            <span className="font-mono" style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.04em", color: "var(--color-text-primary)" }}>
              Fluxora <span className="gradient-text">AI</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#testimonials" className="nav-link">Customers</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="nav-link px-4 py-2">Sign in</a>
            <a href="#" className="btn-primary" style={{ padding: "9px 20px", fontSize: "0.85rem" }}>Start free trial</a>
          </div>

          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="md:hidden p-2 rounded-lg"
            style={{ background: "rgba(17,76,90,0.08)", color: "var(--color-text-primary)", border: "none", cursor: "pointer" }}
            aria-label="Open navigation menu"
            aria-expanded={isMobileDrawerOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav
        className={`mobile-drawer ${isMobileDrawerOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileDrawerOpen}
      >
        <div className="flex flex-col h-full px-6 py-6">
          <div className="flex items-center justify-between mb-10">
            <span className="font-mono" style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.04em", color: "var(--color-text-primary)" }}>
              Fluxora <span className="gradient-text">AI</span>
            </span>
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="p-2 rounded-lg"
              style={{ background: "rgba(17,76,90,0.08)", color: "var(--color-text-primary)", border: "none", cursor: "pointer" }}
              aria-label="Close navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#features" onClick={() => setIsMobileDrawerOpen(false)} className="mob-link text-lg py-3 px-4 rounded-xl" style={{ color: "var(--color-text-primary)", textDecoration: "none", background: "rgba(17,76,90,0.05)" }}>Features</a>
            <a href="#pricing" onClick={() => setIsMobileDrawerOpen(false)} className="mob-link text-lg py-3 px-4 rounded-xl" style={{ color: "var(--color-text-primary)", textDecoration: "none", background: "rgba(17,76,90,0.05)" }}>Pricing</a>
            <a href="#testimonials" onClick={() => setIsMobileDrawerOpen(false)} className="mob-link text-lg py-3 px-4 rounded-xl" style={{ color: "var(--color-text-primary)", textDecoration: "none", background: "rgba(17,76,90,0.05)" }}>Customers</a>
            <a href="#faq" onClick={() => setIsMobileDrawerOpen(false)} className="mob-link text-lg py-3 px-4 rounded-xl" style={{ color: "var(--color-text-primary)", textDecoration: "none", background: "rgba(17,76,90,0.05)" }}>FAQ</a>
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a href="#" className="btn-secondary text-center" style={{ textDecoration: "none" }}>Sign in</a>
            <a href="#" className="btn-primary text-center" style={{ textDecoration: "none" }}>Start free trial</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ═══════════════════════════ HERO ═══════════════════════════ */}
        <section style={{ padding: "130px 0 100px" }} aria-labelledby="hero-heading" className="relative overflow-hidden">
          {/* Decorative glow */}
          <div style={{ position: "absolute", top: "-120px", left: "50%", transform: "translateX(-50%)", width: "900px", height: "700px", background: "radial-gradient(ellipse,rgba(255,200,1,0.09) 0%,transparent 70%)", pointerEvents: "none" }} aria-hidden="true"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative">
            {/* Badge */}
            <div className="reveal" style={{ transitionDelay: "0ms", marginBottom: "28px" }}>
              <div className="chip chip-accent" style={{ display: "inline-flex" }}>
                <span style={{ width: "6px", height: "6px", background: "var(--color-accent-primary)", borderRadius: "50%" }} className="animate-pulse2" aria-hidden="true"></span>
                Announcing Fluxora AI v2.0 — Agentic Workflows
              </div>
            </div>

            <h1 id="hero-heading" className="reveal" style={{ transitionDelay: "70ms", fontSize: "clamp(2.6rem, 7vw, 5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--color-text-primary)", marginBottom: "22px" }}>
              Automation that<br /><span className="gradient-text">thinks ahead</span>
            </h1>

            <p className="reveal" style={{ transitionDelay: "140ms", fontSize: "1.15rem", color: "var(--color-text-secondary)", maxWidth: "540px", margin: "0 auto 40px", lineHeight: "1.7" }}>
              Fluxora AI connects your tools, learns your workflows, and makes decisions before you have to ask — from first trigger to final action in milliseconds.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-3 justify-center" style={{ transitionDelay: "210ms", marginBottom: "64px" }}>
              <a href="#" className="btn-primary gap-2">
                Start free — no card needed
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#features" className="btn-secondary gap-2">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r={6.5} stroke="currentColor" strokeWidth="1.3" />
                  <path d="M6.5 5.5L10 8l-3.5 2.5V5.5Z" fill="currentColor" />
                </svg>
                See how it works
              </a>
            </div>

            {/* Dashboard mockup */}
            <div className="reveal" style={{ transitionDelay: "290ms" }}>
              <div className="animate-float" style={{ willChange: "transform" }}>
                <div className="dash-frame">
                  <div className="dash-bar">
                    <div className="dot" style={{ background: "#ff5f57" }}></div>
                    <div className="dot" style={{ background: "#ffbd2e" }}></div>
                    <div className="dot" style={{ background: "#28ca41" }}></div>
                    <div style={{ flex: 1, margin: "0 12px", height: "22px", background: "rgba(255,255,255,0.06)", borderRadius: "6px", display: "flex", alignItems: "center", padding: "0 10px" }}>
                      <span className="font-mono" style={{ fontSize: "0.7rem", color: "rgba(241,246,244,0.4)" }}>app.fluxora.ai/dashboard</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "190px 1fr", gap: "16px", minHeight: "230px" }} className="text-left">
                    {/* Sidebar */}
                    <div style={{ borderRight: "1px solid rgba(255,200,1,0.1)", paddingRight: "14px" }}>
                      <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px", fontFamily: "var(--font-mono)" }}>Workflows</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ padding: "7px 10px", background: "rgba(255,200,1,0.12)", borderRadius: "6px", fontSize: "0.73rem", color: "var(--color-accent-primary)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>→ Lead Qualification</div>
                        <div style={{ padding: "7px 10px", borderRadius: "6px", fontSize: "0.73rem", color: "rgba(241,246,244,0.45)", fontFamily: "var(--font-mono)" }}>→ Invoice Processing</div>
                        <div style={{ padding: "7px 10px", borderRadius: "6px", fontSize: "0.73rem", color: "rgba(241,246,244,0.45)", fontFamily: "var(--font-mono)" }}>→ Support Triage</div>
                        <div style={{ padding: "7px 10px", borderRadius: "6px", fontSize: "0.73rem", color: "rgba(241,246,244,0.45)", fontFamily: "var(--font-mono)" }}>→ Data Sync</div>
                      </div>
                    </div>
                    {/* Main */}
                    <div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "14px" }}>
                        <div className="stat-card">
                          <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.4)", marginBottom: "4px" }}>Runs today</p>
                          <p className="font-mono" id="stat-runs" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-inverse)" }}>0</p>
                          <p style={{ fontSize: "0.63rem", color: "#34d399" }}>↑ 12.4%</p>
                        </div>
                        <div className="stat-card">
                          <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.4)", marginBottom: "4px" }}>Success rate</p>
                          <p className="font-mono" id="stat-success" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-inverse)" }}>0.0%</p>
                          <p style={{ fontSize: "0.63rem", color: "#34d399" }}>↑ 0.3%</p>
                        </div>
                        <div className="stat-card">
                          <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.4)", marginBottom: "4px" }}>Avg latency</p>
                          <p className="font-mono" id="stat-latency" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-inverse)" }}>0ms</p>
                          <p style={{ fontSize: "0.63rem", color: "#34d399" }}>↓ 6ms</p>
                        </div>
                      </div>
                      {/* Agent Process Flow Canvas */}
                      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "13px", position: "relative" }}>
                        <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.35)", marginBottom: "10px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Agent Telemetry Logic Flow</p>
                        <div style={{ height: "60px", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
                          {/* Background grid lines of canvas */}
                          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 400 60" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity={0.8}/>
                                <stop offset="100%" stopColor="var(--color-accent-secondary)" stopOpacity={0.8}/>
                              </linearGradient>
                            </defs>
                            {/* Interconnection Flow Lines */}
                            <path d="M 60 30 Q 130 15 200 30 T 340 30" fill="none" stroke="rgba(217,232,226,0.15)" strokeWidth={2} />
                            <path d="M 60 30 Q 130 15 200 30 T 340 30" fill="none" stroke="url(#flow-grad)" strokeWidth={2} className="flow-line" style={{ strokeDasharray: "6,6", animation: "telemetryFlow 1.5s linear infinite", willChange: "stroke-dashoffset" }} />
                          </svg>
                          
                          {/* Node 1: Ingest */}
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(23,43,54,0.8)", border: "1px solid rgba(255,200,1,0.25)", borderRadius: "6px", padding: "4px 8px", zIndex: 2, position: "relative" }}>
                            <span style={{ fontSize: "0.7rem", animation: "pulse2 1.8s ease-in-out infinite" }}>📥</span>
                            <span className="font-mono" style={{ fontSize: "0.62rem", color: "var(--color-text-inverse)" }}>Ingest</span>
                          </div>
                          
                          {/* Node 2: Logic Engine */}
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(23,43,54,0.8)", border: "1px solid rgba(255,200,1,0.35)", borderRadius: "6px", padding: "4px 8px", zIndex: 2, position: "relative" }}>
                            <span style={{ fontSize: "0.7rem", animation: "pulse2 1.8s ease-in-out infinite", animationDelay: "0.6s" }}>🧠</span>
                            <span className="font-mono" style={{ fontSize: "0.62rem", color: "var(--color-accent-primary)", fontWeight: 600 }}>AI Engine</span>
                          </div>

                          {/* Node 3: Target Action */}
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(23,43,54,0.8)", border: "1px solid rgba(255,200,1,0.25)", borderRadius: "6px", padding: "4px 8px", zIndex: 2, position: "relative" }}>
                            <span style={{ fontSize: "0.7rem", animation: "pulse2 1.8s ease-in-out infinite", animationDelay: "1.2s" }}>⚡</span>
                            <span className="font-mono" style={{ fontSize: "0.62rem", color: "var(--color-text-inverse)" }}>Action</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating status cards */}
              <div className="float-card hidden md:flex items-center gap-3" style={{ position: "absolute", bottom: "16px", left: "-24px", willChange: "transform" }}>
                <div style={{ width: "30px", height: "30px", background: "rgba(52,211,153,0.15)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l3 3 7-7" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-mono" style={{ fontSize: "0.68rem", color: "#34d399", fontWeight: 600 }}>Workflow completed</p>
                  <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.45)" }}>Lead qualified → CRM updated</p>
                </div>
              </div>

              <div className="float-card hidden md:flex items-center gap-3" style={{ position: "absolute", top: "16px", right: "-10px", willChange: "transform" }}>
                <div style={{ width: "30px", height: "30px", background: "rgba(255,200,1,0.15)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2v5l3 3" stroke="#FFC801" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="8" cy="8" r="6" stroke="#FFC801" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-mono" style={{ fontSize: "0.68rem", color: "var(--color-accent-primary)", fontWeight: 600 }}>AI Decision made</p>
                  <p style={{ fontSize: "0.62rem", color: "rgba(241,246,244,0.45)" }}>Priority: High — routed instantly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ TRUSTED BY ═══════════════════════════ */}
        <section aria-label="Trusted by companies" style={{ padding: "52px 0", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "rgba(217,232,226,0.3)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center" style={{ fontSize: "0.72rem", color: "rgba(17,76,90,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "28px", fontFamily: "var(--font-mono)" }}>Trusted by 3,400+ teams at forward-thinking companies</p>
            <div className="marquee-wrapper" style={{ maskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)" }}>
              <div className="marquee-content">
                <span className="marquee-item">Meridian</span>
                <span className="marquee-item">Orbis</span>
                <span className="marquee-item">NovaTech</span>
                <span className="marquee-item">Pulse Labs</span>
                <span className="marquee-item">Apex Systems</span>
                <span className="marquee-item">Synergy Co</span>
                <span className="marquee-item">Vantara</span>
                <span className="marquee-item">Lumina AI</span>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <span className="marquee-item">Meridian</span>
                <span className="marquee-item">Orbis</span>
                <span className="marquee-item">NovaTech</span>
                <span className="marquee-item">Pulse Labs</span>
                <span className="marquee-item">Apex Systems</span>
                <span className="marquee-item">Synergy Co</span>
                <span className="marquee-item">Vantara</span>
                <span className="marquee-item">Lumina AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ FEATURES ═══════════════════════════ */}
        <section id="features" aria-labelledby="features-heading" style={{ padding: "100px 0 80px" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center reveal" style={{ marginBottom: "56px" }}>
              <div className="chip chip-accent" style={{ marginBottom: "16px" }}>Platform capabilities</div>
              <h2 id="features-heading" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--color-text-primary)", marginBottom: "14px" }}>Built for the way<br />teams actually work</h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "460px", margin: "0 auto", lineHeight: "1.7" }}>Six core modules that talk to each other — so you don't have to.</p>
            </div>

            {/* Desktop bento */}
            <div className="hidden md:grid grid-cols-3 gap-[14px]" role="list">
              <article
                className={`bento-card col-span-2 ${activeFeature === 0 ? "active" : ""}`}
                onClick={() => setActiveFeature(0)}
                role="listitem"
                tabIndex={0}
                aria-label="Workflow Automation"
              >
                <div style={{ position: "relative", zIndex: 1 }} className="text-left">
                  <div className="fi" style={{ background: "rgba(255,200,1,0.12)", marginBottom: "18px" }}>⚡</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>Workflow Automation</h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.93rem", lineHeight: 1.65 }}>Build multi-step automations visually. Trigger on any event, connect any tool, branch on any condition — no code required.</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "18px" }}>
                    <span className="chip chip-mint">Visual builder</span>
                    <span className="chip chip-mint">500+ triggers</span>
                    <span className="chip chip-mint">Conditional logic</span>
                  </div>
                </div>
              </article>

              <article
                className={`bento-card col-span-1 ${activeFeature === 1 ? "active" : ""}`}
                onClick={() => setActiveFeature(1)}
                role="listitem"
                tabIndex={0}
                aria-label="AI Decision Engine"
              >
                <div className="text-left">
                  <div className="fi" style={{ background: "rgba(255,153,50,0.12)", marginBottom: "18px" }}>🧠</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>AI Decision Engine</h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>Routes tasks, scores leads, and flags anomalies using models you control.</p>
                </div>
              </article>

              <article
                className={`bento-card col-span-1 ${activeFeature === 2 ? "active" : ""}`}
                onClick={() => setActiveFeature(2)}
                role="listitem"
                tabIndex={0}
                aria-label="Analytics Dashboard"
              >
                <div className="text-left">
                  <div className="fi" style={{ background: "rgba(17,76,90,0.1)", marginBottom: "18px" }}>📊</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>Analytics Dashboard</h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>Real-time metrics on every workflow run. Spot bottlenecks before they become outages.</p>
                </div>
              </article>

              <article
                className={`bento-card col-span-2 ${activeFeature === 3 ? "active" : ""}`}
                onClick={() => setActiveFeature(3)}
                role="listitem"
                tabIndex={0}
                aria-label="200+ Integrations"
              >
                <div className="text-left">
                  <div className="fi" style={{ background: "rgba(17,76,90,0.1)", marginBottom: "18px" }}>🔗</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>200+ Integrations</h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>Slack, Salesforce, HubSpot, Stripe, Postgres, and every API that matters.</p>
                </div>
              </article>

              <article
                className={`bento-card col-span-2 ${activeFeature === 4 ? "active" : ""}`}
                onClick={() => setActiveFeature(4)}
                role="listitem"
                tabIndex={0}
                aria-label="Enterprise Security"
              >
                <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", position: "relative", zIndex: 1 }} className="text-left">
                  <div style={{ flex: 1 }}>
                    <div className="fi" style={{ background: "rgba(255,200,1,0.12)", marginBottom: "18px" }}>🔐</div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>Enterprise Security</h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>SOC 2 Type II certified. End-to-end encryption, granular permissions, full audit logs, and SSO.</p>
                  </div>
                  <div className="hidden md:flex flex-col gap-2" style={{ minWidth: "150px", marginTop: "4px" }}>
                    <div style={{ padding: "8px 12px", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "8px", fontSize: "0.73rem", color: "#059669", fontWeight: 600, fontFamily: "var(--font-mono)" }}>✓ SOC 2 Type II</div>
                    <div style={{ padding: "8px 12px", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "8px", fontSize: "0.73rem", color: "#059669", fontWeight: 600, fontFamily: "var(--font-mono)" }}>✓ GDPR Compliant</div>
                    <div style={{ padding: "8px 12px", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "8px", fontSize: "0.73rem", color: "#059669", fontWeight: 600, fontFamily: "var(--font-mono)" }}>✓ HIPAA Ready</div>
                  </div>
                </div>
              </article>

              <article
                className={`bento-card col-span-1 ${activeFeature === 5 ? "active" : ""}`}
                onClick={() => setActiveFeature(5)}
                role="listitem"
                tabIndex={0}
                aria-label="Real-Time Monitoring"
              >
                <div className="text-left">
                  <div className="fi" style={{ background: "rgba(255,153,50,0.1)", marginBottom: "18px" }}>📡</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px", fontFamily: "var(--font-mono)", letterSpacing: "-0.03em" }}>Real-Time Monitoring</h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>Sub-second alerts on failures. Never let a broken workflow go unnoticed.</p>
                </div>
              </article>
            </div>

            {/* Mobile accordion features */}
            <div className="block md:hidden mobile-features" id="feat-accordion" role="list">
              {FEATURES.map((f, i) => {
                const isOpen = i === activeFeature;
                return (
                  <div key={i} className={`acc-item ${isOpen ? "open" : ""}`} role="listitem">
                    <button
                      className="acc-trigger"
                      onClick={() => setActiveFeature(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`fa-body-${i}`}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "1.15rem" }} aria-hidden="true">{f.icon}</span>
                        <span style={{ fontWeight: 600, color: "var(--color-text-primary)", fontSize: "0.95rem" }}>{f.title}</span>
                      </div>
                      <svg className="acc-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" stroke="var(--color-accent-secondary)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div
                      className={`acc-body ${isOpen ? "open" : ""}`}
                      id={`fa-body-${i}`}
                      role="region"
                      aria-labelledby={`fa-btn-${i}`}
                      style={{ maxHeight: isOpen ? "220px" : "0px" }}
                    >
                      <p style={{ padding: "4px 20px 18px", color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "0.88rem" }}>{f.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ PRICING ═══════════════════════════ */}
        <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: "100px 0 80px", borderTop: "1px solid var(--color-border)", background: "rgba(217,232,226,0.2)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center reveal" style={{ marginBottom: "48px" }}>
              <div className="chip chip-accent" style={{ marginBottom: "16px" }}>Pricing</div>
              <h2 id="pricing-heading" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--color-text-primary)", marginBottom: "14px" }}>Simple, transparent pricing</h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "400px", margin: "0 auto 36px", lineHeight: "1.7" }}>Scale as you grow. No hidden fees, no per-seat surprises.</p>

              {/* Controls */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} role="group" aria-label="Billing period">
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-text-secondary)" }}>Monthly</span>
                  <div
                    onClick={() => setIsAnnual(!isAnnual)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsAnnual(!isAnnual);
                      }
                    }}
                    className={`toggle-track ${isAnnual ? "on" : ""}`}
                    role="switch"
                    aria-checked={isAnnual}
                    aria-label="Toggle annual billing"
                    tabIndex={0}
                  >
                    <div className="toggle-dot"></div>
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-text-primary)" }}>Annual</span>
                  <span className="chip chip-accent" style={{ fontSize: "0.68rem" }}>Save 20%</span>
                </div>

                <div style={{ position: "relative" }}>
                  <select
                    id="cur-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as "INR" | "USD" | "EUR")}
                    aria-label="Select currency"
                    style={{ appearance: "none", background: "rgba(241,246,244,0.9)", border: "1.5px solid var(--color-border)", borderRadius: "10px", padding: "8px 36px 8px 14px", color: "var(--color-text-primary)", fontSize: "0.875rem", fontFamily: "var(--font-sans)", cursor: "pointer", outline: "none", transition: "border-color 0.2s ease" }}
                  >
                    <option value="INR">₹ INR</option>
                    <option value="USD">$ USD</option>
                    <option value="EUR">€ EUR</option>
                  </select>
                  <svg style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 5l4 4 4-4" stroke="var(--color-accent-secondary)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" id="pricing-grid">
              {PLANS.map((p) => {
                const { mo, annual } = compute(p.name);
                const textColor = p.featured ? "var(--color-text-inverse)" : "var(--color-text-primary)";
                const mutedColor = p.featured ? "rgba(217,232,226,0.55)" : "rgba(17,76,90,0.5)";
                const featColor = p.featured ? "rgba(217,232,226,0.65)" : "var(--color-text-secondary)";
                const checkColor = p.featured ? "var(--color-accent-primary)" : "var(--color-accent-secondary)";

                return (
                  <article
                    key={p.name}
                    className={`pricing-card ${p.featured ? "featured" : ""}`}
                    aria-label={`${p.name} plan`}
                  >
                    {p.badge && <div className="chip chip-dark" style={{ marginBottom: "14px" }}>{p.badge}</div>}
                    <h3 className="font-mono text-left" style={{ fontSize: "1.15rem", fontWeight: 700, color: textColor, marginBottom: "5px", letterSpacing: "-0.03em" }}>{p.name}</h3>
                    <p style={{ color: mutedColor, fontSize: "0.83rem", marginBottom: "22px" }} className="text-left">{p.tagline}</p>
                    <div style={{ marginBottom: "22px" }} className="text-left">
                      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                        <span className="font-mono" style={{ fontSize: "2.4rem", fontWeight: 700, color: textColor, lineHeight: 1, letterSpacing: "-0.04em" }}>{fmt(mo)}</span>
                        <span style={{ color: mutedColor, fontSize: "0.83rem", marginBottom: "2px" }}>/mo</span>
                      </div>
                      <p style={{ fontSize: "0.75rem", color: mutedColor, marginTop: "5px" }}>{annual ? "Billed " + fmt(annual) + " annually" : "Billed monthly"}</p>
                    </div>
                    <a href="#" className={p.featured ? "btn-primary" : "btn-secondary"} style={{ display: "block", textAlign: "center", textDecoration: "none", marginBottom: "22px", width: "100%" }}>{p.cta}</a>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }} className="text-left">
                      {p.features.map((f, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: featColor }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                            <path d="M2 7l3 3 7-7" stroke={checkColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
            <p className="text-center" style={{ marginTop: "28px", fontSize: "0.82rem", color: "rgba(17,76,90,0.5)" }}>All plans include a 14-day free trial. No credit card required to start.</p>
          </div>
        </section>

        {/* ═══════════════════════════ TESTIMONIALS ═══════════════════════════ */}
        <section id="testimonials" aria-labelledby="testi-heading" style={{ padding: "100px 0 80px", borderTop: "1px solid var(--color-border)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center reveal" style={{ marginBottom: "52px" }}>
              <div className="chip chip-accent" style={{ marginBottom: "16px" }}>Customer stories</div>
              <h2 id="testi-heading" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--color-text-primary)" }}>Trusted by teams who<br />move fast</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <article className="testi-card reveal" style={{ transitionDelay: "0ms" }} aria-label="Priya Mehta testimonial">
                <div style={{ color: "var(--color-accent-primary)", fontSize: "1.1rem", marginBottom: "14px" }} aria-label="5 out of 5 stars" className="text-left">★★★★★</div>
                <blockquote className="text-left">
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, fontSize: "0.93rem", marginBottom: "20px" }}>&ldquo;Fluxora cut our lead-to-close time by 38%. The AI routing alone pays for itself within the first week. I can&apos;t imagine going back.&rdquo;</p>
                </blockquote>
                <footer style={{ display: "flex", alignItems: "center", gap: "12px" }} className="text-left">
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--gradient-midnight)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.82rem", color: "var(--color-accent-primary)" }} aria-hidden="true">PM</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--color-text-primary)" }}>Priya Mehta</p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(17,76,90,0.55)" }}>Head of Revenue Ops, Orbis</p>
                  </div>
                </footer>
              </article>

              <article className="testi-card reveal" style={{ transitionDelay: "90ms" }} aria-label="James Thornton testimonial">
                <div style={{ color: "var(--color-accent-primary)", fontSize: "1.1rem", marginBottom: "14px" }} aria-label="5 out of 5 stars" className="text-left">★★★★★</div>
                <blockquote className="text-left">
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, fontSize: "0.93rem", marginBottom: "20px" }}>&ldquo;We replaced three point solutions with Fluxora. The team spent their first month building — not configuring. Setup was genuinely that fast.&rdquo;</p>
                </blockquote>
                <footer style={{ display: "flex", alignItems: "center", gap: "12px" }} className="text-left">
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--gradient-midnight)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.82rem", color: "var(--color-accent-secondary)" }} aria-hidden="true">JT</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--color-text-primary)" }}>James Thornton</p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(17,76,90,0.55)" }}>CTO, Pulse Labs</p>
                  </div>
                </footer>
              </article>

              <article className="testi-card reveal" style={{ transitionDelay: "180ms" }} aria-label="Sofia Andrade testimonial">
                <div style={{ color: "var(--color-accent-primary)", fontSize: "1.1rem", marginBottom: "14px" }} aria-label="5 out of 5 stars" className="text-left">★★★★★</div>
                <blockquote className="text-left">
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, fontSize: "0.93rem", marginBottom: "20px" }}>&ldquo;The analytics dashboard gives our ops team visibility they never had. We caught a billing integration bug before it hit a single customer.&rdquo;</p>
                </blockquote>
                <footer style={{ display: "flex", alignItems: "center", gap: "12px" }} className="text-left">
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--gradient-midnight)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.82rem", color: "#34d399" }} aria-hidden="true">SA</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--color-text-primary)" }}>Sofia Andrade</p>
                    <p style={{ fontSize: "0.78rem", color: "rgba(17,76,90,0.55)" }}>Operations Lead, NovaTech</p>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ FAQ ═══════════════════════════ */}
        <section id="faq" aria-labelledby="faq-heading" style={{ padding: "100px 0 80px", borderTop: "1px solid var(--color-border)", background: "rgba(217,232,226,0.2)", position: "relative", overflow: "hidden" }}>
          <canvas id="faq-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0" />
          <div className="max-w-3xl mx-auto px-6 relative z-1">
            <div className="text-center reveal" style={{ marginBottom: "52px" }}>
              <div className="chip chip-accent" style={{ marginBottom: "16px" }}>FAQ</div>
              <h2 id="faq-heading" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--color-text-primary)" }}>Questions we get a lot</h2>
            </div>
            <div id="faq-list" role="list">
              {FAQ.map((item, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div key={i} className={`faq-item ${isOpen ? "open" : ""}`} role="listitem">
                    <button
                      className="faq-btn"
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                    >
                      <span>{item.q}</span>
                      <svg className="faq-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div
                      className={`faq-body ${isOpen ? "open" : ""}`}
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      style={{ maxHeight: isOpen ? "180px" : "0px" }}
                    >
                      <p style={{ padding: "0 0 20px", color: "var(--color-text-secondary)", lineHeight: 1.75, fontSize: "0.92rem" }} className="text-left">{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ CTA ═══════════════════════════ */}
        <section aria-labelledby="cta-heading" style={{ padding: "100px 24px 80px" }}>
          <div className="max-w-4xl mx-auto reveal">
            <div className="cta-wrap" style={{ padding: "72px 40px", textAlign: "center" }}>
              <div className="chip chip-dark" style={{ marginBottom: "22px", display: "inline-flex" }}>Ready to automate</div>
              <h2 id="cta-heading" className="font-mono" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--color-text-inverse)", marginBottom: "18px" }}>Start building in<br /><span className="gradient-text">under 5 minutes</span></h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(217,232,226,0.7)", maxWidth: "420px", margin: "0 auto 36px", lineHeight: 1.7 }}>Connect your first tool, build your first automation, and see results before your next coffee break.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                <a href="#" className="btn-primary gap-2">
                  Start free trial
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="btn-dark">Request a demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════ FOOTER ═══════════════════════════ */}
      <footer role="contentinfo" style={{ borderTop: "1px solid var(--color-border)", padding: "56px 0 30px", background: "rgba(217,232,226,0.3)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10" style={{ marginBottom: "44px" }}>
            <div className="col-span-2 text-left">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <div style={{ width: "26px", height: "26px", background: "var(--gradient-midnight)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L13 8L8 14L3 8Z" fill="#FFC801" opacity="0.9" />
                    <path d="M8 5.5L11 8L8 10.5L5 8Z" fill="#FFC801" />
                  </svg>
                </div>
                <span className="font-mono" style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.04em", color: "var(--color-text-primary)" }}>Fluxora AI</span>
              </div>
              <p style={{ color: "rgba(17,76,90,0.55)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "210px" }}>Intelligence in Motion. Automate workflows, integrate data, act on insights.</p>
              <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
                <a href="#" aria-label="X (Twitter)" style={{ color: "rgba(17,76,90,0.4)", transition: "color 0.2s ease" }} className="hover:text-deep-saffron">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" style={{ color: "rgba(17,76,90,0.4)", transition: "color 0.2s ease" }} className="hover:text-deep-saffron">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" aria-label="GitHub" style={{ color: "rgba(17,76,90,0.4)", transition: "color 0.2s ease" }} className="hover:text-deep-saffron">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0a12 12 0 0 0-3.794 23.39c.6.111.82-.26.82-.578l-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222l-.015 3.293c0 .322.216.694.825.576A12 12 0 0 0 12 0z" />
                  </svg>
                </a>
              </div>
            </div>

            <nav aria-label="Product links" className="text-left">
              <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,76,90,0.4)", marginBottom: "14px", fontFamily: "var(--font-mono)" }}>Product</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Features</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Pricing</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Changelog</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Roadmap</a></li>
              </ul>
            </nav>

            <nav aria-label="Company links" className="text-left">
              <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,76,90,0.4)", marginBottom: "14px", fontFamily: "var(--font-mono)" }}>Company</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>About</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Blog</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Careers</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Contact</a></li>
              </ul>
            </nav>

            <nav aria-label="Resources links" className="text-left">
              <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(17,76,90,0.4)", marginBottom: "14px", fontFamily: "var(--font-mono)" }}>Resources</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Documentation</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>API Reference</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Status</a></li>
                <li><a href="#" className="nav-link" style={{ fontSize: "0.875rem" }}>Privacy</a></li>
              </ul>
            </nav>
          </div>

          <div className="gradient-line" style={{ marginBottom: "22px", marginTop: "30px" }}></div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <p style={{ color: "rgba(17,76,90,0.4)", fontSize: "0.78rem" }}>&copy; 2025 Fluxora AI, Inc. All rights reserved.</p>
            <div style={{ display: "flex", gap: "18px" }}>
              <a href="#" className="nav-link" style={{ fontSize: "0.78rem" }}>Terms</a>
              <a href="#" className="nav-link" style={{ fontSize: "0.78rem" }}>Privacy</a>
              <a href="#" className="nav-link" style={{ fontSize: "0.78rem" }}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
