import { useEffect, useMemo, useState } from 'react'
import './App.css'

const skills = [
  { name: 'Node.js', icon: 'N' },
  { name: 'Express.js', icon: 'Ex' },
  { name: 'React.js', icon: 'Re' },
  { name: 'PostgreSQL', icon: 'Pg' },
  { name: 'MongoDB', icon: 'Mo' },
  { name: 'Redis', icon: 'Rd' },
  { name: 'Docker', icon: 'Dk' },
  { name: 'AWS S3', icon: 'S3' },
  { name: 'JWT + RBAC', icon: 'Au' },
  { name: 'Microservices', icon: 'Ms' },
]

const tooling = [
  { name: 'Git', icon: 'Gi' },
  { name: 'SonarQube', icon: 'Sq' },
  { name: 'PM2', icon: 'Pm' },
  { name: 'CI/CD Pipelines', icon: 'Ci' },
  { name: 'Apache NiFi (ETL Flows)', icon: 'Ni' },
]

const experienceHighlights = [
  'Built and maintained scalable Node.js + Express.js backend services for high-traffic applications.',
  'Optimized PostgreSQL schemas and SQL queries, improving query performance by 35%.',
  'Implemented authentication, RBAC authorization, and secure API practices for stronger data protection.',
  'Reduced production incidents by 20% through logging, debugging, and performance tuning.',
]

const projects = [
  {
    title: 'Central Know Your Customer Records Registry (CKYCRR)',
    period: 'Jan 2026 - Mar 2026',
    architecture: 'React.js + Node.js + Express.js + PostgreSQL + AWS S3 + JIRA ITSM APIs',
    problem: 'Teams needed a secure internal + partner platform for training, helpdesk, and video content delivery at scale.',
    built: 'Built full-stack training/helpdesk modules, designed secure REST APIs, and architected S3-based video management.',
    result: 'Delivered secure streaming for 1,000+ users and increased support response efficiency by 30%.',
  },
  {
    title: 'Supporting Registry Management Portal - AgriStack',
    period: 'Jan 2025 - Dec 2025',
    architecture: 'React.js + Node.js + Express.js + PostgreSQL + JWT/RBAC',
    problem: 'Registry operations required secure user access and reliable workflows for large-scale request handling.',
    built: 'Implemented backend modules, JWT auth + RBAC, frontend integrations, and optimized SQL for large datasets.',
    result: 'Reduced response times by 30% and improved API reliability under high-volume requests.',
  },
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const navSet = useMemo(() => new Set(navItems.map((item) => item.id)), [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && navSet.has(entry.target.id)) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: 0.05,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navSet])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    revealItems.forEach((item) => revealObserver.observe(item))

    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <header className="hero">
        <nav className="topbar">
          <p className="logo">Sameer Shende</p>
          <div className="top-actions">
            <a className="resume-link" href="mailto:sameer.shende154@gmail.com">sameer.shende154@gmail.com</a>
            <a className="btn btn-primary" href="/SAMEER_SHENDE_FULLSTACK_DEVELOPER.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>
        </nav>

        <div className="hero-grid reveal">
          <div>
            <p className="role">Full Stack Developer | Nagpur, Maharashtra</p>
            <h1>Building scalable products with clean APIs, fast UIs, and production-grade reliability.</h1>
            <p className="summary">
              Full Stack Developer with 2+ years of experience delivering robust web applications using Node.js, Express.js,
              React.js, and PostgreSQL. Strong in backend architecture, performance optimization, and cross-functional delivery.
            </p>
            <div className="status-row">
              <span className="status-chip">Open to roles: Backend / Full Stack</span>
              <span className="status-chip">Security-First Engineering</span>
            </div>
            {/* <div className="cta-row">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn btn-ghost" href="#contact">Contact</a>
              <a className="btn btn-ghost" href="tel:+918208886517">Call</a>
            </div> */}
          </div>

          <aside className="hero-card">
            <p className="chip">Current Role</p>
            <h2>Software Developer</h2>
            <p className="org">Prevoyance IT Solutions Pvt. Ltd.</p>
            <p className="period">March 2024 - Present</p>
            <ul>
              <li>35% faster query performance</li>
              <li>20% fewer production issues</li>
              <li>Security-first API design</li>
            </ul>
          </aside>
        </div>

      </header>

      <div className="sticky-nav-wrap">
        <ul className="sticky-nav" aria-label="Section navigation">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <main>
        <section className="section reveal" id="about">
          <h2>Profile Summary</h2>
          <p>
            Experienced in designing RESTful APIs, database architecture, SQL optimization, and distributed systems.
            Comfortable owning backend services while delivering responsive React interfaces that integrate cleanly across the stack.
          </p>
        </section>

        <section className="section reveal" id="experience">
          <h2>Experience Highlights</h2>
          <div className="grid three">
            {experienceHighlights.map((item, index) => (
              <article className="card reveal-stagger" style={{ '--delay': `${index * 90}ms` }} key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <h2>Projects</h2>
          <div className="timeline">
            {projects.map((project, index) => (
              <article className="timeline-card reveal-stagger" style={{ '--delay': `${index * 110}ms` }} key={project.title}>
                <p className="period-tag">{project.period}</p>
                <h3>{project.title}</h3>
                <p className="arch">Architecture: {project.architecture}</p>
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>What I built:</strong> {project.built}</p>
                <p><strong>Result:</strong> {project.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-wrap">
            {skills.map((skill, index) => (
              <span key={skill.name} className="skill-pill reveal-stagger" style={{ '--delay': `${index * 55}ms` }}>
                <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
          <h3 className="subheading">Tooling</h3>
          <div className="skills-wrap">
            {tooling.map((tool, index) => (
              <span key={tool.name} className="skill-pill tool reveal-stagger" style={{ '--delay': `${index * 65}ms` }}>
                <span className="skill-icon tool-icon" aria-hidden="true">{tool.icon}</span>
                <span>{tool.name}</span>
              </span>
            ))}
          </div>
        </section>

        <section className="section reveal" id="contact">
          <div className="contact-box">
            <h2>Let's Build Something Meaningful</h2>
            <p>
              Open to full-time opportunities and impactful engineering roles where scalability, reliability, and clean architecture matter.
            </p>
            <div className="contact-links">
              <a href="mailto:sameer.shende154@gmail.com">sameer.shende154@gmail.com</a>
              <a href="tel:+918208886517">+91-8208886517</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
