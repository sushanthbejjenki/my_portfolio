import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, ArrowRight, Code2, Sparkles, Layers3, Smartphone,
  Globe2, Github, Mail, Menu, X, Check, Send, Zap, Monitor,
  Database, Palette, Rocket, MousePointer2, Instagram, Linkedin
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01', name: 'Sathya Electronics', type: 'Business website · Electronics retail',
    description: 'A customer-facing website for an electronics retailer, helping visitors explore the brand and its online presence.',
    tags: ['Web development', 'Responsive design', 'Business website'],
    visual: 'paper', label: 'ELECTRONICS WEBSITE',
    link: 'https://sathyaelectronics.in/'
  },
  {
    number: '02', name: 'A&C Solutions', type: 'Corporate website · Employee portal',
    description: 'A corporate website and employee portal bringing company information and staff workflows together in one digital experience.',
    tags: ['Web development', 'Employee portal', 'Business systems'],
    visual: 'ac', label: 'CORPORATE + EMPLOYEE PORTAL',
    link: 'https://www.ancsolutionspvtltd.com/'
  },
  {
    number: '03', name: 'Golden Leaf', type: 'E-commerce · Online store',
    description: 'A modern e-commerce experience designed around product discovery, clear presentation and a smooth shopping journey.',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    visual: 'gold', label: 'E-COMMERCE WEBSITE',
    link: 'https://golden-leaf-zjiw.vercel.app/'
  }
];

const services = [
  { icon: Monitor, title: 'Website development', text: 'Responsive business websites that look sharp, load quickly and make it easy for customers to take action.' },
  { icon: Layers3, title: 'Web applications', text: 'Dashboards, portals and practical tools built around the way your business actually works.' },
  { icon: Smartphone, title: 'Mobile-friendly experiences', text: 'Interfaces that feel intuitive and work smoothly across phones, tablets and desktops.' },
  { icon: Palette, title: 'UI design & refresh', text: 'A clearer visual identity, cleaner layouts and a more polished experience for your users.' }
];

const skills = [
  ['Frontend', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  ['Backend & data', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  ['Tools & platforms', 'Git & GitHub', 'Vercel', 'Render', 'Android Studio', 'Figma']
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', project: '' });
  const email = 'sushanthbejjenki@gmail.com';
  const phone = '+91 8179644161';
  const github = 'https://github.com/sushanthbejjenki';

  const closeMenu = () => setMenuOpen(false);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Sushanth,\n\n${form.project}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <div className="noise" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S.</span><span>SUSHANTH<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['Work', 'Services', 'About', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> AVAILABLE FOR FREELANCE PROJECTS</div>
            <p className="eyebrow">WEB DEVELOPER <span>✳</span> FREELANCER</p>
            <h1>Ideas into<br/><span className="gradient-text">digital impact.</span></h1>
            <p className="hero-description">Hey, I'm <strong>Sushanth</strong>. I build modern websites and web applications that help businesses stand out, work smarter and grow online.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Start a project <ArrowUpRight size={18}/></a>
              <a className="button secondary" href="#work">Explore my work <ArrowRight size={17}/></a>
            </div>
            <div className="hero-meta"><span><Code2 size={15}/> Design-minded development</span><span><Globe2 size={15}/> Based in India · Working worldwide</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract colorful creative design">
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
            <div className="art-glow"/>
            <div className="art-card card-back"><span className="mini-label">CREATIVE / CODE</span><div className="code-lines"><i/><i/><i/><i/></div></div>
            <div className="art-card card-front"><div className="art-top"><span>✳</span><span>01 — 03</span></div><div className="art-symbol">S<span>.</span></div><div className="art-bottom"><span>THOUGHTFUL<br/>BY DESIGN</span><ArrowUpRight/></div></div>
            <div className="floating-tag tag-one"><Sparkles size={15}/> Creative thinking</div>
            <div className="floating-tag tag-two"><Zap size={15}/> Built to perform</div>
            <div className="art-caption">A LITTLE CREATIVITY.<br/>A LOT OF PURPOSE.</div>
          </div>
          <a className="scroll-cue" href="#work"><span/> SCROLL TO EXPLORE <ArrowRight size={14}/></a>
        </section>

        <section className="trust-strip"><span>FROM FIRST IDEA</span><span className="strip-line"/><span>TO LAUNCH DAY</span><span className="strip-star">✳</span><span>LET'S BUILD SOMETHING USEFUL</span></section>

        <section className="section work-section" id="work">
          <div className="section-heading"><div><p className="eyebrow"><span>01 /</span> SELECTED WORK</p><h2>Things I've<br/><span className="muted">been building.</span></h2></div><p className="section-intro">A mix of real-world builds and experiments. Each one is a chance to solve a problem and make the experience better.</p></div>
          <div className="project-grid">
            {projects.map((p) => <article className="project-card" key={p.number}>
              <a className={`project-visual ${p.visual}`} href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>
                <span className="visual-label">{p.label}</span>
                {p.visual === 'paper' && <div className="mock-window"><div className="mock-bar"><b/><b/><b/></div><div className="mock-content"><div className="mock-side"/><div className="mock-main"><i/><i/><div className="mock-row"/><div className="mock-row short"/></div></div></div>}
                {p.visual === 'ac' && <div className="ac-mark">A<span>&</span>C<div>SOLUTIONS</div></div>}
                {p.visual === 'gold' && <div className="gold-shape"><div/><span>GOLDEN<br/>LEAF</span></div>}
                {p.visual === 'iot' && <div className="iot-visual"><div className="iot-ring"/><div className="iot-core">⌁</div><span>WIRELESS / SIGNAL</span></div>}
                <span className="project-open"><ArrowUpRight size={20}/></span>
              </a>
              <div className="project-info"><div className="project-title-row"><span className="project-number">{p.number}</span><div><h3>{p.name}</h3><p>{p.type}</p></div></div><p className="project-desc">{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a className="text-link" href={p.link} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={15}/></a></div>
            </article>)}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section section-inner">
            <div className="section-heading"><div><p className="eyebrow"><span>02 /</span> WHAT I CAN DO</p><h2>Good ideas deserve<br/><span className="muted">great execution.</span></h2></div><p className="section-intro">From a simple online presence to a custom digital product, I can help take your idea from a rough brief to a working experience.</p></div>
            <div className="services-grid">{services.map((s, i) => <div className="service" key={s.title}><div className="service-top"><span>0{i+1}</span><s.icon size={22}/></div><h3>{s.title}</h3><p>{s.text}</p><span className="service-arrow"><ArrowUpRight size={18}/></span></div>)}</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-left"><p className="eyebrow"><span>03 /</span> A LITTLE ABOUT ME</p><h2>Curious mind.<br/><span className="gradient-text">Builder's mindset.</span></h2><div className="about-stamp"><span>MAKE IT</span><b>MATTER✳</b></div></div>
          <div className="about-right"><p className="about-lead">I enjoy turning complex ideas into simple, useful digital experiences.</p><p>I'm Sushanth, a web developer who likes working across design and development. I care about the details people notice — and the thoughtful engineering they don't.</p><p>My approach is straightforward: understand the goal, keep the experience clear, build it carefully and make it work beautifully across devices.</p><a className="text-link" href="#contact">Have an idea? Let's talk <ArrowUpRight size={15}/></a></div>
        </section>

        <section className="skills-section"><div className="section skills-inner"><div><p className="eyebrow"><span>04 /</span> MY TOOLKIT</p><h2>Tools of<br/><span className="muted">the trade.</span></h2></div><div className="skill-columns">{skills.map(([heading, ...items]) => <div className="skill-group" key={heading}><h3>{heading}</h3><div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="section contact-inner"><div className="contact-copy"><p className="eyebrow"><span>05 /</span> YOUR TURN</p><h2>Have a project<br/>in <span className="gradient-text">mind?</span></h2><p>Tell me what you're thinking. Whether it's a new website, a better workflow or an idea that needs a developer — let's make it happen.</p><a className="email-link" href={`mailto:${email}`}>{email} <ArrowUpRight size={17}/></a><a className="email-link phone-link" href={`tel:${phone.replace(/\s/g, '')}`}>{phone} <ArrowUpRight size={17}/></a><div className="social-links"><a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a></div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>LET'S MAKE IT REAL</span><Sparkles size={18}/></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="What should I call you?"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Tell me about your project<textarea required rows="4" value={form.project} onChange={e=>setForm({...form,project:e.target.value})} placeholder="A little about what you want to build..."/></label><button className="button primary submit-button" type="submit">Send enquiry <Send size={16}/></button><p className="form-note">{sent ? 'Your email app should open with your enquiry. Send the message to complete your enquiry.' : 'This opens your email app with your message ready to send.'}</p></form>
        </div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>SUSHANTH<span className="brand-dot">.</span></span></a><span>DESIGNED WITH INTENTION · BUILT WITH CARE</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Sushanth</span></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);