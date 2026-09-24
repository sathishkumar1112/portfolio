import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  ServerCog,
  Sparkles,
} from 'lucide-react'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'GCP',
  'Docker',
]

const strengths = [
  {
    icon: <Code2 size={22} />,
    title: 'Product Engineering',
    text: 'Building responsive frontends and maintainable APIs with practical, production-minded architecture.',
  },
  {
    icon: <ServerCog size={22} />,
    title: 'Backend & Integrations',
    text: 'Designing REST APIs, authentication flows, background jobs, data pipelines and third-party integrations.',
  },
  {
    icon: <Cloud size={22} />,
    title: 'Cloud Modernization',
    text: 'Working across AWS, Firebase and Google Cloud with observability, deployments and runtime upgrades.',
  },
]

const experience = [
  {
    period: '2024 — Present',
    company: 'NRL Digital / Rugby Platform',
    role: 'Full Stack Developer',
    points: [
      'Modernized Node.js runtime and upgraded major backend dependencies.',
      'Worked across Firebase Functions, AWS SDK integrations, authentication and observability.',
      'Delivered frontend and backend features across multi-environment deployments.',
    ],
  },
  {
    period: '2021 — 2023',
    company: 'eNoah iSolution India Pvt Ltd',
    role: 'Associate Consultant — Web Technologies',
    points: [
      'Built Angular and Node.js features for a health-insurance commission platform.',
      'Developed dashboards, responsive forms, role-based permissions and API integrations.',
    ],
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Home">
          <span className="brand-mark">SK</span>
          <span className="brand-name">Sathish Kumar</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Full Stack Developer</span>
            <h1>
              I build reliable web products with
              <span className="gradient-text"> clean engineering and practical AI.</span>
            </h1>
            <p className="hero-lead">
              JavaScript/TypeScript developer working across React, Node.js, Python, APIs,
              data systems and cloud platforms — with a focus on maintainability and measurable outcomes.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="#contact">Contact me</a>
            </div>
            <div className="hero-meta">
              <span>Full-stack development</span>
              <span>Cloud integrations</span>
              <span>Data + AI products</span>
            </div>
          </div>

          <div className="hero-card" aria-label="Developer profile card">
            <div className="hero-card-glow" />
            <div className="hero-card-row">
              <span className="status-dot" />
              <span>Building</span>
            </div>
            <div className="terminal-line"><span className="muted">$</span> current_focus</div>
            <div className="focus-line">SEO + AI Search Visibility Intelligence</div>
            <div className="mini-grid">
              <div><span>Backend</span><strong>FastAPI</strong></div>
              <div><span>Frontend</span><strong>React</strong></div>
              <div><span>Database</span><strong>Postgres</strong></div>
              <div><span>Infra</span><strong>Docker</strong></div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="section-heading">
            <span className="section-kicker">About</span>
            <h2>Engineering across the full product stack.</h2>
            <p>
              I work from UI to APIs, databases and cloud services. I enjoy modernizing existing systems,
              integrating external platforms and turning ambiguous requirements into dependable software.
            </p>
          </div>
          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="info-card" key={item.title}>
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="skills-wrap">
            {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-heading compact">
            <span className="section-kicker">Experience</span>
            <h2>Selected work</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-period">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <span className="section-kicker">Featured project</span>
            <h2>SEO + AI Search Visibility Intelligence</h2>
            <p>
              A real-data intelligence platform designed to move from raw search signals to detection,
              evidence, diagnosis, prioritization, action and measurement.
            </p>
          </div>

          <article className="featured-project">
            <div className="project-visual">
              <div className="project-visual-top">
                <span className="badge">Phase 1</span>
                <span className="live-label"><span className="status-dot" /> Real data architecture</span>
              </div>
              <div className="metric-row">
                <div><span>Data source</span><strong>Google Search Console</strong></div>
                <div><span>Detection</span><strong>Page-level decline</strong></div>
                <div><span>Evidence</span><strong>Reproducible</strong></div>
              </div>
              <div className="flow-card">
                <span>GSC</span><i>→</i><span>PostgreSQL</span><i>→</i><span>Detection</span><i>→</i><span>Evidence</span><i>→</i><span>Dashboard</span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-icon"><Braces size={24} /></div>
              <h3>Search intelligence, not AI-generated reporting.</h3>
              <p>
                The first MVP collects authorized page-level Search Console data, validates source-date
                coverage, detects meaningful organic-click declines using deterministic rules, stores
                immutable evidence, and presents the result in a polished dashboard.
              </p>
              <div className="project-stack">
                <span>Python</span><span>FastAPI</span><span>React</span><span>PostgreSQL</span><span>Redis</span><span>Celery</span><span>Docker</span>
              </div>
              <div className="project-notes">
                <div><Database size={18} /><span>Real page/date Search Console observations</span></div>
                <div><ServerCog size={18} /><span>Idempotent background processing</span></div>
                <div><Sparkles size={18} /><span>AI diagnosis planned only after verified evidence</span></div>
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>Interested in working together?</h2>
            <p>I'm open to product engineering and full-stack opportunities.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:YOUR_EMAIL@example.com"><Mail size={18} /> Email</a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Sathish Kumar</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  )
}

export default App
