export const navItems = [
  ["Home", "home"], ["About", "about"], ["Experience", "experience"],
  ["Workshops", "workshops"], ["Expertise", "expertise"], ["Projects", "projects"],
  ["Recognition", "recognition"], ["Contact", "contact"],
] as const;

export const experience = [
  { role: "Senior Expert Member", org: "Top Engineers", copy: "Delivers technical workshops, prepares practical exercises and learning material, and mentors students in Python, SQL, data analytics and AI." },
  { role: "Founder & CEO", org: "DTEKSKILZ", copy: "Leads workshops, mentoring, internships and project-based programmes designed around career-oriented learning." },
  { role: "Trainer & Mentor", org: "BTI Ignite Incubation Council", copy: "Supports institutional programmes, innovation events, student mentoring and entrepreneurship activities." },
] as const;

export const engagements = [
  { title: "Data Analytics using SQL & Python", meta: "Top Engineers · Trainer & Senior Expert Member", copy: "Two-day session on SQL querying, Python analytics, data cleaning and guided exercises." },
  { title: "AI-Powered Excel Workshop", meta: "Bangalore Institute of Management Science & Research", copy: "Advanced formulas, cleaning, automation, analysis and interactive visualisation." },
  { title: "Faculty Development Programme: Autotronics & EVs", meta: "BTI + Freelancers India · Trainer", copy: "Two-day programme on automotive electronics, electric-vehicle fundamentals and mobility trends." },
  { title: "BTI Hackathon 2026", meta: "Judge", copy: "Reviewed student projects for innovation, execution, relevance and presentation." },
  { title: "National Startup Day", meta: "BTI · Speaker", copy: "Shared lessons from building DTEKSKILZ and turning ideas into practical initiatives." },
  { title: "Two-Week Digital Marketing Course", meta: "BTI Ignite · Trainer / Supporting Mentor", copy: "Supported first-year MBA students through activities, mentoring and programme coordination." },
  { title: "Chief Guest & Speaker Session", meta: "BTI Ignite", copy: "Spoke about entrepreneurship, student leadership, innovation and career development." },
  { title: "Data Science Training", meta: "Top Engineers · Trainer & Senior Expert Member", copy: "Practical sessions covering SQL, Python analytics and machine-learning foundations." },
] as const;

export const expertise = {
  "Data & AI": ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Power BI", "Computer Vision", "Generative AI", "Prompt Engineering"],
  "Programming & tools": ["Python", "SQL", "Database Fundamentals", "Microsoft Excel", "AI-Powered Excel", "Android Development", "Firebase"],
  "Training & career": ["Technical Mentoring", "Workshop Facilitation", "Project-Based Learning", "Career Guidance", "Resume Preparation", "Interview Readiness"],
} as const;

export const programmes = [
  "Artificial Intelligence for Beginners", "Machine Learning using Python", "Data Analytics using SQL and Python",
  "Python Programming for Beginners", "SQL Fundamentals and Querying", "Excel for Data Analytics",
  "AI-Powered Excel and Automation", "Generative AI and Prompt Engineering", "Computer Vision Fundamentals",
  "Android Application Development", "Resume and Interview Readiness", "Project-Based Internship Programmes",
  "Faculty Development Programmes", "Custom Institutional Training Programmes",
] as const;

export const projects = [
  { n: "01", title: "TexInspect Industrial", copy: "Inspection-management platform for textile-quality inspection, defect tracking, reporting and analytics.", tech: "React · TypeScript · Firebase" },
  { n: "02", title: "Rakta-Seva Connect", copy: "Android application connecting blood donors with emergency requests using location, maps and notifications.", tech: "Kotlin · Jetpack Compose · Firebase" },
  { n: "03", title: "Vision-Based Drone Tracking & Gesture Control", copy: "DJI Tello computer-vision system using person tracking and gesture control.", tech: "YOLO · OpenCV · MediaPipe · TensorFlow" },
  { n: "04", title: "Traffic Sign Detection using YOLO", copy: "Custom-trained computer-vision model for traffic-sign detection and classification.", tech: "YOLO · Computer Vision" },
] as const;

export const recognition = [
  "Senior Expert Member at Top Engineers", "Founder and CEO of DTEKSKILZ", "AI and Data Analytics Trainer",
  "Technical Mentor", "Hackathon Judge", "Institutional Speaker", "Chief Guest", "Student Coordinator",
  "Innovation and Entrepreneurship Advocate", "National-Level Paper Presentation Recognition", "Project Expo Winner",
  "Ideathon Winner", "Salesforce Agentblazer Champion", "Technical Event Judge",
] as const;
