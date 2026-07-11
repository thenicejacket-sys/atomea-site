/* ══════════ I18N — tous les textes EN ici (FR est dans le HTML) ══════════ */
const I18N_EN = {
  logo_tag:"Consulting & expertise for your business",
  nav_services:"Services", nav_method:"Method", nav_cases:"Case studies", nav_about:"About", nav_cta:"Let's talk",
  hero_eyebrow:"Consulting · Automation · Training",
  hero_title:"Data entry, follow-ups, reporting: hand them to AI. <em>Get your hours back.</em>",
  hero_sub:"Diagnosis, automation, custom-built tools, training: measurable results within weeks — without changing your software, whatever your size.",
  hero_cta1:"Book a free call", hero_cta2:"Explore our services",
  hero_canvas:"fig. 01 — from disorder to structure",
  pr1:"years of experience in process optimization",
  pr2:"of engagements include skills transfer",
  pr3:"first call — free, no strings attached",
  res_eyebrow:"Concrete results",
  res_title:"What companies gain when they automate with us.",
  res1:"saved per file on reviews and controls — 20 to 30 files processed every month",
  res2:"the activity target of a major energy-renovation player — with no headcount increase",
  res3:"a team of AI assistants available around the clock, from diagnosis to proposal writing",
  res_link:"See our case studies →",
  mi_eyebrow:"Our mission",
  mi_text:"Helping companies move from <span class='from'>current</span> to <span class='to'>ideal</span>.",
  mi_sub:"Your business augmented by automation, artificial intelligence and a redesigned organization.",
  mi_lever1:"Strategy", mi_lever2:"Tools", mi_lever3:"Organization", mi_lever4:"Processes", mi_lever5:"People",
  fric_eyebrow:"Sound familiar?",
  fric_title:"Days eaten up by tasks that add nothing.",
  fric_lead:"These frictions cost you money, every single day. They are exactly what we eliminate.",
  fric1_tag:"fric. 01", fric2_tag:"fric. 02", fric3_tag:"fric. 03", fric4_tag:"fric. 04",
  fric1_t:"Endless re-entry", fric1_p:"The same data copied from one tool to another — errors included.",
  fric2_t:"Reporting that devours", fric2_p:"Hours every week consolidating numbers instead of analyzing them.",
  fric3_t:"Manual controls", fric3_p:"Repetitive, time-consuming checks — and anomalies still slip through.",
  fric4_t:"AI that stays an idea", fric4_p:"The desire to use AI, without knowing where to start or what to expect.",
  pil_eyebrow:"What we do",
  pil_title:"Three ways to win back time and reliability.",
  pil_lead:"Separately or combined: every engagement starts with your need, never with the technology.",
  pil1_tag:"Consulting", pil1_t:"Consulting & Transformation", pil1_pr:"Rethink your target organization.",
  pil1_p:"We analyze your processes, identify efficiency opportunities and design your target organization with you: who does what, with which tools, and where AI truly adds value.",
  pil1_l1:"Process diagnosis and pain-point mapping", pil1_l2:"Target organization design", pil1_l3:"AI use cases prioritized by return on investment", pil1_l4:"Change management support",
  pil2_tag:"Automation", pil2_t:"Automation & AI Tools", pil2_pr:"Custom tools, delivered and running.",
  pil2_p:"We don't stop at recommendations: we build. Concrete solutions, deployed fast, that your teams use from day one.",
  pil2_l1:"Automation of repetitive tasks", pil2_l2:"Custom business applications", pil2_l3:"AI assistants and agents that fit your ways of working", pil2_l4:"Connecting your existing tools",
  pil3_tag:"Training", pil3_t:"Training & AI Adoption", pil3_pr:"Make your teams self-sufficient.",
  pil3_p:"The best technology is worthless if nobody uses it. We train your people to use AI in their daily work, from executives to operational teams.",
  pil3_l1:"Discovery workshops applied to your business", pil3_l2:"Hands-on AI tool training", pil3_l3:"Support for managers", pil3_l4:"Lasting skills transfer",
  ni_eyebrow:"Where we excel",
  ni_title:"Accounting firms, finance departments: we speak your language.",
  ni_lead:"Fifteen years in finance processes leave their mark: this is where Atomea delivers the most, the fastest.",
  ni1_tag:"GDPR", ni1_t:"Confidentiality by design",
  ni1_p:"Solutions built for sensitive data: running locally or on your own environments, GDPR-compliant by design, professional secrecy respected.",
  ni2_tag:"2026-2027 reform", ni2_t:"E-invoicing",
  ni2_p:"The French e-invoicing deadline is approaching for all your clients. We prepare your processes and tools for the reform — and turn it into an automation opportunity rather than a constraint.",
  ni3_tag:"Production", ni3_t:"The automated firm",
  ni3_p:"Document collection, data entry, reconciliation, review, reminders: the firm's repetitive tasks, automated to free up time for higher-value advisory work.",
  ni_open:"Not an accounting firm? All of this applies wherever processes repeat — as our track record in energy renovation shows.",
  met_eyebrow:"Our method",
  met_title:"Simple, short, measurable.",
  met_lead:"Four steps, stated durations, verifiable results at each one.",
  met1_d:"30 min — free", met1_t:"Understand", met1_p:"We listen, observe your processes and identify the real friction points together.",
  met2_d:"1 to 2 weeks", met2_t:"Design", met2_p:"We define the simplest solution that delivers maximum value, with measurable return on investment.",
  met3_d:"2 to 8 weeks", met3_t:"Deploy", met3_p:"We build and roll out quickly, in short iterations, together with your teams.",
  met4_d:"Ongoing", met4_t:"Transfer", met4_p:"We train your people so the solution lives and grows without dependency.",
  cas_eyebrow:"Case studies",
  cas_title:"Solutions in production, not slides.",
  cas_lead:"A few examples of what we have built and deployed.",
  cas1_tag:"Energy renovation", cas1_t:"Reliable project reviews", cas1_p:"Custom project review and pre-costing application: faster file analysis, safer commitment decisions.", cas1_r:"≈ 30–45 min saved per file — and far fewer errors",
  cas2_tag:"Energy renovation", cas2_t:"Audit quality control", cas2_p:"Automated audit comparison and control tool: inconsistencies and deviations detected systematically.", cas2_r:"30–45 min saved per file, on 20–30 files every month",
  cas3_tag:"Productivity", cas3_t:"Intelligent meeting assistant", cas3_p:"Fully local, confidential meeting recording and analysis: minutes, decisions and action items generated effortlessly.", cas3_r:"Minutes ready to send within moments of every meeting",
  cas4_tag:"Artificial intelligence", cas4_t:"AI agent ecosystem", cas4_p:"A complete set of specialized AI assistants — analysis, diagnosis, proposal drafting, automated monitoring — mastered end to end.", cas4_r:"A team of AI assistants available 24/7",
  cas5_tag:"Ongoing mission",
  cas5_p:"A major energy-renovation player is preparing its <strong>full digital transformation</strong> with us: goal — <strong>double to triple the activity</strong>, at constant headcount, by automating most business flows.",
  ab_eyebrow:"About us",
  ab_title:"Business first, technology second.",
  ab_caption:"Aymeric Barre — founder",
  ab_p1:"Atomea was founded by <strong>Aymeric Barre</strong>, an organizational transformation consultant. After 15+ years optimizing processes for large international groups, one conclusion stands out: artificial intelligence radically changes what is possible — transformations that used to take years now succeed in months.",
  ab_p2:"Atomea was born from this conviction: <strong>every organization, whatever its size, deserves access to the power of AI</strong> — pragmatically, without jargon, and with measurable results.",
  faq_eyebrow:"Frequently asked questions",
  faq_title:"The questions we get asked.",
  faq1_q:"Do we need to replace our current software?", faq1_a:"No. We work first with your existing tools, which we connect and augment. Replacing a system is only considered if it is genuinely your best option.",
  faq2_q:"Does our data stay confidential?", faq2_a:"Yes. Solutions can run locally or on your own environments. Confidentiality is a design criterion, not an option.",
  faq3_q:"How long before we see results?", faq3_a:"Fast. The first automations are typically in production within weeks, not months. And every engagement starts with a short diagnosis that sets measurable goals — you know where you are going before you commit.",
  faq4_q:"Are we too small for AI?", faq4_a:"No. Independent professionals and small teams often gain the most, the fastest: less complexity, visible results within weeks.",
  faq5_q:"Will we depend on you afterwards?", faq5_a:"No — quite the opposite. Every engagement includes skills transfer so your teams become autonomous. Ongoing support exists, but it is optional.",
  cta_eyebrow:"Ready to start?",
  cta_title:"Why not start with a diagnosis?",
  cta_lead:"A free 30-minute conversation, no strings attached, to identify the automation potential of your business together.",
  cta_btn:"Book a free call",
  foot_def:"Automated Target Operating Model & Enterprise AI",
  foot_home:"Home", foot_contact:"Contact",
  foot_legal:"© 2026 Atomea. All rights reserved."
};

/* Snapshot des textes FR depuis le HTML au chargement */
const FR = {};
document.querySelectorAll('[data-i18n]').forEach(el => FR[el.dataset.i18n] = el.textContent);
document.querySelectorAll('[data-i18n-html]').forEach(el => FR[el.dataset.i18nHtml] = el.innerHTML);

function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    const v = lang === 'en' ? I18N_EN[k] : FR[k];
    if (v !== undefined) {
      if (k === 'ab_p1' || k === 'ab_p2') el.innerHTML = v; else el.textContent = v;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    const v = lang === 'en' ? I18N_EN[k] : FR[k];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.lang = lang;
  const lf = document.getElementById('lang-flag');
  if (lf) lf.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  try { localStorage.setItem('atomea-lang', lang); } catch(e){}
}
document.getElementById('lang-flag').addEventListener('click', () => {
  setLang(document.documentElement.lang === 'fr' ? 'en' : 'fr');
});
(function(){
  let saved = null;
  try { saved = localStorage.getItem('atomea-lang'); } catch(e){}
  if (saved) { if (saved !== 'fr') setLang(saved); return; }
  // Langue par défaut selon le pays de l'IP : France -> fr, sinon -> en.
  // Repli sur la langue du navigateur si le service est injoignable (2 s max).
  const fallback = () => { if (!(navigator.language || 'fr').startsWith('fr')) setLang('en'); };
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 2000);
  fetch('https://api.country.is/', { signal: ctl.signal })
    .then(r => r.json())
    .then(d => { clearTimeout(timer); if (d && d.country && !['FR','BE','CH','LU','MC'].includes(d.country)) setLang('en'); })
    .catch(() => { clearTimeout(timer); fallback(); });
})();

/* ══════════ Signature : particules — du désordre au flux ══════════ */
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.getElementById('particles');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let W, H, pts = [], t = 0;
  const FORCED = (() => { const v = new URLSearchParams(location.search).get('order'); return v === null ? null : Math.max(0, Math.min(1, parseFloat(v))); })();
  const N = 84;

  function resize(){
    W = cv.clientWidth; H = cv.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pts = [];
    // figure d'atome : 3 orbites elliptiques denses, centre laissé vide (pas d'amas central)
    const cx = W / 2, cy = H / 2, R = Math.min(W * .46, H * .46);
    for (let i = 0; i < N; i++) {
      const k = i % 3, s = Math.floor(i / 3);
      const t = (s / (N / 3)) * Math.PI * 2, rot = k * Math.PI / 3;
      const ex = Math.cos(t) * R, ey = Math.sin(t) * R * .36;
      const tx = cx + ex * Math.cos(rot) - ey * Math.sin(rot);
      const ty = cy + ex * Math.sin(rot) + ey * Math.cos(rot);
      const g = k;
      pts.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
        tx, ty, g
      });
    }
  }
  function frame(){
    t += 1/60;
    // ordre monte et redescend lentement (cycle 14 s)
    const order = FORCED !== null ? FORCED : (Math.sin(t * 2 * Math.PI / 14 - Math.PI / 2) + 1) / 2;
    const o = Math.min(1, order * 1.18);
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      p.dx = p.x + (p.tx - p.x) * o;
      p.dy = p.y + (p.ty - p.y) * o;
    });
    // liens : proches en désordre, en chaîne ordonnée quand assemblé
    ctx.lineWidth = 1;
    const LINK = 70 + 35 * o;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = pts[i], b = pts[j];
        const d = Math.hypot(a.dx - b.dx, a.dy - b.dy);
        const th = a.g === b.g ? LINK : 70 * (1 - o * .85);
        if (d < th) {
          ctx.strokeStyle = 'rgba(127,209,200,' + ((a.g === b.g ? 0.3 + 0.32 * o : 0.26) * (1 - d / th)) + ')';
          ctx.beginPath(); ctx.moveTo(a.dx, a.dy); ctx.lineTo(b.dx, b.dy); ctx.stroke();
        }
      }
    }
    pts.forEach(p => {
      ctx.fillStyle = 'rgba(127,209,200,.85)';
      ctx.beginPath(); ctx.arc(p.dx, p.dy, 2.2, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(frame);
})();

/* ══════════ Menu mobile ══════════ */
(function(){
  const btn = document.getElementById('menu-btn');
  const panel = document.getElementById('mobile-nav');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();
