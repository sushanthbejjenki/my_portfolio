
import "./style.css";

const projects = [
  {
    number: "01",
    name: "Sathya Electronics",
    category: "Business Website",
    description:
      "A professional website for an electronics business, designed to present its brand and services with a clean, responsive experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://sathyaelectronics.in/",
    label: "VISIT WEBSITE",
  },
  {
    number: "02",
    name: "A&C Solutions",
    category: "Corporate Website & Employee Portal",
    description:
      "A corporate website and employee portal built to support company information, employee workflows, and business operations.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://www.ancsolutionspvtltd.com/",
    label: "VISIT WEBSITE",
  },
  {
    number: "03",
    name: "Golden Leaf",
    category: "E-commerce Project",
    description:
      "An e-commerce-oriented web project with a modern interface, product-focused presentation, and responsive layouts.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    url: "https://golden-leaf-zjiw.vercel.app/",
    label: "VISIT WEBSITE",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Responsive Design",
  "Next.js",
  "TypeScript",
];

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          S<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="mailto:sushanthbejjenki@gmail.com">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            AVAILABLE FOR FREELANCE PROJECTS
          </div>

          <p className="eyebrow">HELLO, I'M SUSHANTH BEJJENKI</p>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span className="gradient-text">make an impact.</span>
          </h1>

          <p className="hero-description">
            I'm a Web Developer who transforms ideas into beautiful,
            responsive, and functional digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>
            <a href="#contact" className="button-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/sushanth-kumar-bejjenki-3526402a8/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <span />
            <a
              href="mailto:sushanthbejjenki@gmail.com"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-side-text">DESIGN · DEVELOP · DEPLOY</div>

        <a href="#about" className="scroll-indicator">
          <span /> SCROLL TO EXPLORE
        </a>

        <div className="hero-index">01 / 04</div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label">
          <span>01</span> / ABOUT ME
        </div>

        <div className="intro-grid">
          <h2>
            I don't just build
            <br />
            websites. I build
            <br />
            <span className="gradient-text">experiences.</span>
          </h2>

          <div className="intro-copy">
            <p>
              I'm Sushanth, a web developer and Electronics and
              Communication Engineering student at SR University.
              I enjoy turning creative ideas into practical digital
              products.
            </p>
            <p>
              I work with modern web technologies to create business
              websites, web applications, and digital experiences.
              I'm currently gaining professional experience as a
              Web Development Intern at A&C Solutions Pvt. Ltd.
            </p>
            <a href="#contact" className="text-link">
              Have a project in mind? Let's talk <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-label">
          <span>02</span> / MY TOOLKIT
        </div>

        <div className="section-heading">
          <h2>Technologies I work with.</h2>
          <p>Tools that help me bring ideas to life.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="section-label">
          <span>03</span> / EXPERIENCE & EDUCATION
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <span className="card-kicker">PROFESSIONAL EXPERIENCE</span>
            <h3>Web Development Intern</h3>
            <p className="company">A&C Solutions Pvt. Ltd.</p>
            <p className="date">August 2026 – Present</p>
            <p>
              Contributing to website and web application development,
              working with frontend and backend technologies, and
              improving user experiences.
            </p>
          </article>

          <article className="experience-card">
            <span className="card-kicker">EDUCATION</span>
            <h3>B.Tech – ECE</h3>
            <p className="company">SR University</p>
            <p className="date">Expected Graduation: 2027</p>
            <p>
              Electronics and Communication Engineering student
              developing practical skills in software and web
              development.
            </p>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-label">
          <span>04</span> / SELECTED WORK
        </div>

        <div className="projects-heading">
          <div>
            <h2>Things I've built.</h2>
            <p>A selection of projects and digital experiences.</p>
          </div>
          <span className="project-count">03 PROJECTS</span>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name}`}
              >
                <span>{project.label}</span>
                <b>↗</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section">
        <div className="section-label">WHAT I CAN DO FOR YOU</div>
        <h2>
          Let's turn your
          <br />
          next idea into <span className="gradient-text">reality.</span>
        </h2>

        <div className="services-grid">
          {[
            ["01", "Business Websites", "Professional websites for businesses and brands."],
            ["02", "Landing Pages", "Modern landing pages designed to communicate clearly."],
            ["03", "Portfolio Websites", "Personal websites that showcase your work."],
            ["04", "Website Improvements", "Responsive redesigns, bug fixes, and improvements."],
          ].map(([number, title, description]) => (
            <div className="service-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" />
        <div className="section-label">LET'S WORK TOGETHER</div>

        <h2>
          Have an idea?
          <br />
          <span className="gradient-text">Let's build it.</span>
        </h2>

        <p>
          Have a website project, collaboration, or freelance opportunity?
          I'd love to hear about it.
        </p>

        <a
          className="button-primary contact-button"
          href="mailto:sushanthbejjenki@gmail.com?subject=Website%20Project%20Enquiry"
        >
          Start a Conversation <span>↗</span>
        </a>

        <div className="contact-details">
          <a href="mailto:sushanthbejjenki@gmail.com">
            sushanthbejjenki@gmail.com
          </a>
          <a href="tel:+918179644161">+91 8179644161</a>
          <a
            href="https://www.linkedin.com/in/sushanth-kumar-bejjenki-3526402a8/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">S<span>.</span></a>
        <p>Designed & developed by Sushanth Bejjenki.</p>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()} SUSHANTH</span>
      </footer>
    </main>
  );
}

export default App;
