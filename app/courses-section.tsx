"use client";

import { useEffect, useRef, useState } from "react";
import { Course, CourseFilter, courseFilters, courses } from "./courses";

const iconLabels: Record<Course["icon"], string> = {
  data: "∑",
  ml: "ML",
  bi: "BI",
  genai: "AI",
  rag: "RAG",
  mcp: "MCP",
};

function CourseFilters({ active, onChange }: { active: CourseFilter; onChange: (filter: CourseFilter) => void }) {
  return <div className="course-filters" aria-label="Filter courses">
    {courseFilters.map((filter) => <button key={filter} type="button" className={active === filter ? "active" : ""} aria-pressed={active === filter} onClick={() => onChange(filter)}>{filter}</button>)}
  </div>;
}

function CourseCard({ course, onView }: { course: Course; onView: (course: Course, trigger: HTMLButtonElement) => void }) {
  return <article className="course-card">
    <header className="course-card-head">
      <span className={`course-icon icon-${course.icon}`} aria-hidden="true">{iconLabels[course.icon]}</span>
      {course.featured && <span className="featured-badge">Featured</span>}
    </header>
    <p className="course-category">{course.category}</p>
    <h4>{course.title}</h4>
    <p className="course-tagline">{course.tagline}</p>
    <dl className="course-meta">
      <div><dt><span aria-hidden="true">◷</span> Duration</dt><dd>{course.duration}</dd></div>
      <div><dt><span aria-hidden="true">◇</span> Level</dt><dd>{course.level}</dd></div>
      <div><dt><span aria-hidden="true">◎</span> Mode</dt><dd>{course.mode}</dd></div>
    </dl>
    <div className="topic-preview"><p>Topic preview</p><ul>{course.topics.slice(0, 4).map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
    <p className="course-outcome"><strong>Learning outcome</strong>{course.outcome}</p>
    <button type="button" className="course-details-button" aria-haspopup="dialog" onClick={(event) => onView(course, event.currentTarget)}>View Details <span aria-hidden="true">↗</span></button>
  </article>;
}

function CourseDetails({ course, onClose }: { course: Course; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButton.current?.focus();
    document.body.classList.add("dialog-open");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("dialog-open");
    };
  }, [onClose]);

  return <div className="course-dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="course-dialog" role="dialog" aria-modal="true" aria-labelledby={`course-title-${course.id}`}>
      <button ref={closeButton} type="button" className="dialog-close" onClick={onClose} aria-label={`Close details for ${course.title}`}>Close <span aria-hidden="true">×</span></button>
      <div className="dialog-heading">
        <p className="eyebrow">{course.category}</p>
        <h2 id={`course-title-${course.id}`}>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <dl className="dialog-meta">
        <div><dt>Duration</dt><dd>{course.duration}</dd></div>
        <div><dt>Level</dt><dd>{course.level}</dd></div>
        <div><dt>Mode</dt><dd>{course.mode}</dd></div>
      </dl>
      <div className="dialog-grid">
        <div><h3>Complete topic list</h3><ul className="dialog-topics">{course.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
        <aside>
          <div><h3>Prerequisites</h3><ul>{course.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><h3>Project or deliverable</h3><ul>{course.projects.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><h3>Learning outcome</h3><p>{course.outcome}</p></div>
        </aside>
      </div>
      <div className="dialog-cta"><p>Planning this workshop for your institution?</p><a className="button primary" href={`mailto:nareinoff@gmail.com?subject=${encodeURIComponent(`Workshop enquiry: ${course.title}`)}`}>Enquire about this course</a></div>
    </section>
  </div>;
}

function CourseCTA() {
  return <div className="course-cta reveal">
    <div><p className="eyebrow">Custom institutional programmes</p><h3>Looking for a customised workshop for your institution?</h3><p>The curriculum, duration, projects and difficulty level can be customised based on the participants’ academic background and learning objectives.</p></div>
    <div><a className="button primary" href="mailto:nareinoff@gmail.com?subject=Customised%20Workshop%20Enquiry">Enquire About a Workshop</a><a className="button text-link" href="#contact">Contact the Trainer <span aria-hidden="true">↗</span></a></div>
  </div>;
}

export function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState<CourseFilter>("All Courses");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const activeTrigger = useRef<HTMLButtonElement | null>(null);
  const categories: Course["category"][] = ["Data Analytics & Machine Learning", "Generative AI & AI Engineering"];
  const visibleCourses = activeFilter === "All Courses" ? courses : courses.filter((course) => course.filters.includes(activeFilter));

  const openDetails = (course: Course, trigger: HTMLButtonElement) => {
    activeTrigger.current = trigger;
    setSelectedCourse(course);
  };
  const closeDetails = () => {
    setSelectedCourse(null);
    window.setTimeout(() => activeTrigger.current?.focus(), 0);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses & Workshops Offered by Narein Karthik E",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem", position: index + 1,
      item: { "@type": "Course", name: course.title, description: course.tagline, provider: { "@type": "Person", name: "Narein Karthik E" } },
    })),
  };

  return <section className="courses section" id="courses">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="courses-heading reveal"><p className="eyebrow">06 · Courses & workshops offered</p><h2>Practical programmes for <em>data, AI</em> and applied learning.</h2><p>Focused workshops for engineering students, faculty and institutional teams—designed around guided practice, real datasets and tangible project outcomes.</p></header>
    <CourseFilters active={activeFilter} onChange={setActiveFilter} />
    <div className="course-results" aria-live="polite"><p>{visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"}</p></div>
    {categories.map((category) => {
      const categoryCourses = visibleCourses.filter((course) => course.category === category);
      if (!categoryCourses.length) return null;
      return <div className="course-group" key={category}>
        <header className="course-group-heading"><span aria-hidden="true">{category.startsWith("Data") ? "01" : "02"}</span><h3>{category}</h3></header>
        <div className="course-grid">{categoryCourses.map((course) => <CourseCard key={course.id} course={course} onView={openDetails} />)}</div>
      </div>;
    })}
    <CourseCTA />
    {selectedCourse && <CourseDetails course={selectedCourse} onClose={closeDetails} />}
  </section>;
}
