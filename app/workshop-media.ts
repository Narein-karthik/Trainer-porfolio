export type WorkshopMedia = {
  src: string;
  alt: string;
  title: string;
  institution: string;
  date?: string;
  kind: "Event poster" | "Event highlights" | "Session photo" | "Press coverage";
  description: string;
};

export const facultythonImages: WorkshopMedia[] = [
  {
    src: "/images/workshops/facultython-2026-jury-poster.png",
    alt: "FACULTYTHON 2026 poster naming Narein Karthik E as a jury member for the seven-hour hackathon on 31 October 2026",
    title: "FACULTYTHON 2026 — Jury Member",
    institution: "Meston College of Arts & Science · Top Engineers–India",
    date: "31 October 2026",
    kind: "Event poster",
    description: "Narein Karthik E served as a jury member for FACULTYTHON 2026, a seven-hour hackathon organised by Meston College of Arts & Science in collaboration with Top Engineers–India, for faculty, students, research scholars, startups and industry experts.",
  },
  {
    src: "/images/workshops/facultython-2026-event-highlights.png",
    alt: "FACULTYTHON 2026 collage showing jury participation, interactions with participants, felicitation and certificate presentations",
    title: "FACULTYTHON 2026 — Event Highlights",
    institution: "Meston College of Arts & Science · Top Engineers–India",
    date: "31 October 2026",
    kind: "Event highlights",
    description: "Moments from Narein’s participation as a jury member: judging, interacting with participants, felicitation and certificate presentations at FACULTYTHON 2026.",
  },
  {
    src: "/images/workshops/facultython-2026-press-coverage.png",
    alt: "Tamil newspaper clipping with coverage and group photographs of FACULTYTHON 2026",
    title: "FACULTYTHON 2026 — Press Coverage",
    institution: "Meston College of Arts & Science · Top Engineers–India",
    kind: "Press coverage",
    description: "Newspaper coverage of FACULTYTHON 2026, the seven-hour hackathon held on 31 October 2026 at Meston College of Arts & Science in collaboration with Top Engineers–India.",
  },
];

// Dates without a visible year are kept as printed, rather than inferred.
export const galleryImages: WorkshopMedia[] = [
  ...facultythonImages,
  {
    src: "/images/workshops/vemana-generative-ai-rag.jpg",
    alt: "Vemana Institute of Technology poster for Introduction to Generative AI and RAG, 5 October 2026",
    title: "Introduction to Generative AI & RAG",
    institution: "Vemana Institute of Technology, Bengaluru",
    date: "5 October 2026",
    kind: "Event poster",
    description: "A seminar for third-semester students, organised by the Department of Artificial Intelligence and Machine Learning, with Narein Karthik E as speaker. Venue: LB 311.",
  },
  {
    src: "/images/workshops/bimsr-rag-ai-agents.jpg",
    alt: "RAG and AI Agents workshop collage with classroom sessions and certificate presentations at BIMSR",
    title: "RAG & AI Agents Workshop",
    institution: "BIMSR · Top Engineers, Bengaluru",
    date: "26 September 2026",
    kind: "Event highlights",
    description: "Classroom teaching, learner participation and certificate presentations from the RAG & AI Agents workshop at Bangalore Institute of Management Science & Research.",
  },
  {
    src: "/images/workshops/workshop-11.jpg",
    alt: "HACK 2026 seven-hour offline hackathon collage showing teams, project discussions and certificates",
    title: "HACK 2026 · Seven-Hour Hackathon",
    institution: "BIMSR · Top Engineers, Bengaluru",
    date: "25 August 2026",
    kind: "Event highlights",
    description: "Team coding, project discussions and recognition moments from the seven-hour offline hackathon at Bangalore Institute of Management Science & Research.",
  },
  {
    src: "/images/workshops/workshop-10.jpg",
    alt: "AI and AI Tools workshop collage showing Narein teaching and students taking part at BIMSR",
    title: "AI & AI Tools · August Workshop",
    institution: "BIMSR · Top Engineers, Bengaluru",
    date: "8 August 2026",
    kind: "Event highlights",
    description: "Highlights from an AI and AI Tools workshop, including explanations of AI concepts, classroom demonstrations and student interaction.",
  },
  {
    src: "/images/workshops/workshop-09.jpg",
    alt: "AI and AI Tools workshop announcement featuring Narein Karthik E, dated 8 August 2026",
    title: "AI & AI Tools · Workshop Announcement",
    institution: "BIMSR · Top Engineers, Bengaluru",
    date: "8 August 2026",
    kind: "Event poster",
    description: "Workshop announcement featuring Narein Karthik E, CEO of DTEKSKILZ and Expert Member at Top Engineers, with a focus on AI tools, automation and productivity.",
  },
  {
    src: "/images/workshops/workshop-08.jpg",
    alt: "AI and AI Tools July workshop collage with classroom photographs and students holding certificates",
    title: "AI & AI Tools · July Workshop",
    institution: "BIMSR · Top Engineers, Bengaluru",
    date: "18 July 2026",
    kind: "Event highlights",
    description: "A look at the July AI and AI Tools workshop: AI fundamentals, classroom learning and participant certificate presentations.",
  },
  {
    src: "/images/workshops/workshop-07.jpg",
    alt: "Top Engineers online SQL and Python data analytics workshop collage, 11–12 July 2026",
    title: "Data Analytics Using SQL & Python",
    institution: "Top Engineers · Online via Google Meet",
    date: "11–12 July 2026",
    kind: "Event highlights",
    description: "A two-day online workshop on data analytics using SQL and Python, documented through live coding sessions, SQL demonstrations and participation certificates.",
  },
  {
    src: "/images/workshops/workshop-06.jpg",
    alt: "AI-Powered Excel workshop collage showing spreadsheet demonstrations and a participant group at BIMSR",
    title: "AI-Powered Excel Workshop",
    institution: "BIMSR · Top Engineers, Bengaluru",
    date: "13 June 2026",
    kind: "Event highlights",
    description: "Spreadsheet demonstrations, classroom exercises and participant interactions from the AI-Powered Excel workshop at Bangalore Institute of Management Science & Research.",
  },
  {
    src: "/images/workshops/workshop-05.jpg",
    alt: "BTI inter-collegiate hackathon collage with participating teams, judges and prize winners",
    title: "24-Hour Inter-Collegiate Hackathon",
    institution: "Bangalore Technological Institute",
    date: "16–17 May 2026",
    kind: "Event highlights",
    description: "A 24-hour hackathon at APR Innovation Lab with 82 participants from multiple institutions. The collage records team activities, judging and prize presentations, and lists Narein Karthik E as a judge.",
  },
  {
    src: "/images/workshops/workshop-04.jpg",
    alt: "BTI hackathon poster listing Narein Karthik E among the judges, dated 16 May 2026",
    title: "BTI Hackathon · Meet the Judges",
    institution: "Bangalore Technological Institute",
    date: "16 May 2026",
    kind: "Event poster",
    description: "The hackathon announcement for APR Innovation Lab, featuring Narein Karthik E on the judging panel and inviting students to code, collaborate and solve real-world challenges.",
  },
  {
    src: "/images/workshops/workshop-03.jpg",
    alt: "BTI IC Engines and EV workshop poster featuring Narein Karthik E and fellow speakers",
    title: "IC Engines & EV Workshop",
    institution: "Bangalore Technological Institute",
    date: "14 May",
    kind: "Event poster",
    description: "An IC Engines and Electric Vehicles workshop for BTI first-year students at APR Innovation Lab, featuring Narein Karthik E, Pruthvi Narayana Reddy and Dr. Prabhakar Sekar.",
  },
  {
    src: "/images/workshops/workshop-02.jpg",
    alt: "National Startup Day 2026 collage from BTI with speakers, audience and group photographs",
    title: "National Startup Day · Event Highlights",
    institution: "Bangalore Technological Institute",
    date: "21 January 2026",
    kind: "Event highlights",
    description: "Speakers, student discussions and a group photograph from National Startup Day, organised by the Department of Robotics & AI with the BTI Incubation Centre.",
  },
  {
    src: "/images/workshops/workshop-01.jpg",
    alt: "National Startup Day poster at BTI featuring Narein Karthik E, CEO of DTEKSKILZ",
    title: "National Startup Day · Speaker Invitation",
    institution: "Bangalore Technological Institute",
    date: "21 January 2026",
    kind: "Event poster",
    description: "The National Startup Day announcement at BTI Seminar Hall, featuring Narein Karthik E alongside fellow startup founders S Amogha Varsha and Pruthvi Narayana Reddy.",
  },
];

const sessionPhotos: WorkshopMedia[] = [
  { src: "/images/excel-workshop.png", alt: "Narein teaching an AI-powered Excel workshop", title: "AI-Powered Excel in the Classroom", institution: "Training moments", kind: "Session photo", description: "A live spreadsheet demonstration during an AI-powered Excel training session." },
  { src: "/images/classroom-session.png", alt: "Narein leading an interactive classroom session", title: "Interactive Classroom Learning", institution: "Training moments", kind: "Session photo", description: "Concept explanation, live demonstration and discussion in the classroom." },
  { src: "/images/autotronics-session.png", alt: "Autotronics workshop demonstration around a vehicle", title: "Autotronics & EV Demonstration", institution: "Training moments", kind: "Session photo", description: "An applied demonstration with participants gathered around a vehicle." },
  { src: "/images/bti-group.png", alt: "Group photograph at Bangalore Technological Institute", title: "Institutional Programmes", institution: "Bangalore Technological Institute", kind: "Session photo", description: "A group photograph with participants at Bangalore Technological Institute." },
  { src: "/images/online-training.png", alt: "An online technical training session", title: "Online Technical Training", institution: "Training moments", kind: "Session photo", description: "Remote technical instruction with screen sharing and live walkthroughs." },
  { src: "/images/student-recognition.png", alt: "Narein with students receiving event certificates", title: "Student Recognition", institution: "Training moments", kind: "Session photo", description: "A certificate presentation with students following an institutional event." },
  { src: "/images/mentorship-event.png", alt: "Students and mentors at an institutional recognition event", title: "Mentorship & Guidance", institution: "Training moments", kind: "Session photo", description: "Students and mentors together at an institutional recognition event." },
];

export const workshopSlides: WorkshopMedia[] = [...galleryImages, ...sessionPhotos];
