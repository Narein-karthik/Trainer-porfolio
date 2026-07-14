"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { engagements, experience, expertise, navItems, programmes, projects, recognition } from "./data";

const Logo = ({ footer = false }: { footer?: boolean }) => (
  <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home" aria-label="DTEKSKILZ — back to home">
    <Image unoptimized src="/images/dtekskilz-logo.png" width={90} height={90} alt="DTEKSKILZ logo" priority={!footer} />
    <span><strong>DTEKSKILZ</strong>{!footer && <small>Practical learning</small>}</span>
  </a>
);

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="section-title reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</header>;
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav"><span /><span /><span /><b>Menu</b></button>
        <nav id="main-nav" className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Collaborate <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow">Trainer · AI Engineer · EdTech Founder</p>
          <h1>NAREIN<br /><em>KARTHIK E</em></h1>
          <p className="hero-statement">Practical technology training<br />for students and institutions.</p>
          <div className="hero-actions"><a className="button primary" href="#programmes">Explore Training Programmes</a><a className="button text-link" href="mailto:narein2004@gmail.com?subject=Workshop%20Enquiry">Discuss a Workshop <span>↗</span></a></div>
          <div className="hero-meta"><p>AI & Data Analytics Trainer <span>·</span> AI Engineer</p><p>Founder & CEO, DTEKSKILZ <span>·</span> Senior Expert Member, Top Engineers</p><p>Bengaluru, India</p></div>
        </div>
        <div className="hero-visual reveal">
          <div className="portrait-frame"><Image unoptimized src="/images/narein-portrait.png" fill sizes="(max-width: 800px) 90vw, 42vw" priority alt="Narein Karthik E in professional attire" /></div>
          <div className="hero-note"><span>07+</span><p>Workshops<br />& events</p></div>
        </div>
        <div className="scroll-cue" aria-hidden="true">Scroll to explore <span>↓</span></div>
      </section>

      <section className="about section" id="about">
        <div className="watermark"><Image unoptimized src="/images/dtekskilz-logo.png" width={340} height={340} alt="" /></div>
        <div className="about-lead reveal"><p className="eyebrow">01 · About</p><h2>Technology is useful when it becomes <em>clear, practical</em> and possible to apply.</h2></div>
        <div className="about-body reveal"><p>Narein Karthik E is an AI engineer, technical trainer and EdTech entrepreneur based in Bengaluru. As Founder and CEO of DTEKSKILZ and a Senior Expert Member at Top Engineers, he plans workshops, mentors learners and supports institution-led programmes.</p><p>His sessions make room for explanation, demonstration and practice—helping learners move from an unfamiliar idea to something they can build and use.</p></div>
        <div className="method reveal"><p className="eyebrow">How I teach</p><ol><li><span>01</span>Clear concept explanation</li><li><span>02</span>Live demonstrations</li><li><span>03</span>Guided exercises</li><li><span>04</span>Project-based learning</li><li><span>05</span>Questions & feedback</li></ol></div>
      </section>

      <section className="experience section" id="experience">
        <SectionTitle eyebrow="02 · Experience" title="Roles built around learning, doing and mentoring." />
        <div className="experience-list">{experience.map((item, i) => <article className="experience-row reveal" key={item.role}><span className="row-index">0{i + 1}</span><div><h3>{item.role}</h3><p className="org">{item.org}</p></div><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="workshops section" id="workshops">
        <SectionTitle eyebrow="03 · Workshops & engagements" title="Real classrooms. Practical outcomes." copy="Training designed with the audience, time frame and intended learning outcome in mind." />
        <div className="stats reveal"><div><strong>7+</strong><span>workshops & events</span></div><div><strong>500+</strong><span>students mentored</span></div><div><strong>4+</strong><span>institutions & organisations</span></div></div>
        <div className="photo-story reveal">
          <figure className="photo-main"><Image unoptimized src="/images/excel-workshop.png" fill sizes="(max-width: 800px) 100vw, 55vw" alt="Narein teaching an AI-powered Excel workshop" /><figcaption>Hands-on instruction · AI-Powered Excel</figcaption></figure>
          <figure className="photo-secondary"><Image unoptimized src="/images/classroom-session.png" fill sizes="(max-width: 800px) 100vw, 32vw" alt="Narein leading an interactive classroom session" /></figure>
        </div>
        <div className="engagements"><p className="eyebrow">Selected engagements</p>{engagements.map((item, i) => <details className="engagement reveal" key={item.title} open={i === 0}><summary><span>{String(i + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.meta}</p><b aria-hidden="true">＋</b></summary><div><p>{item.copy}</p></div></details>)}</div>
        <div className="photo-strip reveal"><figure><Image unoptimized src="/images/autotronics-session.png" fill sizes="33vw" alt="Autotronics workshop demonstration around a vehicle" /></figure><figure><Image unoptimized src="/images/bti-group.png" fill sizes="33vw" alt="Group photograph at Bangalore Technological Institute" /></figure><figure><Image unoptimized src="/images/student-recognition.png" fill sizes="33vw" alt="Narein with students receiving event certificates" /></figure></div>
      </section>

      <section className="expertise section" id="expertise">
        <SectionTitle eyebrow="04 · Skills & expertise" title="Tools for the classroom and the workplace." />
        <div className="expertise-layout">{Object.entries(expertise).map(([title, items], i) => <article className="skill-group reveal" key={title}><span>0{i + 1}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="programmes section" id="programmes">
        <div className="programme-intro reveal"><p className="eyebrow">05 · Training programmes</p><h2>Flexible formats.<br /><em>One clear purpose.</em></h2><p>The same topic can be delivered as an introduction, an intensive workshop or a longer project-based programme.</p><a className="button light" href="mailto:narein2004@gmail.com?subject=Institutional%20Training%20Enquiry">Plan an institutional programme ↗</a></div>
        <div className="programme-list reveal">{programmes.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
        <div className="duration reveal"><p>Available durations</p><div>{["Half day", "One day", "Two days", "One week", "Two weeks", "One month", "Custom programme"].map(d => <span key={d}>{d}</span>)}</div></div>
      </section>

      <section className="projects section" id="projects">
        <SectionTitle eyebrow="06 · Selected projects" title="Applied ideas, built into working systems." />
        <div className="project-list">{projects.map((project) => <article className="project reveal" key={project.title}><span className="project-number">{project.n}</span><div className="project-copy"><h3>{project.title}</h3><p>{project.copy}</p><small>{project.tech}</small></div></article>)}</div>
      </section>

      <section className="recognition section" id="recognition">
        <div className="recognition-head reveal"><p className="eyebrow">07 · Recognition</p><h2>Professional highlights,<br /><em>earned through participation.</em></h2></div>
        <div className="recognition-list reveal">{recognition.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
        <figure className="recognition-photo reveal"><Image unoptimized src="/images/mentorship-event.png" fill sizes="(max-width: 800px) 100vw, 44vw" alt="Students and mentors at an institutional recognition event" /></figure>
      </section>

      <section className="mentorship section" aria-labelledby="mentorship-title">
        <div className="mentor-mark" aria-hidden="true">“</div><div className="reveal"><p className="eyebrow">Mentorship & Guidance</p><h2 id="mentorship-title">Dr. Prabhakar Sekar</h2><p className="mentor-role">Mentor and Institutional Support</p></div><div className="mentor-copy reveal"><p>Dr. Prabhakar Sekar has provided consistent support, encouragement and guidance throughout Narein’s training and institutional work.</p><p>His guidance has helped open training opportunities, strengthen institutional collaborations and shape student-focused initiatives.</p></div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro reveal"><p className="eyebrow">08 · Contact</p><h2>Workshops and<br /><em>institutional collaboration</em></h2><p>I’m available for workshops, faculty development programmes, internships, guest lectures, mentoring, judging, institutional training and technology-education partnerships.</p><blockquote>“If you are planning a workshop or training programme, let’s discuss the audience, objectives and format.”</blockquote></div>
        <div className="contact-details reveal"><a className="email" href="mailto:narein2004@gmail.com"><span>Email</span>narein2004@gmail.com ↗</a><dl><div><dt>Location</dt><dd>Bengaluru, India</dd></div><div><dt>Phone</dt><dd><a href="tel:+918754319914">+91 87543 19914</a></dd></div><div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Open LinkedIn profile ↗</a></dd></div><div><dt>GitHub</dt><dd><a href="https://github.com/Narein-karthik" target="_blank" rel="noreferrer">github.com/Narein-karthik ↗</a></dd></div></dl></div>
      </section>
    </main>

    <footer><div className="footer-brand"><Logo footer /><p>Narein Karthik E<br />AI & Data Analytics Trainer<br />Bengaluru, India</p></div><div className="footer-links">{navItems.slice(0, 7).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><a className="footer-email" href="mailto:narein2004@gmail.com">narein2004@gmail.com</a><p className="copyright">© {new Date().getFullYear()} Narein Karthik E. All rights reserved.</p></footer>
  </>;
}
