
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, ArrowRight, Menu, X, Code2,
  Globe, Layers, Monitor, Smartphone, Palette,
  Github, Linkedin, Mail, Phone, Send, Sparkles
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    name: 'Sathya Electronics',
    category: 'Business Website',
    description: 'A digital presence for an electronics business, presenting its brand and business information through a responsive website.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://sathyaelectronics.in/',
    visual: 'sathya',
    label: 'SATHYA',
    sub: 'ELECTRONICS'
  },
  {
    number: '02',
    name: 'A&C Solutions',
    category: 'Corporate Website + Employee Portal',
    description: 'A corporate website and employee portal with dedicated experiences for employees, interns and administrators.',
    tags: ['React', 'Node.js', 'MongoDB'],
    url: 'https://www.ancsolutionspvtltd.com/',
    visual: 'anc',
    label: 'A&C',
    sub: 'SOLUTIONS'
  },
  {
    number: '03',
    name: 'Golden Leaf',
    category: 'E-commerce Website',
    description: 'A modern e-commerce web experience with product-focused layouts and a responsive shopping interface.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    url: 'https://golden-leaf-zjiw.vercel.app/',
    visual: 'golden',
    label: 'GOLDEN',
    sub: 'LEAF.'
  }
];

const services = [
  {
    icon: Monitor,
    number: '01',
    title: 'Business Websites',
    description: 'Modern websites that communicate your brand and help your business grow online.'
  },
  {
    icon: Layers,
    number: '02',
    title: 'Web Applications',
    description: 'Custom portals, dashboards and management systems designed around your workflow.'
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Responsive Design',
    description: 'Smooth and consistent experiences across phones, tablets and desktop screens.'
  },
  {
    icon: Palette,
    number: '04',
    title: 'UI Development',
    description: 'Thoughtful interfaces with clean layouts, intuitive navigation and visual character.'
  }
];

const skills = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Render'] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const email = 'sushanthbejjenki@gmail.com';
  const phone = '+918179644161';

  function closeMenu() {
    setMenuOpen(false);
  }

  function updateForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function submitForm(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Freelance enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hello Sushanth Kumar Bejjenki,

${form.message}

Name: ${form.name}
Email: ${form.email}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon">S.</span>
          <span>SUSHANTH<span className="orange">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'navigation open' : 'navigation'}>
          {[
            ['Work', '#work'],
            ['Services', '#services'],
            ['About', '#about'],
            ['Skills', '#skills']
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}

        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              AVAILABLE FOR FREELANCE WORK
            </div>

            <p className="eyebrow">WEB DEVELOPER / FREELANCER</p>

            <h1>
              Building
              <br />
              <span>digital things</span>
              <br />
              that matter.
            </h1>

            <p className="hero-description">
              Hey, I'm <strong>Sushanth Kumar Bejjenki.</strong>
              I design and develop modern websites and web applications
              that help businesses turn ideas into meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Have a project? <ArrowUpRight size={17} />
              </a>
              <a className="btn btn-secondary" href="#work">
                Explore my work <ArrowRight size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span><Code2 size={16} /> Creative development</span>
              <span><Globe size={16} /> India / Worldwide</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="visual-glow" />

            <div className="visual-back">
              <span>IDEAS INTO INTERFACES</span>
              <div className="fake-code">
                <i /><i /><i /><i />
              </div>
            </div>

            <div className="visual-front">
              <div className="visual-top">
                <Sparkles size={20} />
                <span>DESIGN / BUILD / GROW</span>
              </div>
              <div className="visual-letter">S<span>.</span></div>
              <div className="visual-bottom">
                <span>MADE WITH<br />PURPOSE.</span>
                <ArrowUpRight size={27} />
              </div>
            </div>

            <div className="float-note note-one">
              <Code2 size={16} /> Built with curiosity
            </div>
            <div className="float-note note-two">
              <Sparkles size={16} /> Made to stand out
            </div>

            <span className="visual-caption">
              CREATIVE THINKING. PRACTICAL BUILDING.
            </span>
          </div>

          <a className="scroll-indicator" href="#work">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* RUNNING STRIP */}

        <div className="ticker">
          <span>THINK</span><i>✳</i>
          <span>DESIGN</span><i>✳</i>
          <span>DEVELOP</span><i>✳</i>
          <span>DELIVER</span><i>✳</i>
          <span>REPEAT</span>
        </div>

        {/* PROJECTS */}

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED PROJECTS</p>
              <h2>Some things<br /><span>I've built.</span></h2>
            </div>

            <p className="section-intro">
              A selection of business websites and web applications.
              Different ideas, different challenges, one focus:
              creating useful digital experiences.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a
                  className={`project-visual ${project.visual}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  <span className="project-number">
                    PROJECT / {project.number}
                  </span>

                  <div className="project-art">
                    <span>{project.label}</span>
                    <strong>{project.sub}</strong>
                    <div className="art-line" />
                  </div>

                  <span className="project-open">
                    <ArrowUpRight size={22} />
                  </span>
                </a>

                <div className="project-info">
                  <div className="project-heading">
                    <span>{project.number}</span>
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.category}</p>
                    </div>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="text-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live project <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}

        <section className="services-section" id="services">
          <div className="section services-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / WHAT I CAN DO</p>
                <h2>Good ideas.<br /><span>Better execution.</span></h2>
              </div>
              <p className="section-intro">
                From the first concept to the final deployment,
                I help bring digital products to life.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-top">
                      <span>{service.number}</span>
                      <Icon size={25} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ArrowUpRight className="service-arrow" size={20} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="section about-section" id="about">
          <div>
            <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
            <h2>Curiosity<br />meets <span>code.</span></h2>

            <div className="about-stamp">
              <Sparkles size={22} />
              <span>MAKE IT<br />MATTER</span>
            </div>
          </div>

          <div className="about-copy">
            <h3>
              I'm Sushanth Kumar Bejjenki, a web developer who enjoys
              transforming ideas into practical digital solutions.
            </h3>

            <p>
              I'm pursuing a B.Tech in Electronics and Communication
              Engineering and building my experience in web development.
            </p>

            <p>
              My interests include frontend development, backend systems,
              business websites and custom web applications. I enjoy
              understanding real problems and creating solutions that
              are functional, accessible and visually engaging.
            </p>

            <p>
              I also work as a Web Development Intern at A&C Solutions Pvt. Ltd.
            </p>

            <a className="text-link" href="#contact">
              Let's create something <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* SKILLS */}

        <section className="skills-section" id="skills">
          <div className="section skills-inner">
            <div>
              <p className="eyebrow">04 / MY TOOLKIT</p>
              <h2>Tools of<br /><span>the trade.</span></h2>
            </div>

            <div className="skill-groups">
              {skills.map(group => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact-section" id="contact">
          <div className="section contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">05 / GET IN TOUCH</p>
              <h2>Let's make<br /><span>it happen.</span></h2>

              <p>
                Have a website idea, a business to grow or a project
                that needs a developer? I'd love to hear about it.
              </p>

              <a className="contact-line" href={`mailto:${email}`}>
                <Mail size={19} /> {email} <ArrowUpRight size={15} />
              </a>

              <a className="contact-line" href={`tel:${phone}`}>
                <Phone size={19} /> +91 8179644161 <ArrowUpRight size={15} />
              </a>

              <div className="socials">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github size={17} /> GitHub <ArrowUpRight size={13} />
                </a>
                <a href="https://www.linkedin.com/in/sushanthbejjenki/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitForm}>
              <div className="form-title">
                <span>LET'S START A CONVERSATION</span>
                <Sparkles size={19} />
              </div>

              <label>
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Tell me about your project
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={updateForm}
                  placeholder="What would you like to build?"
                  required
                />
              </label>

              <button type="submit" className="btn btn-primary submit-btn">
                Send an enquiry <Send size={16} />
              </button>

              <p className="form-note">
                This form opens your email application with your enquiry prepared.
              </p>

              <a
                className="whatsapp-link"
                href="https://wa.me/918179644161"
                target="_blank"
                rel="noopener noreferrer"
              >
                Or contact me on WhatsApp <ArrowUpRight size={14} />
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-icon">S.</span>
          <span>SUSHANTH<span className="orange">.</span></span>
        </a>

        <span className="footer-note">
          THOUGHTFUL DESIGN. PURPOSEFUL DEVELOPMENT.
        </span>

        <a href="#home" className="back-top">BACK TO TOP ↑</a>

        <span className="copyright">
          © {new Date().getFullYear()} Sushanth Kumar Bejjenki
        </span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
